import { useEffect, useState } from "react";

import choosingDevice from "@/utils/choosingDevice";


export default function useDevice(length: "sm" | "md") {
  const [isDevice, setIsDevice] = useState<boolean>(false);
  const device = choosingDevice(length);

  useEffect(() => {
    const handleResizing = () => {
      if (window.innerWidth <= device) {
        setIsDevice(true);
        return;
      }

      setIsDevice(false);
    }

    handleResizing();

    window.addEventListener("resize", handleResizing)

    return () => {
      window.removeEventListener("resize", handleResizing)
    }
  },
    []
  )

  return isDevice;
}