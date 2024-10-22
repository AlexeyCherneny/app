import { TextField, TextFieldProps } from '@mui/material';
import { Controller, Control, Path } from 'react-hook-form';

interface TextFieldControllerProps<FormValues extends {}> {
  name: Path<FormValues>;
  control: Control<FormValues>;
  componentProps?: TextFieldProps;
}

const TextFieldController = <FormValues extends {}>(props: TextFieldControllerProps<FormValues>) => (
  <Controller
    name={props.name}
    control={props.control}
    render={(renderProps) => <TextField {...props.componentProps} {...renderProps.field} />}
  />
);

export default TextFieldController;
