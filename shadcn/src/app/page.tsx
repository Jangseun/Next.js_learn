import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"
"use client" 
//onclik 할 떄 무조건 써야
import React from 'react'// 요 밑에 리엑트 오류떠서 검색해 봤더니
const [date, setDate] = React.useState<Date | undefined>(new Date())

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Button onClick={() => {
          console.log("Button clicked!");
        }} variant={"outline"} size={"icon"}>
          <ChevronLeft />
        </Button>
      </div>

      <div className="flex justify-center items-center h-screen">
        <Calendar 
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
    />
      </div>
    </div>
  );
}
