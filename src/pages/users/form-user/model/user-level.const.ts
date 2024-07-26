import { OptionSelect } from "../../../../shared/models/option-select.model";
import { UserLevelEnum } from "./user-level.enum";

export const USER_LEVEL: OptionSelect[] = [
    { id: UserLevelEnum.Admin, name: "Administrador" },
    { id: UserLevelEnum.User, name: "Usuário" },
]