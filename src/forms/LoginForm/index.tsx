import { FormControlLabel, Stack } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import RHFFields from '../controllers';

enum Genger {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

type Inputs = {
  name: String;
  surname: String;
  singleGenger: { label: String; value: Genger } | null;
  multipleGenger: { label: String; value: Genger }[];
  isActive: boolean;
};

const LoginForm = () => {
  const { handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      name: '',
      surname: '',
      singleGenger: { label: Genger.Male, value: Genger.Male },
      multipleGenger: [{ label: Genger.Male, value: Genger.Male }],
      isActive: true,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('values: ', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ maxWidth: 450 }} gap={2}>
        <RHFFields.TextField name="name" control={control} />

        <RHFFields.TextField name="surname" control={control} />

        <RHFFields.Autocomplete
          name="singleGenger"
          control={control}
          componentProps={{
            options: [
              { label: Genger.Male, value: Genger.Male },
              { label: Genger.Female, value: Genger.Female },
              { label: Genger.Other, value: Genger.Other },
            ],
          }}
        />

        <RHFFields.Autocomplete
          name="multipleGenger"
          control={control}
          componentProps={{
            options: [
              { label: Genger.Male, value: Genger.Male },
              { label: Genger.Female, value: Genger.Female },
              { label: Genger.Other, value: Genger.Other },
            ],
            multiple: true,
          }}
        />

        <FormControlLabel label="Is Active" control={<RHFFields.Checkbox name="isActive" control={control} />} />

        <input type="submit" />
      </Stack>
    </form>
  );
};

export default LoginForm;
