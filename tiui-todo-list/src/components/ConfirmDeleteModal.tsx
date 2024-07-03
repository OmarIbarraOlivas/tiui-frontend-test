import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<Props> = ({ isOpen, handleClose, handleConfirm }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Confirmar Eliminación</DialogTitle>
      <DialogContent>
        <p>¿Estás seguro de que deseas eliminar esta tarea?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
