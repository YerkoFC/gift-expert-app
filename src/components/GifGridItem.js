import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    image: {
        borderRadius: 5,
        maxHeight: '170px',
        width: '100%'
    },
    containerImage: {
        border: '1px solid #000',
        borderRadius: 5,
    }
}));


const GifGridItem = ( { title, url } ) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >    
            <Grid container direction="column" alignItems="center" className={classes.containerImage}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <img
                        src={ url }
                        alt={ title }
                        className={classes.image}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Typography variant="caption" color="initial">
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        
    )
}

export default GifGridItem
