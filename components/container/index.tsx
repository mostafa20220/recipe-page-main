import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  const containerClass = `"right-1/2 top-1/2 flex min-w-52 max-w-[600px] flex-col justify-center border-2 bg-[var(--white)] text-[var(--dark-charcoal)]  sm:mx-auto sm:my-32 sm:w-4/5  sm:rounded-[2rem] sm:p-8 ${className ? className : ""}`;
  return <div className={containerClass}>{children}</div>;
}
