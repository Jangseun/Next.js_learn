import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react"; 


export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Button variant={"outline"} size={"icon"}>
          <ChevronLeft />
        </Button>
      </div>
    </div>
  );
}
