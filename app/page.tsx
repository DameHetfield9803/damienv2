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
import Image from "next/image";
import damien from "../public/Damien.webp";
import go from "../public/go.png";
import ts from "../public/ts.png";
import php from "../public/php.png";
import cpp from "../public/cpp.png";
import cs from '../public/csharp.png'
import python from '../public/python.png'
export default function Home() {
  return (
    <main className="mx-auto text-center p-4 text-lg">
      <h1 className="text-3xl font-light">
        <TypeAnimation sequence={["Hi! I'm Damien."]} />
      </h1>
      <Image
        src={damien}
        alt="Damien"
        className="mx-auto rounded-4xl scale-85 mt-3"
      />
      <p className="mt-2">I do software engineering and cybersecurity.</p>
      <p className="mt-3">Languages I use</p>
      <Carousel className="w-full max-w-sm mx-auto mt-5 overflow-x-auto align-middle">
        <CarouselContent className="flex flex-row space-x-4 snap-x snap-mandatory overflow-x-scroll">
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image src={go} alt="GoLang" />
              </CardContent>
              <CardFooter>Golang</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image src={ts} alt="TypeScript" className="rounded-4xl"/>
              </CardContent>
              <CardFooter>TypeScript</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image src={php} alt="PHP" />
              </CardContent>
              <CardFooter>PHP</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image src={cpp} alt="C++" />
              </CardContent>
              <CardFooter>C++</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image src={cs} alt="C#" />
              </CardContent>
              <CardFooter>C#</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image src={python} alt="Python" />
              </CardContent>
              <CardFooter>Python</CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
