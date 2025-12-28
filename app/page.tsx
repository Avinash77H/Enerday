"use client"
import { SuggestionEngine } from "@/lib/suggestion-engine";
import { Task } from "@/lib/types";

const dummyTasks: Task[] = [
 
  {
    title: "Prepare sprint demo",
    energyLevel: "High",
    priority: "High",
    status: "InProgress",
    hasFixedTime: false,
  },
  {
    title: "Write unit tests for SuggestionEngine",
    energyLevel: "Low",
    priority: "Medium",
    status: "InProgress",
    dueDate: new Date("2025-01-06"),
    hasFixedTime: false,
  },
  {
    title: "No title 😁",
    description: "Button alignment breaks on small screens",
    energyLevel: "High",
    priority: "High",
    status: "Pending",
    dueDate: new Date("2025-01-02"),
    hasFixedTime: false,
  },
  {
    title: "Daily standup meeting",
    energyLevel: "Low",
    priority: "High",
    status: "Pending",
    hasFixedTime: true,
    time: "10:00 AM",
  },
  {
    title: "Lunch break",
    energyLevel: "Low",
    priority: "Medium",
    status: "Pending",
    hasFixedTime: true,
    time: "1:30 PM",
  },
  {
    title: "Optimize database query",
    description: "Reduce API response time",
    energyLevel: "High",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date("2025-01-20"),
    hasFixedTime: false,
  },
  {
    title: "Optimize database query",
    description: "Reduce API response time",
    energyLevel: "High",
    priority: "Medium",
    status: "Pending",
    hasFixedTime: false,
  },
  {
    title: "Optimize database query",
    description: "Reduce API response time",
    energyLevel: "High",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date("2025-01-10"),
    hasFixedTime: false,
  },
  {
    title: "Update README documentation",
    energyLevel: "Medium",
    priority: "Low",
    status: "Pending",
    hasFixedTime: false,
  },
  {
    title: "Evening walk",
    description: "Relax and refresh",
    energyLevel: "Low",
    priority: "Low",
    status: "Pending",
    hasFixedTime: true,
    time: "7:00 PM",
  },
   {
    title: "Refactor task sorting logic",
    description: "Improve readability and reduce nested conditions",
    energyLevel: "Medium",
    priority: "High",
    status: "Pending",
    dueDate: new Date("2025-01-04"),
    hasFixedTime: false,
  },
   {
    title: "Fix login button UI bug",
    description: "Button alignment breaks on small screens",
    energyLevel: "High",
    priority: "High",
    status: "Pending",
    dueDate: new Date("2025-01-05"),
    hasFixedTime: false,
  },
];
console.log(dummyTasks.length);

const ExcludeFixedTimeTask = dummyTasks?.filter(task => task.hasFixedTime === false);
console.log("ExcludeFixedTimeTask:->", ExcludeFixedTimeTask);

export default function Home() {
  const answer = SuggestionEngine("High", ExcludeFixedTimeTask);

  console.log("answer:->", answer);
  return (
    <div>
      <main>hello</main>
    </div>
  );
}
