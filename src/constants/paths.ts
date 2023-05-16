export type Path = {
  label: string;
  value: string | null;
  htmlElementId?: '#products' | "#contact";
};

const paths: Path[] = [
  { label: "Home", value: "/" },
  { label: "Our Plants", value: "/", htmlElementId: "#products" },
];

export default paths;