import React, { useState } from 'react'
import { Wrapper } from './styled'
import { TextField, Button } from '@mui/material'
const SignupForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submit = () => {
        fetch('/api/auth/signup', {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(res => console.log(res))
    }

    return (
        <Wrapper>
            <h1>Create account</h1>
            <TextField
                id="outlined-name"
                label="Name"
                onChange={e => setName(e.target.value)}
            />
            <TextField
                id="outlined-name"
                label="Email"
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                id="outlined-uncontrolled"
                label="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
            />
            <Button variant="outlined" onClick={submit}>Login</Button>
        </Wrapper>
    )
}


export default SignupForm;
