import { useMemo, useRef, useState } from 'react';
import { Button } from '../Button';
import { IconArrowLeft, IconArrowRight } from '../Icons';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import { ValidatorOptions } from '../validator';
import styles from './Calendar.module.css';
import {
  addMonths,
  calculateNewDayOfMonth,
  changeYearInDate,
  generateDaysArray,
  generateYears,
  getDateForInput,
  getDaysInMonth,
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

const onActivate = (fn: () => void) => (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fn();
  }
};

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

  const handleFocus = () => {
    openCalendar();

    requestAnimationFrame(() => {
      const input = inputRef.current;

      if (!input || document.activeElement !== input) return;

      const position = input.value.length;
      input.setSelectionRange(position, position);
    });
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
          inputRef.current?.focus();

          setCalendarState((prevState) => ({
            ...prevState,
            open: !prevState.open,
            dropDwonState: 'days',
          }));
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
          onFocus: handleFocus,
          onMouseDown: openCalendar,
          onKeyDown: (e) => {
            if (e.key === 'Escape') {
              if (!calendarState.open) return;

              e.preventDefault();
              closeCalendar();
            }

            if (e.key === 'ArrowDown') {
              e.preventDefault();
              openCalendar();
            }
          },
          role: 'combobox',
          'aria-expanded': calendarState.open,
          'aria-haspopup': 'dialog',
        }}
      />

      <div className={[styles.dropdownWrapper, calendarState.open ? styles.open : ''].join(' ')}>
        <div className={styles.dropdown} onMouseDown={(e) => e.preventDefault()} onBlur={handleBlur}>
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

              <div className={styles.years}>
                {years.map((v) => (
                  <div className={styles.yearsChild} key={v + calendarState.value}>
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
            <div className={styles.months}>
              {months.map((v, i) => (
                <div className={styles.monthsChild} key={v + calendarState.value}>
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

              <div className={styles.days}>
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
