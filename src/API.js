
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API = () => {
    const [results, setresults] = useState([])
    useEffect(() => {
        axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
        .then(respose => {
            console.log(respose.data.hits)
            setresults(respose.data.hits)
        })
    })
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

export default API
