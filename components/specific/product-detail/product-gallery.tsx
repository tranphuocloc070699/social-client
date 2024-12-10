"use client";

import React, { useEffect, useMemo } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { twMerge } from "tailwind-merge";
import NextImg from "next/image";
import useCarouselApi from "@/hooks/use-carousel-api";
import useIsMobile from "@/hooks/use-is-mobile";

type Props = {
  className?: string;
};

const ProductGallery = ({ className }: Props) => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1664699099313-77683fc43355?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1664699099313-77683fc43355?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1679177183572-a4056053b8a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
  ];

  const isMobile = useIsMobile();
  const { api, setApi, current, setCurrent, count } = useCarouselApi();
  const [imageSelected, setImageSelected] = React.useState(images[0]);

  const orientation = useMemo(() => {
    return isMobile ? "horizontal" : "vertical";
  }, [isMobile]);
  console.log({ orientation });

  function handleImageClick(index: number) {
    if (api) {
      api.scrollTo(index);
    }
    setCurrent(index + 1);
  }

  useEffect(() => {
    if (current >= 1) setImageSelected(images[current - 1]);
  }, [current, images]);

  return (
    <div
      component-name="ProductGallery"
      className={twMerge(`md:flex md:gap-6 ${className}`)}
    >
      <NextImg
        src={imageSelected}
        className={
          "h-auto w-full rounded-lg object-cover md:order-2 md:max-w-[80%]"
        }
        alt={"Thumbnail"}
        width={800}
        height={400}
      />
      <div className={twMerge(`mt-4 md:mt-0 md:flex-1`)}>
        <Carousel
          opts={{
            align: "start",
          }}
          orientation={orientation}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-mt-4 md:h-[568px]">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 pl-4 md:basis-1/4 md:pt-4"
              >
                <NextImg
                  src={image}
                  className={twMerge(
                    `h-full w-full cursor-pointer rounded-lg object-cover ${current === index + 1 && "border-[3px] border-sh-primary"}`
                  )}
                  width={80}
                  height={80}
                  alt={"Alt placeholder"}
                  onClick={() => handleImageClick(index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductGallery;
