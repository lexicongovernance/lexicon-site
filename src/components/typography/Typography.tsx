import { ReactNode } from 'react';

// Define the props type for headings with string children
type HeadingProps = {
  children: string;
};

// Define the props type for paragraph and blockquote with ReactNode children
type TextProps = {
  children: ReactNode;
};

export function Heading1({ children }: HeadingProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
  );
}

export function Heading2({ children }: HeadingProps) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>
  );
}

export function Heading3({ children }: HeadingProps) {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
}

export function Heading4({ children }: HeadingProps) {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>;
}

export function Paragraph({ children }: TextProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function Blockquote({ children }: TextProps) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>;
}
