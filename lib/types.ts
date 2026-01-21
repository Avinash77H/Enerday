export type EnergyLevel = "High" | "Medium" | "Low";

export type Priority = "High" | "Medium" | "Low";

export type TaskStatus = "Pending" | "In Progress" | "Completed";

export interface Task {
    id:string,
    title: string;
    description?: string;
    energyLevel: EnergyLevel;
    priority: Priority;
    status: TaskStatus;
    dueDate?: Date;
    hasFixedTime: boolean;
    time?: string;
}