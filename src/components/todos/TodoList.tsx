import { Grid } from "@mui/material";
import { TodoCard } from "./TodoCard";

interface TodoListProps {
  todos: { title: string; description: string; category: string }[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Grid container spacing={2}>
      {todos.map((todo, index) => {
        return (
          <Grid
            key={index}
            item
            xs={12}
            md={6}
            sx={{ backgroundColor: "yellow" }}
          >
            <TodoCard
              todoTitle={todo.title}
              todoDescription={todo.description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
