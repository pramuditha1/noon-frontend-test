import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingSpinner(props) {
  return (
    <Box sx={{ ...props.styles }}>
      <CircularProgress />
    </Box>
  );
}