import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../Button';
import { IconArrowLeft, IconArrowRight } from '../Icons';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import { ValidatorOptions } from '../validator';
import { FOCUSABLE, KEY_TO_DIRECTION, OUTSIDE_FOCUSABLE } from './Calendar.const';
import styles from './Calendar.module.css';
import {
  addMonths,
  calculateNewDayOfMonth,
  changeYearInDate,
  findNeighbour,
  generateDaysArray,
  generateYears,
  getDateForInput,
  getDaysInMonth,
  getFocusable,
  getTabStops,
  onActivate,
  parseTypedDate,
} from './Calendar.utils';

interface CalendarProps extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  name: string;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  validatorOptions?: ValidatorOptions;
  initialValue?: '' | `${number}-${number}-${number}`;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  children,
  name,
  placeholder,
  label = 'Calendar',
  initialValue,
  disabled,
  onBlur,
  validatorOptions,
  className,
  style,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // set while a keyboard action may re-render (and unmount) the focused element
  const suppressBlurRef = useRef(false);
  // set when we move focus back to the input and don't want onFocus to reset the view
  const skipOpenRef = useRef(false);

  const [calendarState, setCalendarState] = useState<{
    value: string;
    open: boolean;
    dropDwonState: 'years' | 'days' | 'months';
  }>({
    value: initialValue ?? getDateForInput(new Date()),
    open: false,
    dropDwonState: 'days',
  });

  const {
    year: currentYear,
    month: currentMonth,
    day: currentDay,
    iso: gridBase,
  } = parseTypedDate(calendarState.value);

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (suppressBlurRef.current) return;

    const next = e.relatedTarget as Node | null;

    if (next && wrapperRef.current?.contains(next)) return;

    setCalendarState((prev) => ({
      ...prev,
      open: false,
    }));

    onBlur?.(e as React.FocusEvent<HTMLInputElement>);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nextValue = e.currentTarget.value;

    setCalendarState((prevState) => ({
      ...prevState,
      value: nextValue,
    }));
  };

  const openCalendar = () => {
    if (disabled) return;

    setCalendarState((prevState) => ({
      ...prevState,
      open: true,
      dropDwonState: 'days',
    }));
  };

  const closeCalendar = () => {
    setCalendarState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const updateDateValue = (nextDate: Date) => {
    setCalendarState((prevState) => ({
      ...prevState,
      value: getDateForInput(nextDate),
      open: true,
    }));
  };

  const changeDayOfMonth = (day: number) => {
    updateDateValue(calculateNewDayOfMonth(gridBase, day));
  };

  const changeMonth = (n: number) => {
    updateDateValue(addMonths(gridBase, n));
  };

  const changeYear = (n: number) => {
    updateDateValue(changeYearInDate(gridBase, n));
  };

  const setView = (view: 'years' | 'days' | 'months') => {
    setCalendarState((prevState) => ({
      ...prevState,
      dropDwonState: view,
    }));
  };

  const selectDay = (day: number) => {
    if (day > 0) {
      changeDayOfMonth(day);
    }

    setCalendarState((prev) => ({
      ...prev,
      open: false,
    }));

    setTimeout(() => {
      inputRef.current?.blur();
    });
  };

  const focusPreferred = () => {
    const root = dropdownRef.current;
    if (!root) return;

    const marked = root.querySelector<HTMLElement>('[data-autofocus]');
    const target = marked ? (marked.matches(FOCUSABLE) ? marked : marked.querySelector<HTMLElement>(FOCUSABLE)) : null;

    (target ?? getFocusable(root)[0])?.focus();
  };

  const focusInput = () => {
    skipOpenRef.current = true;
    inputRef.current?.focus();
  };

  // After a keyboard action re-renders the dropdown (view switch, new value),
  // the focused element may be gone - put focus back inside the dropdown.
  useEffect(() => {
    console.log('333');
    if (!suppressBlurRef.current) return;

    suppressBlurRef.current = false;

    if (!calendarState.open) return;
    if (dropdownRef.current?.contains(document.activeElement)) return;

    focusPreferred();
  });

  const handleInputFocus = () => {
    if (skipOpenRef.current) {
      skipOpenRef.current = false;
      return;
    }

    openCalendar();
  };

  // Input: ArrowDown opens the dropdown / moves focus into it, Escape closes it.
  // Left/right/up stay normal text-caret keys.
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Escape') {
      if (!calendarState.open) return;

      e.preventDefault();
      closeCalendar();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (!calendarState.open) {
        openCalendar();
        return;
      }

      focusPreferred();
    }
  };

  // Dropdown: arrows move focus between its elements, Escape closes it.
  const handleDropdownKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeCalendar();
      focusInput();
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      // activation can re-render the dropdown - keep it open and restore focus afterwards
      suppressBlurRef.current = true;
      return;
    }

    if (e.key === 'Tab') {
      const current = document.activeElement as HTMLElement | null;
      if (!current) return;

      const stops = getTabStops(dropdownRef.current).filter((el) => el !== current);
      const following = (el: HTMLElement) => !!(current.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING);

      const next = e.shiftKey ? [...stops].reverse().find((el) => !following(el)) : stops.find((el) => following(el));

      if (next) {
        e.preventDefault();
        next.focus();
        return;
      }

      if (e.shiftKey) {
        // before the first stop -> back to the input
        e.preventDefault();
        focusInput();
        return;
      }

      // after the last stop -> continue to the next focusable element outside the calendar
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const outside = Array.from(document.querySelectorAll<HTMLElement>(OUTSIDE_FOCUSABLE)).find(
        (el) => !wrapper.contains(el) && !!(wrapper.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING),
      );

      e.preventDefault();

      if (outside) {
        outside.focus();
      } else {
        current.blur();
        closeCalendar();
      }
      return;
    }

    const dir = KEY_TO_DIRECTION[e.key];
    if (!dir) return;

    e.preventDefault();

    const items = getFocusable(dropdownRef.current);
    const current = document.activeElement as HTMLElement | null;

    if (!current || !items.includes(current)) {
      items[0]?.focus();
      return;
    }

    const next = findNeighbour(items, current, dir);

    if (next) {
      next.focus();
    } else if (dir === 'up') {
      focusInput();
    }
  };

  const weekdays = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) =>
        new Date(2021, 0, (i + 4) % 7).toLocaleString('en-US', {
          weekday: 'short',
        }),
      ),
    [],
  );

  const months = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) =>
        new Date(2021, i + 1, 0).toLocaleString('en-US', {
          month: 'short',
        }),
      ),
    [],
  );

  const days = generateDaysArray(gridBase);
  const years = generateYears(gridBase);

  return (
    <div
      ref={wrapperRef}
      className={[styles.n23mCalendar, 'n23mCalendar', className].filter(Boolean).join(' ')}
      {...props}
      style={{ ...style }}
    >
      <div
        className={styles.icon}
        onMouseDown={(e) => {
          if (disabled) return;

          e.preventDefault();

          const input = inputRef.current;

          if (calendarState.open) {
            closeCalendar();

            if (input && document.activeElement !== input) {
              skipOpenRef.current = true;
              input.focus();
            }
          } else {
            input?.focus();
            openCalendar();
          }
        }}
      />

      <Input
        inputRef={inputRef}
        label={label}
        type="text"
        kind="calendar"
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        value={calendarState.value}
        validatorOptions={[
          ...(validatorOptions ?? []),
          {
            type: 'date',
          },
        ]}
        className={styles.arrowUp}
        inputProps={{
          onFocus: handleInputFocus,
          onMouseDown: openCalendar,
          onKeyDown: handleInputKeyDown,
          role: 'combobox',
          'aria-expanded': calendarState.open,
          'aria-haspopup': 'dialog',
        }}
      />

      <div className={[styles.dropdownWrapper, calendarState.open ? styles.open : ''].join(' ')}>
        <div
          ref={dropdownRef}
          className={styles.dropdown}
          onMouseDown={(e) => e.preventDefault()}
          onKeyDown={handleDropdownKeyDown}
          onBlur={handleBlur}
        >
          {calendarState.dropDwonState === 'years' && (
            <>
              <div className={styles.controls} style={{ marginBottom: '10px' }}>
                <div style={{ width: '30px' }}>
                  <Button
                    type="button"
                    padding="0"
                    height="30px"
                    width="30px"
                    title="Previous years"
                    variant="secondary"
                    onClick={() => changeYear(currentYear - 9)}
                  >
                    <IconArrowLeft height={22} width={22} />
                  </Button>
                </div>

                <div style={{ width: '60%' }} className={styles.controlsDate}>
                  <div
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    onClick={() => setView('days')}
                    onKeyDown={onActivate(() => setView('days'))}
                  >
                    {currentYear}
                  </div>
                </div>

                <div style={{ width: '30px' }}>
                  <Button
                    type="button"
                    padding="0"
                    height="30px"
                    width="30px"
                    title="Next years"
                    variant="secondary"
                    onClick={() => changeYear(currentYear + 9)}
                  >
                    <IconArrowRight height={22} width={22} />
                  </Button>
                </div>
              </div>

              <div className={styles.years} data-grid>
                {years.map((v) => (
                  <div
                    className={styles.yearsChild}
                    key={v + calendarState.value}
                    data-autofocus={currentYear === v ? '' : undefined}
                  >
                    <Button
                      type="button"
                      height="40px"
                      width="80px"
                      variant={currentYear === v ? 'primary' : 'subtle'}
                      title="year"
                      onClick={() => {
                        changeYear(v);
                        setView('days');
                      }}
                    >
                      <TextBox mobileSize={14} desktopSize={14} color="inherit">
                        {v}
                      </TextBox>
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}

          {calendarState.dropDwonState === 'months' && (
            <div className={styles.months} data-grid>
              {months.map((v, i) => (
                <div
                  className={styles.monthsChild}
                  key={v + calendarState.value}
                  data-autofocus={currentMonth === i ? '' : undefined}
                >
                  <Button
                    type="button"
                    height="40px"
                    width="80px"
                    variant={currentMonth === i ? 'primary' : 'subtle'}
                    title="month"
                    onClick={() => {
                      changeMonth(i - currentMonth);
                      setView('days');
                    }}
                  >
                    <TextBox mobileSize={14} desktopSize={14} color="inherit">
                      {v}
                    </TextBox>
                  </Button>
                </div>
              ))}
            </div>
          )}

          {calendarState.dropDwonState === 'days' && (
            <>
              <div className={styles.controls}>
                <div style={{ width: '30px' }}>
                  <Button
                    type="button"
                    padding="0"
                    height="30px"
                    width="30px"
                    title="Previous month"
                    variant="secondary"
                    onClick={() => changeMonth(-1)}
                  >
                    <IconArrowLeft height={22} width={22} />
                  </Button>
                </div>

                <div style={{ width: '60%' }} className={styles.controlsDate}>
                  <div
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    onClick={() => setView('years')}
                    onKeyDown={onActivate(() => setView('years'))}
                  >
                    {currentYear}
                  </div>

                  <div>-</div>

                  <div
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    onClick={() => setView('months')}
                    onKeyDown={onActivate(() => setView('months'))}
                  >
                    {String(currentMonth + 1).padStart(2, '0')}
                  </div>

                  <div>-</div>

                  <div>{String(currentDay).padStart(2, '0')}</div>
                </div>

                <div style={{ width: '30px' }}>
                  <Button
                    type="button"
                    padding="0"
                    height="30px"
                    width="30px"
                    title="Next month"
                    variant="secondary"
                    onClick={() => changeMonth(1)}
                  >
                    <IconArrowRight height={22} width={22} />
                  </Button>
                </div>
              </div>

              <div className={styles.weekdays}>
                {weekdays.map((v) => (
                  <div key={v} className={styles.weekdaysChild}>
                    {v}
                  </div>
                ))}
              </div>

              <div className={styles.days} data-grid>
                {days.map((v) => {
                  const inMonth = v.day > 0 && v.day <= getDaysInMonth(gridBase);

                  return (
                    <div
                      key={v.day + calendarState.value}
                      className={[
                        styles.weekdaysChild,
                        styles.daysChild,
                        v.cssClass === 'active' && styles.daysActive,
                        v.cssClass === 'clickable' && styles.daysClickable,
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      data-autofocus={inMonth && v.cssClass === 'active' ? '' : undefined}
                      role={inMonth ? 'button' : undefined}
                      tabIndex={inMonth ? 0 : undefined}
                      onKeyDown={inMonth ? onActivate(() => selectDay(v.day)) : undefined}
                      onMouseDown={inMonth ? () => selectDay(v.day) : undefined}
                    >
                      {inMonth ? v.day : ' '}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Calendar.displayName = 'Calendar';
