import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { Todo } from '../types';

interface Props {
  todo: Todo;
  isOpen: boolean;
  handleClose: () => void;
  handleSave: (id: string, text: string) => void;
}

const EditTodoModal: React.FC<Props> = ({ todo, isOpen, handleClose, handleSave }) => {
  const [text, setText] = useState<string>(todo.text);

  const onSave = () => {
    handleSave(todo.id, text);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Editar Tarea</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Tarea"
          type="text"
          fullWidth
          variant="standard"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={onSave} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodoModal;
