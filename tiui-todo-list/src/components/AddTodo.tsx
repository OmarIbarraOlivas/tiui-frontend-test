import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: (text: string) => void;
}

const AddTodoModal: React.FC<Props> = ({ isOpen, handleClose, handleSave }) => {
  const [text, setText] = useState<string>('');

  const onSave = () => {
    handleSave(text);
    setText(''); // Clear the input field
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Agregar Nueva Tarea</DialogTitle>
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

export default AddTodoModal;
