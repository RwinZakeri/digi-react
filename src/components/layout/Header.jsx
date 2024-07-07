import BottomHead from "../modules/Layout_module/BottomHead";
import TopHead from "../modules/Layout_module/TopHead";

function Header() {
  return (
    <header className="w-full h-auto shadow-[0px_0px_7px_0px_#1a202c] z-50 sticky top-0 pb-2 z-10 bg-white md:px-2 pt-4 lg:pb-0">
      <TopHead />
      <BottomHead />
    </header>
  );
}

export default Header;
