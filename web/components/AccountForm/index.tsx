import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { TextField, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthActions from '../../store/auth'

const AccountForm = ({ signup, signupSuccess, signupFailure }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(undefined);

    const router = useRouter();

    const submit = () => {
        signup({ name, email, password })
        setInvalidEmail(email)
    }

    useEffect(() => {
        if (signupSuccess) {
            router.push('/');
        }
        setError(signupFailure && invalidEmail === email);
    }, [email, password, invalidEmail, signupSuccess, signupFailure]); // only rerender when these values change


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
            { error ? (<Button variant="outlined" color="error">Account Already Exists!</Button>) : (<Button variant="outlined" onClick={submit}>Signup</Button>)}
        </Wrapper>
    )
}


const mapStateToProps = (state) => ({ signupSuccess: state.auth.user, signupFailure: state.auth.error })
const mapDispatchToProps = (dispatch) => bindActionCreators({ signup: AuthActions.signup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm)
