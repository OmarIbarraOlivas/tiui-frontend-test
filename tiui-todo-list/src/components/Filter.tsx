import React from 'react';
import { ButtonGroup, Button, Box } from '@mui/material';

interface Props {
  setFilter: (filter: string) => void;
  currentFilter: string;
}

const Filter: React.FC<Props> = ({ setFilter, currentFilter }) => {
  return (
    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button
          color={currentFilter === 'all' ? 'primary' : 'secondary'}
          variant={currentFilter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setFilter('all')}
        >
          Todas
        </Button>
        <Button
          color={currentFilter === 'completed' ? 'primary' : 'secondary'}
          variant={currentFilter === 'completed' ? 'contained' : 'outlined'}
          onClick={() => setFilter('completed')}
        >
          Completadas
        </Button>
        <Button
          color={currentFilter === 'pending' ? 'primary' : 'secondary'}
          variant={currentFilter === 'pending' ? 'contained' : 'outlined'}
          onClick={() => setFilter('pending')}
        >
          Pendientes
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Filter;
