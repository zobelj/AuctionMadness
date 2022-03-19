import React, { useState } from 'react'
import { Wrapper } from './styled'
import { TextField, Button, Card } from '@mui/material'
const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submit = () => {
        console.log(email, password)
        fetch('http://localhost:3030/auth/login', {
            method: "POST", body: JSON.stringify({ email, password }), headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => console.log(res.json()))
    }

    return (
        <Wrapper>
            
                <h1>Login</h1>
                <TextField
                    id="outlined-name"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    style={{ marginTop: '10px' }}
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Password"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    style={{ marginTop: '10px' }}
                />
                <Button
                    variant="outlined"
                    onClick={submit}
                    style={{ marginTop: '10px' }}
                >Login</Button>
            
        </Wrapper>
    )
}


export default LoginForm;
