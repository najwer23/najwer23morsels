import { useMemo, useRef, useState } from 'react';
import { Button } from '../button';
import { IconArrowLeft, IconArrowRight } from '../icons';
import { Input } from '../input';
import { TextBox } from '../textbox';
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
  isYYYYMMDD,
} from './Calendar.utils';

interface CalendarProps extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  name: string;
  label: string;
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
  onBlur,
  validatorOptions,
  className,
  style,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [calendarState, setCalendarState] = useState<{
    value: string;
    open: boolean;
    dropDwonState: 'years' | 'days' | 'months';
  }>({
    value: initialValue == '' ? '' : getDateForInput(initialValue ?? new Date()),
    open: false,
    dropDwonState: 'days',
  });

  const handleFocus = () => {
    setCalendarState((prevState) => ({
      ...prevState,
      value: '',
      open: true,
      dropDwonState: 'days',
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCalendarState((prev) => ({
      ...prev,
      open: false,
    }));

    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nextValue = e.currentTarget.value;

    setCalendarState((prevState) => ({
      ...prevState,
      value: nextValue,
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
    updateDateValue(
      calculateNewDayOfMonth(isYYYYMMDD(calendarState.value) ? calendarState.value : getDateForInput(new Date()), day),
    );
  };

  const changeMonth = (n: number) => {
    updateDateValue(addMonths(isYYYYMMDD(calendarState.value) ? calendarState.value : getDateForInput(new Date()), n));
  };

  const changeYear = (n: number) => {
    updateDateValue(
      changeYearInDate(isYYYYMMDD(calendarState.value) ? calendarState.value : getDateForInput(new Date()), n),
    );
  };

  const weekdays = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => new Date(2021, 0, (i + 4) % 7).toLocaleString('en-US', { weekday: 'short' })),
    [],
  );

  const months = useMemo(
    () => Array.from({ length: 12 }, (_, i) => new Date(2021, i + 1, 0).toLocaleString('en-US', { month: 'short' })),
    [],
  );

  const days = generateDaysArray(isYYYYMMDD(calendarState.value) ? calendarState.value : getDateForInput(new Date()));
  const years = generateYears(isYYYYMMDD(calendarState.value) ? calendarState.value : getDateForInput(new Date()));

  const currentDate = isYYYYMMDD(calendarState.value) ? new Date(calendarState.value) : new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  return (
    <div
      className={[styles.n23mCalendar, 'n23mCalendar', className].filter(Boolean).join(' ')}
      {...props}
      style={{ ...style }}
    >
      <div
        className={styles.icon}
        onMouseDown={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
          setCalendarState((prevState) => ({
            ...prevState,
            value: '',
            open: !prevState.open,
            dropDwonState: 'days',
          }));
        }}
      />

      <Input
        inputRef={inputRef}
        label={label}
        type="text"
        kind="input"
        name={name}
        autoComplete={'off'}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleFocus}
        value={calendarState.value}
        validatorOptions={[
          ...(validatorOptions ?? []),
          {
            type: 'date',
          },
        ]}
        className={styles.arrowUp}
      />

      <div className={[styles.dropdownWrapper, calendarState.open ? styles.open : ''].join(' ')}>
        <div className={[styles.dropdown].join(' ')} onMouseDown={(e) => e.preventDefault()}>
          {calendarState.dropDwonState === 'years' && (
            <>
              <div className={styles.controls} style={{ marginBottom: '10px' }}>
                <div style={{ width: '30px' }}>
                  <Button
                    type="button"
                    padding={'3px 0 0 0'}
                    height={'30px'}
                    width={'30px'}
                    title="Prev Month"
                    backgroundColor="#F2F0EF"
                    borderColor="black"
                    onClick={() => changeYear(currentYear - 9)}
                  >
                    <IconArrowLeft color="black" height={22} width={22} />
                  </Button>
                </div>

                <div style={{ width: '60%' }} className={styles.controlsDate}>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      setCalendarState((prevState) => ({
                        ...prevState,
                        dropDwonState: 'days',
                      }))
                    }
                  >
                    {currentYear}
                  </div>
                </div>

                <div style={{ width: '30px' }}>
                  <Button
                    type="button"
                    padding={'3px 0 0 0'}
                    height={'30px'}
                    width={'30px'}
                    title="Prev Month"
                    backgroundColor="#F2F0EF"
                    borderColor="black"
                    onClick={() => changeYear(currentYear + 9)}
                  >
                    <IconArrowRight color="black" height={22} width={22} />
                  </Button>
                </div>
              </div>

              <div className={styles.years}>
                {years.map((v) => (
                  <div className={styles.yearsChild} key={v + calendarState.value}>
                    <Button
                      type="button"
                      key={v + calendarState.value}
                      height={'40px'}
                      width={'80px'}
                      color="black"
                      backgroundColor={currentYear == v ? 'white' : '#F2F0EF'}
                      borderColor="black"
                      title="year"
                      onClick={() => {
                        changeYear(v);
                        setCalendarState((prevState) => ({
                          ...prevState,
                          dropDwonState: 'days',
                        }));
                      }}
                    >
                      <TextBox mobileSize={14} desktopSize={14}>
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
                    key={v + calendarState.value}
                    height={'40px'}
                    width={'80px'}
                    backgroundColor={currentMonth == i ? 'white' : '#F2F0EF'}
                    borderColor="black"
                    title="month"
                    onClick={() => {
                      changeMonth(i - currentMonth);
                      setCalendarState((prevState) => ({
                        ...prevState,
                        dropDwonState: 'days',
                      }));
                    }}
                  >
                    <TextBox mobileSize={14} desktopSize={14}>
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
                    padding={'3px 0 0 0'}
                    height={'30px'}
                    width={'30px'}
                    title="Prev Month"
                    backgroundColor="#F2F0EF"
                    borderColor="black"
                    onClick={() => changeMonth(-1)}
                  >
                    <IconArrowLeft color="black" height={22} width={22} />
                  </Button>
                </div>

                <div style={{ width: '60%' }} className={styles.controlsDate}>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      setCalendarState((prevState) => ({
                        ...prevState,
                        dropDwonState: 'years',
                      }))
                    }
                  >
                    {currentYear}
                  </div>
                  <div>-</div>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      setCalendarState((prevState) => ({
                        ...prevState,
                        dropDwonState: 'months',
                      }))
                    }
                  >
                    {String(currentMonth + 1).padStart(2, '0')}
                  </div>
                  <div>-</div>
                  <div>{String(currentDay).padStart(2, '0')}</div>
                </div>

                <div style={{ width: '30px' }}>
                  <Button
                    type="button"
                    padding={'3px 0 0 0'}
                    height={'30px'}
                    width={'30px'}
                    title="Prev Month"
                    backgroundColor="#F2F0EF"
                    borderColor="black"
                    onClick={() => changeMonth(1)}
                  >
                    <IconArrowRight color="black" height={22} width={22} />
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
                {days.map((v) => (
                  <div
                    key={v.day + calendarState.value}
                    className={[
                      styles.weekdaysChild,
                      styles.daysChild,
                      v.cssClass == 'active' && styles.daysActive,
                      v.cssClass == 'clickable' && styles.daysClickable,
                    ].join(' ')}
                    onClick={() => {
                      if (v.day > 0) {
                        changeDayOfMonth(v.day);
                      }
                      setCalendarState((prev) => ({
                        ...prev,
                        open: false,
                      }));
                    }}
                  >
                    {v.day <= 0 || v.day > getDaysInMonth(calendarState.value) ? ' ' : v.day}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Calendar.displayName = 'Calendar';
