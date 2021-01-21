import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Search = () => {
    const [results, setResults] = useState([])
    const [query, setquery] = useState("react hooks")
    useEffect(()=>{
        data()
    },[])
    const data = async () => {
        const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
        setResults(response.data.hits)
    }
    const handleSearch = event => {
        event.preventDefault()
        data()
    }
    const handleclearsearch = () =>{
        setquery("")
    }
    
    return (
        <>
        <div style={{textAlign:"center"}}>
        <form onSubmit={handleSearch}>
        <input 
        type="text"
        onChange={event => setquery(event.target.value)}
        value={query}
        />
        <button type="submit">search</button>
        <button type="button"onClick={handleclearsearch}>clear</button>
        </form>
        </div>
        <ul>
            <h3
            style={{
                textAlign:"center"
            }}>Seach Anything</h3>
        {results.map(result=>(
            <li key={result.objectID}>
             <a href={result.url}>{result.title}</a>                
            </li>
        ))}
        </ul>
        </>
    )
}

export default Search
