import { Container } from "@mui/material";
import { TodoList } from "components/todos/TodoList";

function App() {
  return (
    <Container sx={{ marginTop: "5%" }}>
      <TodoList
        todos={[
          {
            title: "TODO 1",
            description: "This is a test Todo",
            category: "work",
          },
          {
            title: "TODO 2",
            description: "This is a test Todo 2",
            category: "study",
          },
        ]}
      />
    </Container>
  );
}

export default App;
