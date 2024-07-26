import { FirestoreTimestamp } from "../../../../shared/models/timestamp-model";
import { TaskStatusEnum } from "./status-task.enum";

export class TaskDTO {
    idDoc?: string = "";
    title: string = "";
    description: string = ""
    creationDate: FirestoreTimestamp = {nanoseconds: 0, seconds: 0};
    expirationDate: FirestoreTimestamp = {nanoseconds: 0, seconds: 0};;
    status: TaskStatusEnum = 0;
    userId: string = "";
    userName: string = "";
}