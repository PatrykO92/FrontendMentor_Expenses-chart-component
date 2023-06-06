import { fetchData } from "@/utils";

import MyBalance from "./Components/MyBalance";
import Spending from "./Components/Spending";

async function Finance() {
  let data;
  try {
    const res = await fetchData();
    data = res;
  } catch (err) {
    console.log("Error in data fetching.");
  }
  return (
    <main className="flex flex-col gap-3">
      <MyBalance myBalance={data.myBalance} />
      <Spending data={data} />
    </main>
  );
}

export default Finance;
