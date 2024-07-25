type IconType = "edit" | "task" | "visibility" | "delete";

type ClassType = "delete" | "view" | "edit";

export class menuButtonDTO {
    text: string = "";
    icon: IconType = "visibility";
    class: ClassType = "view";
    action: any;
}
