import { Header } from "./components/Header";
import { useRef } from "react";
function App() {
  const loyhaRef = useRef();
  const timeRef = useRef();
  const tagRef = useRef();
  const sendRef = useRef();
  const shablonRef = useRef();
  const linkRef = useRef();

  function handleButton() {
    const loyha = {
      Loyha: loyhaRef.current.value,
      Time: timeRef.current.value,
      Tag: tagRef.current.value,
      Send: sendRef.current.value,
      appearance: {
        template: shablonRef.current.value,
        url: linkRef.current.value,
      },
    };
    console.log(loyha);
  }

  return (
    <>
      <Header></Header>

      <div className="hero  w-[1392px] h-[1000px]  mx-auto mt-[40px] rounded-tl-2xl  rounded-tr-2xl border border-[#E2E2EA]">
        <div className="pl-[16px]">
          <div className="hero_button w-[1380px]  flex justify-between items-center px-[20px] py-[20px]">
            <span className="font-semibold text-xl">Subloyiha ochish</span>
            <button
              onClick={handleButton}
              className="bg-[#0062FF] rounded-lg p-[10px] text-white font-semibold text-[16px]  hover:bg-[#0062ff9f] transition duration-150"
            >
              Davom etish
            </button>
          </div>
          <hr className="w-[1350px] " />

          <div className="inputs mt-[16px] w-[1392px] mx-auto gap-3 flex">
            <div className="left">
              <div className="">
                <p className="text-[#504F54] mb-[8px]">Loyiha nomi</p>
                <input
                  ref={loyhaRef}
                  type="text"
                  className="w-[672px] bg-[#FBFAFC] rounded border border-[#E2E2EA] px-[12px] py-[14px]"
                  placeholder="Loyiha nomi"
                />
              </div>

              <div className="mt-[16px]">
                <div className="w-[320px] flex items-center gap-3 mb-[8px]">
                  <input type="checkbox" name="" id="" />
                  <p className="text-[#504F54] mt-[-3px]">Boshlanish vaqti</p>
                </div>
                <input
                  ref={timeRef}
                  type="datetime-local"
                  className="w-[672px] bg-[#FBFAFC] rounded border border-[#E2E2EA] px-[12px] py-[14px]"
                  placeholder="Loyiha nomi"
                />
              </div>
            </div>
            <div className="right mt-[-17px]">
              <div className="mt-[16px]">
                <p className="text-[#504F54] mb-[8px]">Tag</p>
                <input
                  ref={tagRef}
                  type=""
                  className="w-[672px] bg-[#FBFAFC] rounded border border-[#E2E2EA] px-[12px] py-[14px]"
                  placeholder="Tag"
                />
              </div>
              <div className="mt-[16px]">
                <div className="w-[320px] flex items-center gap-3 mb-[8px]">
                  <input type="checkbox" name="" id="" />
                  <p className="text-[#504F54] mt-[-3px]">
                    Qancha vaqtda habar yuboriladi?
                  </p>
                </div>
                <input
                  ref={sendRef}
                  type="datetime-local"
                  className="w-[672px] bg-[#FBFAFC] rounded border border-[#E2E2EA] px-[12px] py-[14px]"
                  placeholder="Qancha vaqtda habar yuboriladi?"
                />
              </div>
            </div>
          </div>

          <div className="footer mt-[50px]  flex ">
            <div className="bg-[x#F8F8F8]">
              <h1 className="font-semibold text-[24px]">
                Habarning ko’rinishi
              </h1>
              <div className="">
                <div className="">
                  <p className="text-[#504F54] mb-[8px]">Shablon</p>
                  <input
                    ref={shablonRef}
                    type="text"
                    className="w-[672px] bg-[#FBFAFC] rounded border border-[#E2E2EA] px-[12px] py-[14px]"
                    placeholder="Shablon"
                  />
                </div>
              </div>
              <div className="mt-[15px]">
                <div className="">
                  <p className="text-[#504F54] mb-[8px]">Link</p>
                  <input
                    ref={linkRef}
                    type="url"
                    className="w-[672px] bg-[#FBFAFC] rounded border border-[#E2E2EA] px-[12px] py-[14px]"
                    placeholder="Link"
                  />
                </div>
              </div>
            </div>
            <img src="image 13.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
