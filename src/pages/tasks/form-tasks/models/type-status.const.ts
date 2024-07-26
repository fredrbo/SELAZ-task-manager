import { OptionSelect } from "../../../../shared/models/option-select.model";
import { TaskStatus } from "./status-task.model";

export const TASK_STATUS: OptionSelect[] = [
    { id: TaskStatus.Pending, name: "Pendente" },
    { id: TaskStatus.InProgress, name: "Em progresso" },
    { id: TaskStatus.Completed, name: "Completo" },
]