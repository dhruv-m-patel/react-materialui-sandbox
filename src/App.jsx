import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
    app: {
        fontFamily: `'Roboto', Arial, Helvetica, sans-serif`,
        fontSize: '1rem',
        padding: '0.5rem',
    },
}))

export default function App() {
    const classes = useStyles()

    return (
        <Box className={clsx(classes.app)}>
            <Typography variant="h5">Welcome to react-materialui-sandbox</Typography>
        </Box>
    )
}
