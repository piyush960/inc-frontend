import { loader } from "../../assets";
import { cn } from "../../lib/utils";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const FormButton = ({ loading, onClick, isPrev, text, className }) => (
  <div className="flex justify-end">
    <button
      type="submit"
      className={cn("bg-[#060C1C] px-6 py-3 text-lg border-[1px] border-white-100 font-semibold relative", className)}
      disabled={loading}
      onClick={onClick}
    >
      {
      loading ? 
      <img src={loader} alt="loading..." className="w-10 h-10"/>
      : 
      text ? 
      text
      :
      isPrev ? 
      <IconArrowNarrowLeft className="sm:w-[40px] sm:h-[37px]" /> 
      : 
      <IconArrowNarrowRight className="sm:w-[40px] sm:h-[37px]"/>
      }
    </button>
  </div>
);
export default FormButton;
