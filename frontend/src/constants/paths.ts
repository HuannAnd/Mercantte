import { Url } from "next/dist/shared/lib/router/router";

export type Path = {
  label: string;
  value: Url | string;
  to: '#products' | "#contact" | "#" | "#plant";
};

