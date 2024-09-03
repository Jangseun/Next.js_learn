import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-cyan-900 h-screen w-full flex justify-center items-center gap-10">
      <div className="bg-violet-500 w-[100px] h-1/3 m-10 text-7xl font-bold rounded-xl opacity-50">집</div>
      <div className="bg-violet-600 w-80 h-80 m-10 text-6xl text-amber-400 rounded-t-full cursor-pointer hover:bg-red-800">가고</div>
      <div className="bg-[0 0 0] w-80 h-80 my-10 text-3xl underline border-4 border-black font-noto">싶다!</div>
    </div>
  )
}
