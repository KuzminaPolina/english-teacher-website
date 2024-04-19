import React, { useState } from "react";

const Schedule = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const currentMonthName = months[month];
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarData = [];
  let dayCounter = 1;
  let emptyCells = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (emptyCells > 0) {
        week.push("");
        emptyCells--;
      } else if (dayCounter <= daysInMonth) {
        week.push(dayCounter);
        dayCounter++;
      } else {
        week.push("");
      }
    }
    calendarData.push(week);
    if (dayCounter > daysInMonth) break;
  }

  return (
    <div className="md:grid grid-cols-2">
      <div className="calendar">
        <div className=" w-[300px] flex justify-between">
          <button
            onClick={() => {
              setMonth(month - 1);
              if (month == 0) {
                setMonth(11);
                setYear(year - 1);
              }
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              setMonth(month + 1);
              if (month == 11) {
                setMonth(0);
                setYear(year + 1);
              }
            }}
          >
            Next
          </button>
        </div>
        <table className="w-[300px]">
          <thead>
            <tr>
              <th
                colSpan={7}
                id="monthYear"
                className="w-[40px] h-[40px] text-center text-black"
              >
                {currentMonthName} {year}
              </th>
            </tr>
            <tr>
              <th className="w-[40px] h-[40px] text-center text-black">Пн</th>
              <th className="w-[40px] h-[40px] text-center text-black">Вт</th>
              <th className="w-[40px] h-[40px] text-center text-black">Ср</th>
              <th className="w-[40px] h-[40px] text-center text-black">Чт</th>
              <th className="w-[40px] h-[40px] text-center text-black">Пт</th>
              <th className="w-[40px] h-[40px] text-center text-black">Сб</th>
              <th className="w-[40px] h-[40px] text-center text-black">Вс</th>
            </tr>
          </thead>
          <tbody id="days">
            {calendarData.map((week) => {
              return (
                <tr>
                  {week.map((day) => {
                    return (
                      <td
                        className={
                          day === today && month === currentMonth
                            ? "today"
                            : "day"
                        }
                      >
                        {day}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="form mt-8">
        <form id="appointmentForm" className="flex flex-col gap-5">
          <input
            type="text"
            className="p-2 rounded-md text-black"
            name="firstName"
            placeholder="Имя"
            required
          />
          <input
            type="text"
            className="p-2 rounded-md text-black"
            name="lastName"
            placeholder="Фамилия"
            required
          />
          <input
            type="tel"
            className="p-2 rounded-md text-black"
            name="phone"
            placeholder="Телефон"
            required
          />
          <input
            type="email"
            className="p-2 rounded-md text-black"
            name="email"
            placeholder="Почта"
            required
          />
          <input
            type="hidden"
            className="p-2 rounded-md text-black"
            name="selectedDate"
            id="selectedDate"
          />
          <button type="submit" className="bg-amber-400 p-2 rounded-md">
            Записаться
          </button>
        </form>
      </div>

      <div id="message" style={{ display: "none" }}></div>
    </div>
  );
};

export default Schedule;
