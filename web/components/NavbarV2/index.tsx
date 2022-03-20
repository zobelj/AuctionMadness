import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { connect } from 'react-redux'
import { useRouter } from 'next/router';

const NaviagtionBar = ({ isLoggedIn, userName }) => {
    const router = useRouter();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#005eb8' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Auction Madness
                    </Typography>
                    {isLoggedIn ? (< Button color="inherit" onClick={() => router.push('/account')}>{userName}</Button>) :
                        (< Button color="inherit" onClick={() => router.push('/login')}>Login</Button>)}
                </Toolbar>
            </AppBar>
        </Box >
    );
}

const mapStateToProps = (state) => ({ isLoggedIn: !!state.auth.user, userName: state.auth.user?.name })

export default connect(mapStateToProps, null)(NaviagtionBar)