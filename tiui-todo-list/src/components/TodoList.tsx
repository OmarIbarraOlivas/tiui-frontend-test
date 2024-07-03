import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Typography,
  Checkbox,
  Pagination,
  Box,
} from '@mui/material';
import { Todo } from '../types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setEditTodo: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo, setEditTodo }) => {
  const [page, setPage] = useState(1);
  const todosPerPage = 5; // Cantidad de tareas por página

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * todosPerPage;
  const paginatedTodos = todos.slice(startIndex, startIndex + todosPerPage);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div>
      {todos.length > 0 ? (
        <Box>
          <List>
            {paginatedTodos.map((todo) => (
              <ListItem key={todo.id} disableGutters>
                <Grid container alignItems="center">
                  <Grid item xs={2} sm={1}>
                    <Checkbox
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      color="primary"
                      sx={{ marginRight: 2 }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={7}>
                    <ListItemText>
                      <Typography
                        style={{
                          textDecoration: todo.completed ? 'line-through' : 'none',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {todo.text}
                      </Typography>
                    </ListItemText>
                  </Grid>
                  <Grid item xs={4}>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="Editar" onClick={() => setEditTodo(todo)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="Eliminar" onClick={() => deleteTodo(todo.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <Pagination
            count={Math.ceil(todos.length / todosPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
          />
        </Box>
      ) : (
        <Typography variant="h6" align="center">
          No hay tareas para mostrar.
        </Typography>
      )}
    </div>
  );
};

export default TodoList;
