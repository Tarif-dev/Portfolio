import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <h1>Hello Portfolio!</h1>
      </div>
      <Image src="/react-svgrepo-com.svg" width={500} height={500}/>
    </main>
  );
}
