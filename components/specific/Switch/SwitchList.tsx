import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import NextImg from "next/image";
import Typography from "@/components/common/Typography";
import Tabs from "@/components/common/Tabs";

const SwitchList = () => {
  const fakeData = [{
    image: "https://github.com/shadcn.png",
    title: "Switch "
  }]

  return (
      <div component-name="SwitchList">
        <Tabs/>
        <div className={"mt-4"}>
          <Carousel
              opts={{
                align: "start",
                slidesToScroll: 4,
              }}

          >
            <CarouselContent className="-ml-8">
              {Array.from({length: 10}, (_, index) => index + 1).map((item, index) => (
                  <CarouselItem
                      key={index}
                      className="basis-1/2  xl:basis-1/4 2xl:basis-1/6 pl-8"
                  >
                    <div className={"rounded-lg bg-sh-secondary-200 "}>
                      <NextImg
                          src={"https://images.unsplash.com/photo-1530623288743-52a89e908add?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkfGVufDB8fDB8fHww"}
                          alt={"https://github.com/shadcn.png"} quality={100} width={400}
                          height={400}
                          className={"rounded-t-lg w-full h-full object-cover"}/>
                      <Typography.H4 className={"px-4 py-6 text-center"}>Switch</Typography.H4>
                    </div>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="rounded-sm -left-4 bg-white"/>
            <CarouselNext className="rounded-sm -right-4 bg-white"/>
          </Carousel>
        </div>
      </div>
  );
};

export default SwitchList;