"use client";

import React, { useMemo, useState } from "react";

import Link from "next/link";
import { Brawler } from "next/font/google";


type BreadcrumbProps = {
  className: string,
  paths: {
    label: string,
    value: string,
    htmlElementId?: string,
  }[],
  currentRoute: string
}

export default function Breadcrumb({ className, paths, currentRoute }: BreadcrumbProps) {
  const [breadcrumb, setbreadcrumb] = useState(paths);

  useMemo(() => {
    setbreadcrumb(paths.concat({ label: currentRoute, value: "" }));
  },
    [currentRoute]
  );

  return (
    <div className={`${className}`} aria-label="breadcrumb">
      <ol className="flex">
        {breadcrumb.map((path, index) => {
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