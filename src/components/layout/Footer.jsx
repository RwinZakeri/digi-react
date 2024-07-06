import Info from "../modules/Layout_module/Info";
import Options from "../modules/Layout_module/Options";
import Lists from "../modules/Layout_module/Lists";
import BarLine from "../modules/Layout_module/BarLine";
import LastPart from "../modules/Layout_module/LastPart";
import Companies from "../modules/Layout_module/Companies";
function Footer() {
  return (
    <div className="w-full mx-auto border-2 h-auto mt-6 pt-8">
      <Info />
      <Options />
      <Lists />
      <BarLine />
      <LastPart />
      <Companies />
    </div>
  );
}

export default Footer;
