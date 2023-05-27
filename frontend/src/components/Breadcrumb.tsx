"use client";

import React, { useEffect, useState } from "react";

import NextLink from 'next/link'
import { Link as SmoothLink } from 'react-scroll'

import { Path, NextLinkType, SmoothLinkType } from "@/constants/paths";



type BreadcrumbProps = {
  className: string,
  currentRoute: string
}

export default function Breadcrumb({ className, currentRoute }: BreadcrumbProps) {
  const paths: Path[] = [
    { label: "Home", value: "/", to: "/" },
    { label: "Our plants", value: "/", to: "products" },
  ]

  paths.push({
    label: currentRoute,
    value: "/",
    to: "plant"
  })


  return (
    <div className={`${className}`} aria-label="breadcrumb">
      <ol className="flex">
        {paths.map((path, index: number) => {
          const isLast = index === paths.length - 1;
          const nextLink = path as NextLinkType;
          const smoothLink = path as SmoothLinkType;

          return (
            <li className="text-white cursor-pointer underline after:no-underline after:ml-1 ml-1 after:text-white last:no-underline last:opacity-60 last:after:content-none" key={path.label}>
              {isLast ? (
                <SmoothLink className="text-white/70" smooth offset={smoothLink.offset} to={smoothLink.to}>{path.label}</SmoothLink>
              ) : (
                <NextLink className="cursor-pointer" href={`${nextLink.value}#${nextLink.to}`}>
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