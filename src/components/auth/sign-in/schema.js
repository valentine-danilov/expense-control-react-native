import * as Yup from "yup";

export default Yup.object().shape({
    login: Yup.string()
        .min(4, 'Login should have at least 4 symbols')
        .max(30, 'Login should have no more then 25 symbols')
        .required('Login is required'),
    password: Yup.string()
        .ensure()
        .required('Password is required')
})