"use client";

import { Heading } from "@/components/common/heading";
import { TaskCard } from "@/components/common/TaskCard";
import { Button } from "@/components/ui/button";

import { SuggestionEngine } from "@/lib/suggestion-engine";
import { EnergyLevel, Task } from "@/lib/types";
import { useState } from "react";

const dummyTasks: Task[] = [
  {
    id:"1",
    title: "Prepare sprint demo",
    energyLevel: "High",
    priority: "High",
    status: "In Progress",
    hasFixedTime: false,
  },
  {
    id:"2",
    title: "Write unit tests for SuggestionEngine",
    energyLevel: "Low",
    priority: "Medium",
    status: "In Progress",
    dueDate: new Date("2025-01-06"),
    hasFixedTime: false,
  },
  {
    id:"3",
    title: "No title 😁",
    description: "Button alignment breaks on small screens",
    energyLevel: "High",
    priority: "High",
    status: "Pending",
    dueDate: new Date("2025-01-02"),
    hasFixedTime: false,
  },
  {
    id:"4",
    title: "Daily standup meeting",
    energyLevel: "Low",
    priority: "High",
    status: "Pending",
    hasFixedTime: true,
    time: "10:00 AM",
  },
  {
    id:"5",
    title: "Lunch break",
    energyLevel: "Low",
    priority: "Medium",
    status: "Pending",
    hasFixedTime: true,
    time: "1:30 PM",
  },
  {
    id:"6",
    title: "Optimize database query",
    description: "Reduce API response time",
    energyLevel: "High",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date("2025-01-20"),
    hasFixedTime: false,
  },
  {
    id:"7",
    title: "Optimize database query",
    description: "Reduce API response time",
    energyLevel: "High",
    priority: "Medium",
    status: "Pending",
    hasFixedTime: false,
  },
  {
    id:"8",
    title: "Optimize database query",
    description: "Reduce API response time",
    energyLevel: "High",
    priority: "Medium",
    status: "Pending",
    dueDate: new Date("2025-01-10"),
    hasFixedTime: false,
  },
  {
    id:"9",
    title: "Update README documentation",
    energyLevel: "Medium",
    priority: "Low",
    status: "Pending",
    hasFixedTime: false,
  },
  {
    id:"10",
    title: "Evening walk",
    description: "Relax and refresh",
    energyLevel: "Low",
    priority: "Low",
    status: "Pending",
    hasFixedTime: true,
    time: "7:00 PM",
  },
  {
    id:"11",
    title: "Refactor task sorting logic",
    description: "Improve readability and reduce nested conditions",
    energyLevel: "Medium",
    priority: "High",
    status: "Pending",
    dueDate: new Date("2025-01-04"),
    hasFixedTime: false,
  },
  {
    id:"12",
    title: "Fix login button UI bug",
    description: "Button alignment breaks on small screens",
    energyLevel: "High",
    priority: "High",
    status: "Pending",
    dueDate: new Date("2025-01-05"),
    hasFixedTime: false,
  },
];

const ExcludeFixedTimeTask = dummyTasks?.filter(
  (task) => task.hasFixedTime === false
);

export default function QuickSuggestionPage() {
  const [energy, setEnergy] = useState<EnergyLevel | null>();
  const [suggestionTask, setSuggestionTask] = useState<Task | null>();
  const [suggestionTaskList, setSuggestionTaskList] = useState<Task[] | null>();

  console.log("suugestionTask", suggestionTask);

  function handleSuggestion() {
    const result = energy
      ? SuggestionEngine(energy, ExcludeFixedTimeTask)
      : { task: null, tasks: [] };

    setSuggestionTask(result.task);
    setSuggestionTaskList(result.tasks);
  }
  return (
    <div className="p-4 space-y-4">
      <div>
        {/* heading */}
        <Heading level={1}>What should I work on right now?</Heading>

        {/* button container */}
        <div className="mt-4">
          <Heading level={3}>Select your energy level</Heading>

          <div className="flex gap-4">
            <Button
              variant={energy === "High" ? "default" : "outline"}
              onClick={() => setEnergy("High")}
            >
              High ⚡
            </Button>
            <Button
              variant={energy === "Medium" ? "default" : "outline"}
              onClick={() => setEnergy("Medium")}
            >
              Medium 🙂
            </Button>
            <Button
              variant={energy === "Low" ? "default" : "outline"}
              onClick={() => setEnergy("Low")}
            >
              Low 😴
            </Button>
          </div>

          <Button
            variant={"default"}
            className="mt-4"
            onClick={handleSuggestion}
          >
            Get Suggestion
          </Button>
        </div>
      </div>

      {/* Suggested Task */}

     <Heading level={3}> Suggested Task </Heading>
     <div className="w-1/2">
       {
        suggestionTask && <TaskCard suggestionTask={suggestionTask}/>
      }
     </div>

      {/* Remainig suggestion task list */}
      
      <div>
        <Heading level={3}>Remaining Suggested Task List</Heading>

       <div className="grid grid-cols-3 gap-4 mt-2">
         {suggestionTaskList && suggestionTaskList?.map((task)=>(
          <TaskCard suggestionTask={task} key={task.id}/>
        ))}
       </div>
      </div>
    </div>
  );
}
