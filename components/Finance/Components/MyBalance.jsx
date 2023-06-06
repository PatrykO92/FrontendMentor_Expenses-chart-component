import Image from "next/image";
import logo from "@/public/logo.svg";

async function MyBalance({ myBalance }) {
  return (
    <div className="flex items-center justify-between p-5 text-white rounded-2xl bg-soft-red">
      <div>
        <p className="text-xs">My balance</p>
        <p className="mt-1 text-xl font-semibold">${myBalance}</p>
      </div>
      <Image src={logo} alt="" width={45} />
    </div>
  );
}

export default MyBalance;
