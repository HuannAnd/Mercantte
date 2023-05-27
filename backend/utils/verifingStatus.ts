export default function verifingStatus(status: number) {
  if (status >= 400 && status <= 499) {
    console.log("Error " + status);

    throw new Error("Current response of endpoint from Trefle is" + status);
  }
} 