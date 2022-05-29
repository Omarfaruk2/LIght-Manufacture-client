import { useEffect, useState } from 'react'

const useToos = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch("https://evening-shelf-42427.herokuapp.com/tool")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])


    return [tools, setTools]
}

export default useToos