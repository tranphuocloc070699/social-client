import { useState, useEffect, useCallback } from "react";
import { type CarouselApi } from "@/components/ui/carousel";

function useCarouselApi() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const handleSelect = useCallback(() => {
    if (api) {
      setCurrent(api.selectedScrollSnap() + 1);
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", handleSelect);

    return () => {
      api.on("select", handleSelect);
    };
  }, [api, handleSelect]);

  return { api, setApi, current, setCurrent, count };
}

export default useCarouselApi;
