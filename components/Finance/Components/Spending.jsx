import Chart from "./Chart";
function Spending({ data }) {
  return (
    <div className="flex flex-col p-5 bg-white rounded-2xl">
      <p className="text-xl font-bold text-dark-brown">
        Spending - Last 7 days
      </p>
      <div className="flex flex-row pb-4 border-b border-cream">
        {data?.spendingLast7Days.map((item) => {
          return <Chart item={item} />;
        })}
      </div>
      <div className="flex items-end justify-between pt-4">
        <div>
          <p className="text-xs text-medium-brown">Total this month</p>
          <p className="text-2xl font-extrabold">
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
