export function Header() {
  return (
    <div className="bg-white shadow-lg shadow-balck500/40 flex items-center  justify-between">
      <img className="pl-[24px] py-[20px]" src="Logo.svg" alt="" />

      <ul className="navbar flex gap-[36px] ">
        <li className="text-[#92929d] font-bold cursor-pointer">Asosiy</li>
        <li className="text-[#92929d] font-bold cursor-pointer">
          Mijozlar bazasi
        </li>
        <li className="text-[#92929d] font-bold cursor-pointer">
          Tracking loyihalari
        </li>
        <li className="text-[#92929d] font-bold cursor-pointer">
          Sharh olish loyihalari
        </li>
        <li className="text-[#92929d] font-bold cursor-pointer">
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
