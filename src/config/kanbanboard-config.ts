export enum KanbanStates{
  "TODO",
  "DOING",
  "DONE",
}

export const kanbanBoardConfig = {
  columns: [
    { id: KanbanStates.TODO, title: "Sin realizar" },
    { id: KanbanStates.DOING, title: "En proceso" },
    { id: KanbanStates.DONE, title: "Realizado" },
  ],
};

export type Task ={
    text:string,
    state:KanbanStates
}