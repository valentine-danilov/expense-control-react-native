export const doAuthenticate = async (username, password) => {
    console.log(`DO AUTH :: ${username} ${password}`)
    if (username === 'admin' && password === 'admin') {
        return Promise.resolve({
            token: 'token'
        })
    }
    return Promise.resolve({
        error: "Invalid username or password"
    })
}