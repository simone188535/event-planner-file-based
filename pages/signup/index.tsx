import {
  useForm,
  useController,
  Control,
  UseFormProps,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  Box,
  TextField,
  Button,
  TextFieldProps,
  Typography,
} from "@mui/material";

import  {signupFormContainer } from "@/pages/signup/styles";
import { formPageContainer, formPrimaryHead, formTextInput, formSubmit } from '@/styles/form/styles';

type FormValues = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).max(25).required(),
    passwordConfirm: yup.string().min(5).max(25).required(),
  })
  .required();

type FormTextInputTypes<T extends FieldValues> = {
  // name: string;
  // control: Control<FormValues>;
} & TextFieldProps &
  UseControllerProps<T>;

// interface IFormTextInput extends TextFieldProps {
//     name: string;
//     control: Control<any>;
// }

function FormTextInput<T extends FieldValues>({
  name,
  control,
  ...props
}: FormTextInputTypes<T>) {
  const { field } = useController({
    name,
    control,
  });

  // return <TextField label={name} {...field} {...props} />
  return <TextField {...field} {...props} />;
}
export default function Signup() {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <Container component="main" sx={formPageContainer}>
      <Typography component="h1" sx={formPrimaryHead}>Signup Page</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={signupFormContainer}
      >
        <FormTextInput
          name="username"
          label="Username"
          control={control}
          variant="outlined"
          sx={formTextInput}
        />
        <FormTextInput
          name="email"
          label="Email"
          control={control}
          variant="outlined"
          sx={formTextInput}
        />
        <FormTextInput
          name="password"
          label="Password"
          control={control}
          variant="outlined"
          sx={formTextInput}
        />
        <FormTextInput
          name="passwordConfirm"
          label="Confirm Password"
          control={control}
          variant="outlined"
          sx={formTextInput}
        />
        <Button variant="contained" type="submit" sx={formSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}
