"use client";

import { EnergyLevel, Task } from "./types";

type SuggestionEngineResult = {
  task: Task | null;
  tasks: Task[];
};

export function SuggestionEngine(
  currentEnergy: EnergyLevel,
  tasks: Task[]
): SuggestionEngineResult {
  
  const pendingTask: Task[] = tasks?.filter(
    (task) => task.status !== "Completed" && task.hasFixedTime === false
  );

  let returnTaskList = getSuggestedTasks(currentEnergy, pendingTask);

  return {
    task: returnTaskList.length > 0 ? returnTaskList[0] : null,
    tasks: returnTaskList,
  };
}

// helper functions

function getSuggestedTasks(
  energyLevel: EnergyLevel,
  pendingTask: Task[]
): Task[] {
  const filterdTaskListByEnergyLevel = pendingTask?.filter(
    (task) => task.energyLevel === energyLevel
  );

  const highPriorityTask = filterdTaskListByEnergyLevel?.filter(
    (task) => task.priority === "High"
  );
  const mediumPriorityTask = filterdTaskListByEnergyLevel?.filter(
    (task) => task.priority === "Medium"
  );
  const lowPriorityTask = filterdTaskListByEnergyLevel?.filter(
    (task) => task.priority === "Low"
  );
  return [
    ...reArrangeTaskList(highPriorityTask),
    ...reArrangeTaskList(mediumPriorityTask),
    ...reArrangeTaskList(lowPriorityTask),
  ];
}

function reArrangeTaskList(samePriorityTaskList: Task[]) {
  return [...samePriorityTaskList].sort((a, b) => {
    if (!a.dueDate && !b.dueDate) return 0;
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });
}
