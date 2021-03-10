import React from 'react'
import { makeStyles, CssBaseline } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
    container: {
        margin: 0,
    },
    code: {
        fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    },
    app: {
        textAlign: 'center',
    },
    appLogo: {
        height: '40vmin',
        pointerEvents: 'none',
    },
    appHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    appLink: {
        color: '#61dafb',
    },
}))

export default function App() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <CssBaseline />
            <Box className={clsx(classes.container, classes.app)}>
                <Typography variant="h1" className={classes.appHeader}>
                    Welcome to react-materialui-sandbox
                </Typography>
            </Box>
        </React.Fragment>
    )
}
