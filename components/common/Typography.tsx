import React, {forwardRef} from "react";
import {twMerge} from "tailwind-merge"

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLQuoteElement | HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

const Typography = {
  H1: forwardRef<HTMLHeadingElement, TypographyProps>(({
                                                         children,
                                                         className = "",
                                                         ...props
                                                       }, ref) => (
      <h1
          ref={ref}
          className={twMerge(`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-sans text-sh-text ${className}`)}
          {...props}
      >
        {children}
      </h1>
  )),

  H2: forwardRef<HTMLHeadingElement, TypographyProps>(({
                                                         children,
                                                         className = "",
                                                         ...props
                                                       }, ref) => (
      <h2
          ref={ref}
          className={twMerge(`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-sans text-sh-text ${className}`)}
          {...props}
      >
        {children}
      </h2>
  )),
  H3: forwardRef<HTMLHeadingElement, TypographyProps>(({
                                                         children,
                                                         className = "",
                                                         ...props
                                                       }, ref) => (
      <h3
          ref={ref}
          className={twMerge(`scroll-m-20 text-2xl font-semibold tracking-tight font-sans text-sh-text ${className}`)}
          {...props}
      >
        {children}
      </h3>
  )),

  H4: forwardRef<HTMLHeadingElement, TypographyProps>(({
                                                         children,
                                                         className = "",
                                                         ...props
                                                       }, ref) => (
      <h4
          ref={ref}
          className={twMerge(`scroll-m-20 text-xl font-semibold tracking-tight font-sans text-sh-text ${className}`)}
          {...props}
      >
        {children}
      </h4>
  )),
  Paragraph: forwardRef<HTMLParagraphElement, TypographyProps>(({
                                                                  children,
                                                                  className = "",
                                                                  ...props
                                                                }, ref) => (
      <p
          ref={ref}
          className={twMerge(`leading-7 [&:not(:first-child)]:mt-6 text-base font-serif text-sh-text ${className}`)}
          {...props}
      >
        {children}
      </p>
  )),
  Blockquote: forwardRef<HTMLQuoteElement, TypographyProps>(({
                                                               children,
                                                               className = "",
                                                               ...props
                                                             }, ref) => (
      <blockquote
          ref={ref}
          className={twMerge(`mt-6 border-l-2 pl-6 italic font-serif text-sh-text ${className}`)}
          {...props}
      >
        {children}
      </blockquote>
  )),
  InlineCode: forwardRef<HTMLElement, TypographyProps>(({
                                                          children,
                                                          className = "",
                                                          ...props
                                                        }, ref) => (
      <code
          ref={ref}
          className={twMerge(`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-sh-text ${className}`)}
          {...props}
      >
        {children}
      </code>
  )),
};


Typography.H1.displayName = "Typography.H1";
Typography.H2.displayName = "Typography.H2";
Typography.H3.displayName = "Typography.H3";
Typography.H4.displayName = "Typography.H4";
Typography.Paragraph.displayName = "Typography.Paragraph";
Typography.Blockquote.displayName = "Typography.Blockquote";
Typography.InlineCode.displayName = "Typography.InlineCode";
export default Typography;
