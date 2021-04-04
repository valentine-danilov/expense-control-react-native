import signUpReducers from './sign-up/reducers'
import signInReducers from './sign-in/reducers'
import emailVerificationReducers from  './email-verification/reducers'

export default {
    ...signUpReducers,
    ...signInReducers,
    ...emailVerificationReducers
}