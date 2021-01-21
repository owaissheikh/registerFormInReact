import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'


const Loading = () => {
    const [results, setresults] = useState([])
    const [query,setquery] =useState("react hooks")
    const [Loading, setLoading] = useState(false)
    const [error,seterror] = useState(null)
    const searchInputRef = useRef()

    useEffect(() => {
        data()
        
    },[query])
    
    const data = async () => {
        setLoading(true)
        try{
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
            console.log(response)
        setresults(response.data.hits)
        } catch(err) {
            seterror(err)
        }
        
        setLoading(false)
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
        </form>
       {Loading ? (
            <div style={{textAlign:"center"}}><h1>Loading........</h1></div>    
       ) : (
        <ul>
        {results.map(result =>(
            <li key={result.objectID}>
                <a href ={result.url}>{result.title}</a>
            </li>  
        ))}
        
        </ul>
        )}
        {error && <div>{error.message}</div>}
          
        </>
    )
}

export default Loading
