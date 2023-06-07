import Chart from "./Chart";

async function Spending({ data }) {
  async function heighestSpendingValue() {
    return data.spendingLast7Days.reduce((acc, curVal) => {
      if (curVal.amount >= acc) return curVal.amount;
      return acc;
    }, 0);
  }

  const getCurrentDay = () => {
    // Create a new Date object
    const currentDate = new Date();

    // Get the day of the week as an index (0-6)
    const dayIndex = currentDate.getDay();

    // Array of weekday names
    const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    // return current day
    return daysOfWeek[dayIndex];
  };

  const heighestValue = await heighestSpendingValue();
  const currentDay = await getCurrentDay();

  return (
    <div className="flex flex-col p-5 bg-white rounded-2xl">
      <p className="text-xl font-bold text-dark-brown">
        Spending - Last 7 days
      </p>
      <div className="flex flex-row pb-4 border-b border-cream">
        {data.spendingLast7Days.map((item) => {
          return (
            <Chart
              key={item.day}
              item={item}
              heighestValue={heighestValue}
              currentDay={currentDay}
            />
          );
        })}
      </div>
      <div className="flex items-end justify-between pt-4">
        <div>
          <p className="text-xs text-medium-brown">Total this month</p>
          <p className="text-2xl font-extrabold sm:text-3xl">
            ${data.totalSpendingThisMonth}
          </p>
        </div>
        <div className="text-right ">
          <p className="text-xs font-bold">{data.differenceFromLastMonth}</p>
          <p className="text-xs text-medium-brown">from last month</p>
        </div>
      </div>
    </div>
  );
}

export default Spending;
