import * as Yup from "yup";

export default Yup.object().shape({
    login: Yup.string()
        .min(1, 'Last name is too short')
        .max(70, 'Last name is too long')
        .required('Field is required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Field is required'),
    password: Yup.string()
        .min(8, 'Password should have at least 8 symbols')
        .max(50, 'Password should have no more then 50 symbols')
        .matches(/[A-Za-z0-9_!]{8,50}/, "Password should contain latin characters, digits, ! and _")
        .required('Field is required'),
    repeatedPassword: Yup.string()
        .required("Please, repeat password")
        .when('password', {
            is: (value: string) => !!value,
            then: Yup.string().oneOf(
                [Yup.ref('password')],
                "Passwords do not match"
            )
        })
})