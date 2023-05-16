"use client";

import React, { useMemo, useState } from "react";

import Link from "next/link";
import { Brawler } from "next/font/google";
import { Path } from "@/constants/paths";


type BreadcrumbProps = {
  className: string,
  paths: Path[],
  currentRoute: string
}

export default function Breadcrumb({ className, paths, currentRoute }: BreadcrumbProps) {
  const [breadcrumb, setbreadcrumb] = useState(paths);

  return (
    <div className={`${className}`} aria-label="breadcrumb">
      <ol className="flex">
        {breadcrumb.map((path, index) => {
          const isLast = index === paths.length - 1;

          return (
            <li className="text-white cursor-pointer underline after:no-underline after:ml-1 ml-1 after:text-white last:no-underline last:opacity-60 last:after:content-none" key={path.label}>
              {isLast ? path.label : (
                <Link className="cursor-pointer" href={`${path.value}${path.htmlElementId ?? ""}`}>
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