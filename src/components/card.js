import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root:{
        maxWidth:500
    },
    media:{
        height: 500,
        maxWidth: 500,
    }
})

function Pic(props) {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media}
                    component='img'
                    image={props.pic}
                />
            </Card>
            
            
        </div>
    )
}

export default Pic
