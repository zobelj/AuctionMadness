import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { TextField, Button } from '@mui/material'
import AuthActions from '../../store/auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router'

const LoginForm = ({ login, loginSuccess, loginFailure }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [invalidCredentials, setInvalidCredentials] = useState({ email: undefined, password: undefined });

    const router = useRouter();

    const submit = () => {
        login({ email, password })
        setInvalidCredentials({ email, password })
    }

    useEffect(() => {
        if (loginSuccess) {
            router.push('/');
        }
        setError(loginFailure && invalidCredentials.email === email && invalidCredentials.password === password);
    }, [email, password, invalidCredentials, loginSuccess, loginFailure]); // only rerender when these values change

    return (
        <Wrapper>
            <h1>Login</h1>
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
            { error ? (<Button variant="outlined" color="error">Invalid Account</Button>) : (<Button variant="outlined" onClick={submit}>Login</Button>)}
        </Wrapper>
    )
}

const mapStateToProps = (state) => ({ loginSuccess: state.auth.user, loginFailure: state.auth.error })
const mapDispatchToProps = (dispatch) => bindActionCreators({ login: AuthActions.login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
