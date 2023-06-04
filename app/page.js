import MyBalance from "@/components/MyBalance";
import Spending from "@/components/Spending";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-3 bg-cream">
      <MyBalance />
      <Spending />
    </main>
  );
}
