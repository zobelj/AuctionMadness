import React, { useState, useEffect } from 'react'
import AuthActions from '../store/auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useRouter } from 'next/router'

const LogoutPage = ({ loggedIn, logout, logoutSuccess, logoutFailure }) => {

    const [sent, sentSent] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (loggedIn && !sent) {
            sentSent(true);
            logout();
        }
        if (logoutSuccess) {
            router.push('/');
        }
    }, [logoutSuccess]); // only rerender when these values change

    if (logoutFailure)
        return (<h1>Error logging out!</h1>)

    return null;
}

const mapStateToProps = (state) => ({ loggedIn: !!state.auth.user, logoutSuccess: !state.auth.user, logout: !!state.auth.error })
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout: AuthActions.logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage)