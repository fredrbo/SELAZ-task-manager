import { TaskStatusEnum } from "./status-task.enum";

export class FilterTaks {
    status?: TaskStatusEnum = 0;
    userId: string = ""
}