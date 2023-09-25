import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function BasicButtons({ submit }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={submit}>Contained</Button>
    </Stack>
  );
}

// Add prop validation for the 'submit' prop
BasicButtons.propTypes = {
  submit: PropTypes.func.isRequired, // Assuming 'submit' is a function
};