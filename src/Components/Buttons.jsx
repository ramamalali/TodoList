import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Buttons() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>الكل</Button>
      <Button>منجز</Button>
      <Button>غير منجز</Button>
    </ButtonGroup>
  );
}
