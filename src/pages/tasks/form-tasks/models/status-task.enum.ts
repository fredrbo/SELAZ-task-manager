export enum TaskStatusEnum {
    Pending = 0,
    InProgress = 1,
    Completed = 2
}

export function getTaskStatusText(status: TaskStatusEnum): string {
    switch (status) {
        case TaskStatusEnum.Pending:
            return 'Pendente';
        case TaskStatusEnum.InProgress:
            return 'Em andamento';
        case TaskStatusEnum.Completed:
            return 'Concluída';
        default:
            return 'Status desconhecido';
    }
}
