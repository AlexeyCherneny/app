import { Autocomplete, TextField, AutocompleteProps, TextFieldProps } from '@mui/material';
import { Controller, Control, Path } from 'react-hook-form';

interface AutocompleteControllerProps<FormValues extends {}, Value> {
  name: Path<FormValues>;
  control: Control<FormValues>;
  componentProps?: Omit<AutocompleteProps<Value, boolean | undefined, boolean | undefined, boolean | undefined>, 'renderInput'>;
  subComponentProps?: TextFieldProps;
}

const AutocompleteController = <FormValues extends {}, Value>(props: AutocompleteControllerProps<FormValues, Value>) => (
  <Controller
    name={props.name}
    control={props.control}
    render={(renderProps) => (
      <Autocomplete
        {...props.componentProps}
        {...renderProps.field}
        onChange={(_: React.SyntheticEvent<Element, Event>, newValue: Value | NonNullable<string | Value> | (string | Value)[] | null) =>
          renderProps.field.onChange(newValue)
        }
        renderInput={(params) => <TextField {...params} {...props.subComponentProps} />}
        options={props.componentProps?.options || []}
      />
    )}
  />
);

export default AutocompleteController;
