export enum UserLevelEnum {
    Admin = 1,
    User = 2
}

export function getUserLevelText(status: UserLevelEnum): string {
    switch (status) {
        case UserLevelEnum.Admin:
            return 'Administrador';
        case UserLevelEnum.User:
            return 'Usuário';
        default:
            return 'Nível desconhecido';
    }
}
