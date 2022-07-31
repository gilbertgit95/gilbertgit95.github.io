import { useState, useEffect, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

import PublicContext from '../contexts/publicContext'
import config from '../../config'

const InitialLoadinglayout = (props) => {
    const [hasInitialized, setHasInitialized] = useState(false)
    const PubCtx = useContext(PublicContext)

    let initalLoading = typeof PubCtx.publicContext.isLoading !== 'boolean'
    let userDataIsLoading = Boolean(PubCtx.publicContext.isLoading)

    useEffect(() => {
        if (   typeof PubCtx.publicContext.isLoading === 'boolean'
            && !Boolean(PubCtx.publicContext.isLoading)) {
            setHasInitialized(true)
        }
    }, [PubCtx.publicContext])

    // do not render the content if states not yet loaded
    if (initalLoading) return null

    return (
        <>
            {
                userDataIsLoading && !hasInitialized? (
                    <Grid container spacing={2}>
                        <Grid item xs={12}
                            style={{
                                textAlign: 'center',
                                marginTop: '10%'
                            }}>
                            <img
                                alt="logo"
                                style={{width: 150}}
                                src='/favicon.png' />
                            <Typography variant="h4">
                                { config.appName }
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box
                                style={{
                                    margin: 'auto',
                                    padding: 20,
                                    width: '50%',
                                    textAlign: 'center'
                                }}>
                                <LinearProgress />
                                <Typography
                                    color='primary'
                                    variant='subtitle1'
                                    style={{
                                        marginTop: 15
                                    }}>
                                    Loading initial data
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                ): props.children
            }
        </>
    )
}

export default InitialLoadinglayout