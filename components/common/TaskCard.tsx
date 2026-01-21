"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnergyBadge } from "./EnergyBadge";
import { PriorityBadge } from "./PriorityBadge";
import { Task } from "@/lib/types";

type TaskCardProps = {
  suggestionTask: Task;
};

export function TaskCard({ suggestionTask }: TaskCardProps) {
  return (
    <Card >
      <CardHeader>
        <CardTitle>{suggestionTask?.title}</CardTitle>
        <CardDescription>{suggestionTask?.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="flex items-center gap-2">
          Energy Level:
          {suggestionTask?.priority && (
            <EnergyBadge EnergyLevel={suggestionTask?.energyLevel} />
          )}
        </p>
        <p>
          Priority:{" "}
          {suggestionTask?.priority && (
            <PriorityBadge priority={suggestionTask?.priority} />
          )}
        </p>
        <p>Status: {suggestionTask?.status}</p>
        {suggestionTask?.dueDate && <p>Due Date: {suggestionTask?.dueDate?.toDateString()}</p>}
      </CardContent>
    </Card>
  );
}
