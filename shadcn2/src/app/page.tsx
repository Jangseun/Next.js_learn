"use client"
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react"; 
import { Textarea } from "@/components/ui/textarea"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="bg-amber-400 w-full h-20">
      </div>

      <div>
        <Textarea placeholder="Type your message here.">
        </Textarea>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center">
        <Button variant={"outline"} size={"icon"}>
          <ChevronLeft />
        </Button>
        </div>
      
        <div className="flex justify-center">
          <Button variant={"outline"} size={"icon"}>
            <ChevronRight />
          </Button>
        </div>

        <div className="flex justify-center">
          <Button variant={"outline"} size={"icon"}>
            <ChevronUp />
          </Button>
        </div>

        <div className="flex justify-center">
          <Button variant={"outline"} size={"icon"}>
            <ChevronDown />
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3 w-40 h-40 border ">집</CarouselItem>
            <CarouselItem className="basis-1/3 w-40 h-40 border">가</CarouselItem>
            <CarouselItem className="basis-1/3 w-40 h-40 border">고</CarouselItem>
            <CarouselItem className="basis-1/3 w-40 h-40 border">싶</CarouselItem>
            <CarouselItem className="basis-1/3 w-40 h-40 border">당</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
      

    </div>
  );
}
