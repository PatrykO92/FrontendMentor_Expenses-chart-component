import Image from "next/image";
import logo from "@/public/logo.svg";

const MyBalance = () => {
  return (
    <div className="flex items-center p-5 text-white rounded-2xl justify-between bg-soft-red min-w-[20rem]">
      <div>
        <p className="text-xs">My balance</p>
        <p className="mt-1 font-semibold">$921.48</p>
      </div>
      <Image src={logo} alt="" width={40} />
    </div>
  );
};

export default MyBalance;
