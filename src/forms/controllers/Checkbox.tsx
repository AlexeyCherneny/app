import { Checkbox, CheckboxProps } from '@mui/material';
import { Controller, Control, Path } from 'react-hook-form';

interface CheckboxControllerProps<FormValues extends {}> {
  name: Path<FormValues>;
  control: Control<FormValues>;
  componentProps?: CheckboxProps;
}

const CheckboxController = <FormValues extends {}>(props: CheckboxControllerProps<FormValues>) => (
  <Controller
    name={props.name}
    control={props.control}
    render={(renderProps) => (
      <Checkbox
        {...props.componentProps}
        {...renderProps.field}
        checked={renderProps.field.value}
        onChange={(e) => renderProps.field.onChange(e.target.checked)}
      />
    )}
  />
);

export default CheckboxController;
