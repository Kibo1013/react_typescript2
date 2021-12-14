import { TodoType } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  return <p>{`${completed ? "[完]" : "[未]"} ${title} (USER:${userId})`}</p>;
};
