"use client";

// import React from "react";

import NextLink from 'next/link'
import { Link as SmoothLink } from 'react-scroll'

import { Path } from "@/constants/paths";


type BreadcrumbProps = {
  className: string,
  currentRoute: string
}

export default function Breadcrumb({ className, currentRoute }: BreadcrumbProps) {
  const paths: Path[] = [
    { label: "Home", value: "/", to: "#" },
    { label: "Our plants", value: "/", to: "#products" },
  ]

  paths.push({
    label: currentRoute,
    value: "/",
    to: "#plant"
  })


  return (
    <div className={`${className}`} aria-label="breadcrumb">
      <ol className="flex">
        {paths.map((path, index: number) => {
          const isLast = index === paths.length - 1;
          const href = `${path.value}/${path.to}`

          return (
            <li className="text-white cursor-pointer underline after:no-underline after:ml-1 ml-1 after:text-white last:no-underline last:opacity-60 last:after:content-none" key={path.label}>
              {isLast ? (
                <a
                  className="text-white/70"
                  href={path.to}
                  key={path.label}
                >{path.label}</a>
              ) : (
                <NextLink key={path.label} className="cursor-pointer" href={href}>
                  {path.label}{" "}
                  /
                </NextLink>
              )}
            </li>
          );
        })}
      </ol>
    </div >
  );
};