import React from 'react';
import Link from "next/link";
import NextImg from "next/image";

type Props = {
  className?: string;
}
const Logo = ({className}: Props) => {
  return (
      <section className={`md:h-auto md:w-32 w-28 h-auto ${className}`}>
        <Link
            href={"/"}
            className="h-full flex items-center gap-2 text-xl font-medium text-slate-800"
        >
          <NextImg
              src={"/assets/images/Logo.svg"}
              alt="logo"
              width={80}
              height={80}
              priority={true}
              className="w-full h-full"
          />
        </Link>
      </section>
  );
};

export default Logo;