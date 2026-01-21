import { Priority } from "@/lib/types";
import { Badge } from "../ui/badge";

type PriorityBadgeProps = {
    priority: Priority;
}

export function PriorityBadge({priority}:PriorityBadgeProps) {
  let theme: string = "";
  let text: Priority = "High";
  if (priority === "High") {
    theme = "border-red-700 text-red-700";
    text = "High";
  } else if (priority === "Medium") {
    theme = "border-yellow-700 text-yellow-700";
    text = "Medium";
  } else{
    theme = "border-green-700 text-green-700";
    text = "Medium";
  }
  return (
    <Badge variant="outline" className={`${theme}`}>
      {text}
    </Badge>
  );
}
