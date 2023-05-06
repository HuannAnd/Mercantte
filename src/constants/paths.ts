export type Path = {
  label: string;
  value: string;
  htmlElementId?: '#products' | "#contact";
};

const paths: Path[] = [
  { label: "Home", value: "" },
  { label: "Our Plants", value: "/", htmlElementId: "#products" },
];

export default paths;