import { Url } from "next/dist/shared/lib/router/router";

export type NextLinkType = {
  label: string;
  value: Url | string;
  to: 'products' | "contact" | "/" | "plant";
};

export type SmoothLinkType = {
  label: string;
  to: string;
  offset: number;
}

export type Path = SmoothLinkType | NextLinkType;