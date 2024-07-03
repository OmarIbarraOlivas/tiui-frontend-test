import React, { useState } from 'react';
import { Container, Box, Fab } from '@mui/material';
import { Todo } from './types';
import { v4 as uuidv4 } from 'uuid';
import CustomNavbar from './components/Navbar';
import AddTodoModal from './components/AddTodo';
import EditTodoModal from './components/EditTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import AddIcon from '@mui/icons-material/Add';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [todoToDelete, setTodoToDelete] = useState<string>('');

  const addTodo = (text: string) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const editExistingTodo = (id: string, text: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text } : todo));
    setEditTodo(null);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setDeleteModalOpen(false); // Close the delete confirmation modal after deletion
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  const handleEditClick = (todo: Todo) => {
    setEditTodo(todo);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setTodoToDelete(id);
    setDeleteModalOpen(true);
  };

  return (
    <div>
      <CustomNavbar setFilter={setFilter} />
      <Container>
        <Box sx={{ mt: 5 }}>
          <h1>Lista de Tareas</h1>
          <Filter setFilter={setFilter} currentFilter={filter} />
          <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={handleDeleteClick} setEditTodo={handleEditClick} />
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            onClick={() => setAddModalOpen(true)}
          >
            <AddIcon />
          </Fab>
        </Box>
      </Container>
      {editTodo && (
        <EditTodoModal
          todo={editTodo}
          isOpen={isEditModalOpen}
          handleClose={() => setEditModalOpen(false)}
          handleSave={editExistingTodo}
        />
      )}
      <AddTodoModal
        isOpen={isAddModalOpen}
        handleClose={() => setAddModalOpen(false)}
        handleSave={addTodo}
      />
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
        handleConfirm={() => deleteTodo(todoToDelete)}
      />
    </div>
  );
};

export default App;
