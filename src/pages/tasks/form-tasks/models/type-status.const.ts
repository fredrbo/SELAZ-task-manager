import { OptionSelect } from "../../../../shared/models/option-select.model";
import { TaskStatusEnum } from "./status-task.enum";

export const TASK_STATUS: OptionSelect[] = [
    { id: TaskStatusEnum.Pending, name: "Pendente" },
    { id: TaskStatusEnum.InProgress, name: "Em andamento" },
    { id: TaskStatusEnum.Completed, name: "Completo" },
]