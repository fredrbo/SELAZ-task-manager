import { UserLevelEnum } from "./user-level.enum";

export class UserDTO {
    idDoc?: string;
    name: string = "";
    level: UserLevelEnum = 1;
}