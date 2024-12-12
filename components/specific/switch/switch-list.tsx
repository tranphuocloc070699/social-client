"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NextImg from "next/image";
import Typography from "@/components/common/typography";
import Tabs from "@/components/common/tabs";
import SwitchSkeletonItem from "@/components/specific/switch/switch-skeleton-item";
import { twMerge } from "tailwind-merge";
import SwitchItem from "@/components/specific/switch/switch-item";

const SwitchList = () => {
  const [loading, setLoading] = useState(false);

  async function handleTabChange(id: string) {
    await fetchData(id);
  }

  async function fetchData(id: string) {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  }

  return (
    <div component-name="SwitchList">
      <Tabs onChange={handleTabChange} />
      <div className={"mt-4"}>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 4,
          }}
        >
          <CarouselContent className="-ml-8">
            {Array.from(
              { length: loading ? 4 : 10 },
              (_, index) => index + 1
            ).map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 pl-8 xl:basis-1/4 2xl:basis-1/6"
              >
                <SwitchItem loading={loading} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={twMerge(
              `-left-2 rounded-sm bg-white transition-all duration-300 md:-left-4 ${loading && "opacity-0"}`
            )}
          />
          <CarouselNext
            className={twMerge(
              `-right-2 rounded-sm bg-white transition-all duration-300 md:-right-4 ${loading && "opacity-0"}`
            )}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default SwitchList;
