import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"
"use client" 


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
    </div>
  );
}
