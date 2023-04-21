"use client";

import React, { useState } from "react";

import Link from "next/link";

import { PathType } from "@/@types/breadcrumbPaths";


type BreadcrumbProps = {
  className: string,
  paths: PathType[]
}

export default function Breadcrumb({ className, paths }: BreadcrumbProps) {

  return (
    <div className={`${className}`} aria-label="breadcrumb">
      <ol className="flex">
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          

          return (
            <li className="text-white underline after:no-underline after:ml-1 ml-1 after:text-white last:no-underline last:opacity-60 last:after:content-none" key={path.label}>
              {isLast ? path.label : (
                <Link href={`${path.value}${path.htmlElementId ?? ""}`}>
                  {path.label}{''}
                  /
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div >
  );
};