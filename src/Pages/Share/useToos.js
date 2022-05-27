import { useEffect, useState } from 'react'

const useToos = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/tool")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])


    return [tools, setTools]
}

export default useToos