import { useForm, useController, Control } from "react-hook-form";
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

type IFormTextInput = {
    name: string;
    control: Control<any>;
} & TextFieldProps;


function FormTextInput({ name, control, ...props }: IFormTextInput) {
    const {
        field
    } = useController({
        name,
        control,
    });

    return <TextField id="outlined-basic" label={name} {...field} {...props} />

}
export default function Signup() {
    const { handleSubmit, control } = useForm<FormValues>({resolver: yupResolver(schema)});


    const onSubmit = (data: FormValues) => console.log(data);

    return (<Container component="main">
        Signup Page
        <Box
            component="form"
            onSubmit={
                handleSubmit(onSubmit)
            }
        >
            <FormTextInput name="Username" control={control}  variant='outlined' sx={{}}/>
            <FormTextInput name="Email" control={control}  variant='outlined' />
            <FormTextInput name="Password" control={control}  variant='outlined' />
            <FormTextInput name="Confirm Password" control={control}  variant='outlined' />
            <Button variant="contained" type="submit">Submit</Button>
        </Box>
    </Container>)
}