import { CSSProperties } from "react"

type FONTS_TYPOGRAPHY = {
  h1: CSSProperties,
  h2: CSSProperties,
  body: CSSProperties,
  bold: CSSProperties,
  small: CSSProperties,
}

const FONTS_STYLED: FONTS_TYPOGRAPHY = {
  h1: { fontSize: "64px", fontWeight: "700" },
  h2: { fontSize: "48px", fontWeight: "500" },
  body: { fontSize: "16px", fontWeight: "400" },
  bold: { fontSize: "16px", fontWeight: "700" },
  small: { fontSize: "11px", fontWeight: "400" },
}

export { FONTS_STYLED }