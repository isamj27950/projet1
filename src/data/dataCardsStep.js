import { BsBoxSeam, BsType, BsCheckLg } from "react-icons/bs";
import { TbPaint } from "react-icons/tb";
const boxIcon = <BsBoxSeam className="text-4xl border-blue-800 rounded-full border-[1px] p-2 text-[#1D40B0] " />;
const typeIcon = <BsType className="text-4xl border-blue-800 rounded-full border-[1px] text-[#1D40B0] " />;
const paintIcon = <TbPaint className="text-4xl border-blue-800 rounded-full border-[1px] text-[#1D40B0] " />;
const checkIcon = <BsCheckLg className=" text-4xl bg-blue-800 rounded-full text-white" />;

export const dataCards = [
  {
    icon:  boxIcon ,
    step: "Step 1:",
    title: "Download",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula.",
  },
  {
    icon: typeIcon ,
    step: "Step 2:",
    title: "Add content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla.",
  },
  {
    icon:  paintIcon ,
    step: "Step 3:",
    title: "Customize styles",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagitis, quam nec venenatis lobortis, misirus tempus nulla, sed portittior est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.",
  },
  { icon:  checkIcon , step: "Ready!" },
];