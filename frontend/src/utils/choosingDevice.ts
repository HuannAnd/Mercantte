export default function choosingDevice(size: "md" | "sm") {
  let result;
  switch (size) {
    case "sm":
      return result = 640;
    case "md":
      return result = 768;
    default:
      return result = 1024;
  }
}