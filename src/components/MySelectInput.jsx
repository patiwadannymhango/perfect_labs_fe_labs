import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const MySelectInput = ({ name, control, isReadOnly }) => {

  console.log(isReadOnly)
  
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>Select Option</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue="" // Default value here
        render={({ field }) => (
          <Select
            {...field}
            labelId={`${name}-label`}
            label="Select Option"
            disabled={isReadOnly}
          >
            <MenuItem value="Y">Y</MenuItem>
            <MenuItem value="P">P</MenuItem>
            <MenuItem value="N">N</MenuItem>
            <MenuItem value="NA">NA</MenuItem>
          </Select>
        )}
      />
    </FormControl>
  );
};

export default MySelectInput;