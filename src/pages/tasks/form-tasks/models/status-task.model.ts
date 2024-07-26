export enum TaskStatus {
    Pending = 0,
    InProgress = 1,
    Completed = 2
}

export function getTaskStatusText(status: TaskStatus): string {
    switch (status) {
        case TaskStatus.Pending:
            return 'Pendente';
        case TaskStatus.InProgress:
            return 'Em andamento';
        case TaskStatus.Completed:
            return 'Concluída';
        default:
            return 'Status desconhecido';
    }
}
