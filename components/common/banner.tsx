"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import NextImg from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { twMerge } from "tailwind-merge";
import useCustomState from "@/hooks/use-state";
import useCarouselApi from "@/hooks/use-carousel-api";

const Banner = () => {
  const { api, setApi, current, count } = useCarouselApi();
  const images: string[] = [
    "https://plus.unsplash.com/premium_vector-1725739560730-de0583024582?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmQlMjBtZWNoYW5pY2FsfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_vector-1719944918219-22004fe95be5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2V5Ym9hcmQlMjBtZWNoYW5pY2FsfGVufDB8MHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_vector-1682307890590-e5976a785849?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGtleWJvYXJkJTIwbWVjaGFuaWNhbHxlbnwwfDB8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_vector-1682311068121-384677f22f19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtleWJvYXJkJTIwbWVjaGFuaWNhbHxlbnwwfDB8MHx8fDA%3D",
  ];
  return (
    <div component-name="Banner" className={"px-6"}>
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <NextImg
                className={
                  "h-auto max-h-[200px] w-full overflow-hidden rounded-lg object-cover md:max-h-[400px]"
                }
                src={item}
                alt={item}
                height={500}
                width={1280}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {[...Array(count)].map((_, index) => (
            <div
              key={index + 1}
              className={twMerge(
                `h-2 w-2 rounded-full bg-sh-secondary-100 transition-all duration-300 ${current === index + 1 && "scale-150 bg-sh-primary"}`
              )}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
