export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center shadow-[0_0_0_100vmax_#222] justify-center">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-[200px] aspect-square border-t-[10px] border-b-[10px] border-[#444]"></div>
      </div>
    </div>
  )
}