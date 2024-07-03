import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

interface Props {
  setFilter: (filter: string) => void;
}

const CustomNavbar: React.FC<Props> = ({ setFilter }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Lista de Tareas
        </Typography>
        <Box>
          {/* Aquí podrías agregar más elementos si es necesario */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;
