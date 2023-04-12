"use client";

function NavBar() {
  const navOptions = [
    "Home",
    "Contact us",
    "About",
  ]

  return (
    <nav className="w-full relative h-auto py-[36px] z-10 text-white flex flex-row justify-between z-2">
      <div className="absolute flex left-0">
        <h2 className="text-[24px]">Mercantte</h2>
      </div>
      <ul className="flex w-full flex-row justify-center items-center text-[16px] font-medium gap-[70px] uppercase font-regular">
        {navOptions.map((title, index) => <li key={index} className="cursor-pointer duration-300 text-[16px] opacity-50 hover:opacity-100">{title}</li>)}
      </ul>
    </nav>

  )
}