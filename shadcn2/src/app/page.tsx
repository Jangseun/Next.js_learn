"use client"
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"; 
import { Textarea } from "@/components/ui/textarea"



export default function Home() {
  return (
    <div className="h-screen w-full flex">
      
      <div>
        <Textarea placeholder="Type your message here.">
        </Textarea>
      </div>

      <div className="flex justify-center h-screen">
        <Button variant={"outline"} size={"icon"}>
          <ChevronLeft />
        </Button>
      </div>
      
      <div className="flex justify-center h-screen">
        <Button variant={"outline"} size={"icon"}>
          <ChevronRight />
        </Button>
      </div>

    </div>
  );
}
