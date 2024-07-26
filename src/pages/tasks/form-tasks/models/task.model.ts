import { FirestoreTimestamp } from "../../../../shared/models/timestamp-model";
import { TaskStatus } from "./status-task.model";

export class TaskDTO {
    idDoc?: string = "";
    title: string = "";
    description: string = ""
    creationDate: FirestoreTimestamp = {nanoseconds: 0, seconds: 0};
    expirationDate: FirestoreTimestamp = {nanoseconds: 0, seconds: 0};;
    status: TaskStatus = 0;
    userId: string = "";
}