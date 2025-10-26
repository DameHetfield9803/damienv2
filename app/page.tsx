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
import damien from "../public/Damien.jpg";
import go from "../public/go.jpg";
import php from "../public/php.jpg";
import cpp from "../public/cpp.jpg";
import ts from "../public/ts.jpg";
import cs from "../public/csharp.jpg";
import python from "../public/python.jpg";
import java from "../public/java.jpg";
export default function Home() {
  return (
    <main className="mx-auto text-center p-4 text-lg">
      <h1 className="text-3xl font-light">
        <TypeAnimation
          sequence={["Hi! I'm Damien."]}
          className="text-teal-600"
        />
      </h1>
      <Image
        src={damien}
        alt="Damien"
        className="mx-auto rounded-4xl scale-90 mt-3"
        width={400}
        height={300}
      />
      <p className="mt-2">I do software engineering and cybersecurity.</p>
      <p className="mt-3">Languages I use</p>
      <Carousel className="w-full max-w-sm mx-auto mt-5 overflow-x-auto align-middle">
        <CarouselContent className="flex flex-row space-x-4 snap-x snap-mandatory overflow-x-scroll">
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image src={go} alt="GoLang" width={400} height={300} />
              </CardContent>
              <CardFooter>Golang</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image
                  src={ts}
                  alt="TypeScript"
                  className="rounded-2xl"
                  width={400}
                  height={300}
                />
              </CardContent>
              <CardFooter>TypeScript</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image
                  src={php}
                  alt="PHP"
                  width={400}
                  height={300}
                  className="rounded-2xl"
                />
              </CardContent>
              <CardFooter>PHP</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image
                  src={cpp}
                  alt="C++"
                  width={400}
                  height={300}
                  className="rounded-2xl"
                />
              </CardContent>
              <CardFooter>C++</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image
                  src={cs}
                  alt="C#"
                  width={700}
                  height={300}
                  className="rounded-2xl"
                />
              </CardContent>
              <CardFooter>C#</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image
                  src={python}
                  alt="Python"
                  width={400}
                  height={300}
                  className="rounded-2xl"
                />
              </CardContent>
              <CardFooter>Python</CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 snap-start w-full">
            <Card className="w-full">
              <CardContent>
                <Image
                  src={java}
                  alt="Java"
                  width={400}
                  height={300}
                  className="rounded-2xl"
                />
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
