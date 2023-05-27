"use client";

import React, { useEffect } from 'react';

import { Link as SmoothLink } from 'react-scroll'
import NextLink from 'next/link';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

import { NextLinkType, Path, SmoothLinkType } from '@/constants/paths';

type DropdownMenuDemoProps = {
  isHommed: boolean,
  paths: Path[],
} & React.HTMLAttributes<HTMLButtonElement>

export default function DropdownMenuDemo({ isHommed, paths, ...props }: DropdownMenuDemoProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
          {...props}
        >
          <HamburgerMenuIcon width={45} height={45} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        { }
        <DropdownMenu.Content
          className="min-w-[220px] z-10 bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          {paths.map((item, index) => {
            const nextLink = item as NextLinkType
            const smoothLink = item as SmoothLinkType

            return (
              <DropdownMenu.Item key={index} asChild className="cursor-pointer hover:bg-slate-100 group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                {isHommed ? (
                  <SmoothLink to='' > {item.label}</SmoothLink>
                ) : (
                  <NextLink key={index} href={`${item.to}`}>
                    {item.label}
                  </NextLink>
                )}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal >
    </DropdownMenu.Root >
  );
};