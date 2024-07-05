import { CiMobile2 } from "react-icons/ci";

function BoxTitle(props) {
  const { index, mega } = props;
  return (
    <>
      <div
        className={` max-w-full flex relative overflow-hidden items-center hover:transition-all	 gap-1 text-[12px] h-[44px] px-2 cursor-pointer transition ease-in-out delay-150 duration-1000 before:absolute before:w-full before:h-[3px] before:bg-red-500 before:transition-all before:duration-500 before:bottom-0 before:right-[500px]  before:hover:right-0  ${
          index == 0 || index == 5
            ? `${
                index == 0 ? "font-[600] hover:overflow-visible " : ""
              } after:content-[''] after:absolute after:w-[1px] after:h-[16px] after:bg-slate-300 after:left-0 `
            : ""
        } `}
      >
        <span className="text-[10px] 2xl:text-[12px] xl:text-[11px] lg:text-[10px]">
          {props.icon}
        </span>
        <span className="text-[10px] 2xl:text-[12px] xl:text-[11px] lg:text-[10px]">
          {props.text}
        </span>
        {index == 0 && (
          <>
            <div className="w-[60vw] h-[calc(100vh_-_116px)] bg-red-300 absolute top-full">
              <div className="w-1/5 h-full bg-[#F5F5F5]">
                {mega.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-[40px] leading-[40px] hover:bg-[#ffff] hover:text-[#EE384E] flex items-center group gap-2 "
                  >
                    <p className="flex items-center gap-1 w-full">
                      {" "}
                      <CiMobile2 size={18} />
                      {item.topic}
                    </p>
                    <div
                      className={`w-4/5 h-full bg-blue-300 left-0 ${
                        item.id !== 1 ? "hidden" : "flex"
                      } group-hover:flex justify-evenly group-hover:bg-red-200 top-0 absolute flex-wrap overflow-y-scroll ${
                        item.id == 1 && "flex"
                      }`}
                    >
                      {item.subMenu.map((item, index) => (
                        <>
                          {item.group.map((item, index) => (
                            <div key={index} className="w-[25%]">
                              <p className="text-[#EE384E]">{item.header}</p>
                              {item.link.map((item, index) => (
                                <div>
                                  <p className="text-black">{item.text}</p>
                                </div>
                              ))}
                            </div>
                          ))}
                        </>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default BoxTitle;
