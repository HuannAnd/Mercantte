"use client";

function reset() {
  location.reload()

}
export default function Error({ error }: {
  error: Error
}) {
  return (
    <div>
      <p>This error ocurred: <strong>{error.message}</strong></p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}