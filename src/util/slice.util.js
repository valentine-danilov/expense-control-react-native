export const handleLoading = state => {
    state.status = 'loading'
}

export const handleFulfilled = (state, action) => {
    const error = action.payload.error
    if (error) {
        state.status = 'failed'
        state.error = error
    } else {
        state.status = 'succeeded'
    }
}

export const handleRejected = (state, action) => {
    state.status = 'failed'
    state.error = action.error.message
}