import signUpReducers from './sign-up/reducers'
import signInReducers from './sign-in/reducers'
import emailVerificationReducers from  './email-verification/reducers'
import signOutReducers from './sign-out/reducer'

export default {
    ...signUpReducers,
    ...signInReducers,
    ...emailVerificationReducers,
    ...signOutReducers
}