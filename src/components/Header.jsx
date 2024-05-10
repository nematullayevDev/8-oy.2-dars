export function Header() {
  return (
    <div className="bg-white shadow-lg shadow-balck500/40 flex items-center  justify-between">
      <img className="pl-[24px] py-[20px]" src="Logo.svg" alt="" />

      <ul className="navbar flex gap-[36px]  items-center">
        <li className="text-[#92929d] font-bold cursor-pointer hover:text-[#0062ff] transition duration-150">
          Asosiy
        </li>
        <li className="text-[#92929d] font-bold cursor-pointer hover:text-[#0062ff] transition duration-150">
          Mijozlar bazasi
        </li>
        <li className="h-[70px]  flex flex-col items-center  pt-[20px]">
          <li className=" font-bold cursor-pointer text-[#0062ff]">
            Tracking loyihalari
          </li>
          <div className="w-[105px] h-[3px] bg-[#0062ff] mt-6"></div>
        </li>
        <li className="text-[#92929d] font-bold cursor-pointer hover:text-[#0062ff] transition duration-150">
          Sharh olish loyihalari
        </li>
        <li className="text-[#92929d] font-bold cursor-pointer hover:text-[#0062ff] transition duration-150">
          Redirect loyihalari
        </li>
      </ul>
      <div className="fex cursor-pointer ">
        <img
          className="pr-[24px]"
          src="User.png"
          alt=""
          width={200}
          height={32}
        />
      </div>
    </div>
  );
}
