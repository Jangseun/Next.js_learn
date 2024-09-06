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

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>집이좋음</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>그렇죠?</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>당연</MenubarItem>
                  <MenubarItem>ㅇ</MenubarItem>
                  <MenubarItem>YES or YES</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>뭐적지</MenubarItem>
              <MenubarItem>하핳ㅎ</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="bg-amber-400 w-full h-40 flex items-center">
        <Avatar className="w-24 h-24 mx-10">
          <AvatarImage src="https://img.freepik.com/premium-vector/village-modern-beautiful-house-free-vector_1167724-225.jpg?semt=ais_hybrid" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-white font-bold w-full h-30 text-7xl">집이 최고야!</div>
      </div>

      <div>
        <Textarea placeholder="하하 암거나 적어라" className="mt-5">
        </Textarea>
      </div>


      <div className="flex justify-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-60 h-60 border text-red-500 text-5xl font-bold flex items-center justify-center m-5">집</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-60 h-60 border text-orange-400 text-5xl font-bold flex items-center justify-center m-5">가</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-60 h-60 border text-yellow-500 text-5xl font-bold flex items-center justify-center m-5">고</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-60 h-60 border text-green-600 text-5xl font-bold flex items-center justify-center m-5">싶</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 w-60 h-60 border text-blue-500 text-5xl font-bold flex items-center justify-center m-5">당</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

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
    </div>
  );
}
