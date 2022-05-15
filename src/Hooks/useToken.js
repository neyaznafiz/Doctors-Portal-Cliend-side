const { useState, useEffect } = require("react")

const useToken = user => {
    const [token, setToken] = useState('')

    useEffect(() => {

    }, [user])
    return [token]
}

export default useToken