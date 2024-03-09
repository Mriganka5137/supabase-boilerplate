import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { RiSupabaseFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className=" w-full flex-col items-center flex gap-y-4 justify-center">
      <div className=" flex justify-between items-center gap-5">
        <SiNextdotjs className=" size-12" />
        +
        <RiSupabaseFill className=" size-10" />
      </div>
      <p className=" text-muted-foreground">{label} </p>
    </div>
  );
};
