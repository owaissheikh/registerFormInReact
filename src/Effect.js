import React,{useState,useEffect} from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)

    useEffect(() =>{
        document.title = `You have Clicked ${count} times`
    })
      
    const increment = () => {
        setCount(prevCount => prevCount+1)
    }
    return (
       <>
       <button onClick={increment}>this ${count} times clicked</button>
       </>
    )
}

export default Effect
