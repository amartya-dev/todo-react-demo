import { Card, CardContent, CardHeader } from "@mui/material";

interface TodoCardProps {
  todoTitle: string;
  todoDescription: string;
}

export const TodoCard = ({ todoTitle, todoDescription }: TodoCardProps) => {
  return (
    <Card>
      <CardHeader title={todoTitle} />
      <CardContent>{todoDescription}</CardContent>
    </Card>
  );
};
