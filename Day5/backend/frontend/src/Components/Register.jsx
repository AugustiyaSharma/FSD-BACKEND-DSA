import React from 'react'
import axios from 'axios'

const Register = async() => {
    const handleregister=async(e)=> {
        e.preventDefault()
        const user ={
            name: e.target.name.value,
            age: e.target.age.value
        }
        await axios.post('http://localhost:9000/users/',user)
        alert('User registered successfully')

        }
  return (
    <div>
        <form onsubmit={handleresgister}>
            <label>Name: </label><input type="text" name="name" />
            <label>Age:</label> <input type="number" name="age" />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register