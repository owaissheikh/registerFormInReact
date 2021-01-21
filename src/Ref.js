import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'


const Ref = () => {
    const [results, setresults] = useState([])
    const [query,setquery] =useState("react hooks")
    const searchInputRef = useRef()

    useEffect(() => {
        data()
    }, )
    
    const data = async () => {
        const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
        setresults(response.data.hits)
    }
    const handlesearch = event => {
        event.preventDefault()
        data()
    }
    const handlesearchclear = () => {
        setquery("")
        searchInputRef.current.focus()
    }
    return (
        <>
        <form onSubmit={handlesearch}>
        <input 
        type ="text"
        onChange={event => setquery(event.target.value)}
        value={query}
        ref= {searchInputRef}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handlesearchclear}>clear</button>
        {results.map(result =>(
            <li key={result.objectID}>
                <a href ={result.url}>{result.title}</a>
            </li>  
            
        ))}
        </form>
          
        </>
    )
}

export default Ref
