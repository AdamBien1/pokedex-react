import React from 'react'
import Spinner from '../../components/Spinner/Spinner'
import { Container } from "../../helpers/UtilClasses.style"
import { Grid } from './GridLayout.style'

const GridLayout = ({ children, loading }) => {

    if(loading) {
        return (
            <Spinner/>
        )
    } else {
        return (
            <Container>
                <Grid>
                    {children}
                </Grid>
            </Container>
        )
    }

}

export default GridLayout
