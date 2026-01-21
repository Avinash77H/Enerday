import { EnergyLevel } from "@/lib/types";
import { Badge } from "../ui/badge";
import type { IconType } from "react-icons";
import { FaBatteryHalf, FaBatteryQuarter, FaBolt } from "react-icons/fa";

type EnergyBadgeProps = {
  EnergyLevel: EnergyLevel;
};

export function EnergyBadge({ EnergyLevel }: Readonly<EnergyBadgeProps>) {
  let theme: string = "";
  let text: EnergyLevel = "High";
  let Icon: IconType;
  if (EnergyLevel === "High") {
    theme = "bg-red-200 text-red-700";
    text = "High";
    Icon = FaBolt;
  } else if (EnergyLevel === "Medium") {
    theme = "bg-yellow-200 text-yellow-700";
    text = "Medium";
    Icon = FaBatteryHalf;
  } else {
    theme = "bg-green-200 text-green-700";
    text = "Low";
    Icon = FaBatteryQuarter;
  }

  return (
    <Badge variant="default" className={`${theme} flex items-center`}>
      {text} <Icon />
    </Badge>
  );
}
