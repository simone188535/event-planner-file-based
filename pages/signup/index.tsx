import { useForm, useController, Control, UseFormProps, UseControllerProps, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

import { Container, Box, TextField, Button, TextFieldProps } from '@mui/material';


type FormValues = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const schema = yup
    .object({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(5).max(25).required(),
        passwordConfirm: yup.string().min(5).max(25).required(),

    })
    .required()

type FormTextInputTypes<T extends FieldValues> = {
    // name: string;
    // control: Control<FormValues>;
} & TextFieldProps & UseControllerProps<T>;

// interface IFormTextInput extends TextFieldProps {
//     name: string;
//     control: Control<any>;  
// }


function FormTextInput<T extends FieldValues>({ name, control, ...props }: FormTextInputTypes<T>) {
    const {
        field
    } = useController({
        name,
        control,
    });

    // return <TextField label={name} {...field} {...props} />
    return <TextField {...field} {...props} />

}
export default function Signup() {
    const { handleSubmit, control } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    });


    const onSubmit = (data: FormValues) => console.log(data);

    return (<Container component="main">
        Signup Page
        <Box
            component="form"
            onSubmit={
                handleSubmit(onSubmit)
            }
        >
            <FormTextInput name="username" label='Username' rules={{ required: true }}  control={control}  variant='outlined' sx={{}} disabled />
            <FormTextInput name="email" label="Email" control={control}  variant='outlined' />
            <FormTextInput name="password" label="Password" control={control}  variant='outlined' />
            <FormTextInput name="passwordConfirm" label="Confirm Password" control={control}  variant='outlined' />
            <Button variant="contained" type="submit">Submit</Button>
        </Box>
    </Container>)
}