import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Button1({name}) {
  return (
     <Stack spacing={2} direction="row">
      
      <Button variant="outlined">{name}</Button>
    </Stack>
  )
}
