import React,{useState} from 'react'
const initialFormSTate = 
    {
        username:"",
        email:"",
        password:""
    }


const Register = () => {
    const [form,setForm] = useState(initialFormSTate)
    const [user,setUser] = useState(null)
    const handlechange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        setUser(form)
        setForm(initialFormSTate)

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
              name="username"
              onChange={handlechange}
              value={form.username}
              />
              <input
              type="text"
              placeholder="email"
              name="email"
              onChange={handlechange}
              value={form.email}
              />
              <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handlechange}
              value={form.password }
              />
              <button type="submit">Submit</button>
          </form>
          {user && JSON.stringify(user, null, 2)}
        </div>
    )
}
export default Register;
