import { CSSProperties } from "react"

type FONTS_TYPOGRAPHY = {
  h1: CSSProperties,
  h2: CSSProperties,
  body: CSSProperties,
  bold: CSSProperties,
  small: CSSProperties,
}

const FONTS_STYLED: FONTS_TYPOGRAPHY = {
  h1: { fontSize: "4rem", fontWeight: "700" },
  h2: { fontSize: "3rem", fontWeight: "500" },
  body: { fontSize: "1rem", fontWeight: "400" },
  bold: { fontSize: "1rem", fontWeight: "700" },
  small: { fontSize: "0.6875rem", fontWeight: "400" },
}

export { FONTS_STYLED }