import STATUS from './status.util'

export const handleLoading = (state, prefix) => {
    state[prefix].status = STATUS.LOADING;
}

export const handleFulfilled = (state, prefix, action) => {
    const error = action.payload.error
    if (error) {
        state[prefix].status = STATUS.FAILED
        state[prefix].error = error

    } else {
        state[prefix].status = STATUS.SUCCEEDED
    }
}

export const handleRejected = (state, prefix, action) => {
    state[prefix].status = STATUS.FAILED
    if (action.error) {
        state[prefix].error = action.error.message
        console.log(state.error)
    }
}