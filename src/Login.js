import React,{useState} from 'react';

export default function Login () {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [User, setUser] = useState(null)
    const handleSubmit = event =>{
        event.preventDefault()
        const userData = {
            Username,
            Password
        }
        setUser(userData)
        setUsername("")
        setPassword("")
    }
   

    return(
        <div style={{
            textAlign:"center"
        }}>
          <h2>Login</h2>
          <form
          style={{
              display:"grid",
              alignItems:"center",
              justifyItems:"center"
          }}
          onSubmit={handleSubmit}
          >
              <input 
              type="text"
              placeholder="Username"
              onChange={event =>setUsername(event.target.value)}
              value={Username}
              />
              <input
              type="password"
              placeholder="Password"
              onChange={event => setPassword(event.target.value)}
              value={Password}
              />
              <button type="submit">Submit</button>
          </form>
          {User && JSON.stringify(User, null, 2)}
        </div>
    )
}