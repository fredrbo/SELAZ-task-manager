import { menuButtonDTO } from "./MenuButtonModel";

type ActionHandler = () => void;

export class TableDTO {
    row: RowContentDTO[] = [];
    action?: any;
}

export class RowContentDTO {
    type: "txt" | "menu" = "txt";
    content?: string | menuButtonDTO[] = "";
    action?: ActionHandler;
}