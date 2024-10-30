import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup as MaterialRadioGroup } from '@mui/material';
import { useController } from 'react-hook-form';

const MyRadioGroup = ({ name, options, label, control, rules = {} }) => {
    const {
        field,
        fieldState: { error }, // Get the error state from react-hook-form
    } = useController({
        name,
        control,
        defaultValue: '', // Set a default value if needed
        rules, // Pass validation rules
    });

    return (
        <FormControl component="fieldset" error={!!error}>
            <FormLabel component="legend">{label}</FormLabel>
            <MaterialRadioGroup
                row
                {...field} // Spread field props to manage state
            >
                {options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        control={<Radio />}
                        value={option.value}
                        label={option.label}
                    />
                ))}
            </MaterialRadioGroup>
            {error && <p style={{ color: 'red' }}>{error.message}</p>} {/* Display error message */}
        </FormControl>
    );
};

export default MyRadioGroup;
