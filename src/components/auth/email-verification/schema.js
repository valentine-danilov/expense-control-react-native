import * as Yup from "yup";

export default Yup.object().shape({
    code: Yup.string()
        .min(1, 'Last name is too short')
        .max(70, 'Last name is too long')
        .required('Field is required')
})