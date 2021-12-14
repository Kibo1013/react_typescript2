import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/User";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        setTodos(resp.data);
      });
  };
  const user: User = {
    name: "sekine",
    hobbies: ["game", "movie"]
  };
  return (
    <div className="App">
      <Text color="red" fontSize="20px" />
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>Get Data</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
