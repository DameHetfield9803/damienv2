"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Home() {
  return (
    <main className="mx-auto text-center p-4 text-lg">
      <h1 className="text-3xl font-light">
        <TypeAnimation sequence={["Hi! I'm Damien."]} className="text-teal-600"/>
      </h1>
      <img
        src="../Damien.webp"
        alt="Damien"
        className="mx-auto rounded-4xl scale-90 mt-3"
      />
      <p className="mt-2">I do software engineering and cybersecurity.</p>
      <p className="mt-3">Languages I use</p>
      <Carousel className="w-full max-w-sm mx-auto mt-5 overflow-x-auto align-middle">
        <CarouselContent className="flex flex-row space-x-4 snap-x snap-mandatory overflow-x-scroll">
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <img src={"../go.png"} alt="GoLang" />
              </CardContent>
              <CardFooter>Golang</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <img src="../ts.webp" alt="TypeScript" className="rounded-4xl"/>
              </CardContent>
              <CardFooter>TypeScript</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <img src="../php.png" alt="PHP" />
              </CardContent>
              <CardFooter>PHP</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <img src="../cpp.png" alt="C++" />
              </CardContent>
              <CardFooter>C++</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <img src="../csharp.png" alt="C#" />
              </CardContent>
              <CardFooter>C#</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <img src='../python.png' alt="Python" />
              </CardContent>
              <CardFooter>Python</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <img src='../java.png' alt="Python" />
              </CardContent>
              <CardFooter>Java</CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
