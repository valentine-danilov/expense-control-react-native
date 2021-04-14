import * as Yup from "yup";

export default Yup.object().shape({
    code: Yup.string()
        .length(6, "Verification code should be 6 digits long")
        .required('Field is required')
})