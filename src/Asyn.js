import React,{useState,useEffect} from 'react'
import axios from "axios";

const Asyn = () => {
    const [results, setResults] = useState([])
    useEffect(() => {
        data()
       
    }, [])

    const data = async () => {
        const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
        setResults(response.data.hits)
    }
    return (
        <>
        <ul>
            <h2>First Axios API</h2>
            {results.map(result =>(
                <li key={result.objectID}>
                    <a href={result.url}>{result.title}</a>
                </li>
            ))}
            </ul>
        </>
     
    )
}

export default Asyn
