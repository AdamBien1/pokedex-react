import React, { Fragment } from 'react'
import pikachu from "../assets/Images/pikachu-sleeping.png"
import { Card, Container, ImageTag, LeadingText, MainHeader, SubHeader } from '../helpers/UtilClasses.style'
import useWindowDimensions from '../hooks/useWindowDimentions'

const NotFound = () => {
    const { width } = useWindowDimensions();

    return (
        <Fragment>
            <Container>
                <Card gameBorder boxShadow backgroundColor="#ccc">
                    <MainHeader gameTitle>Oops!</MainHeader>
                    <SubHeader color="#333">page not found</SubHeader>
                    <ImageTag src={pikachu} size={width > 768 ? "medium" : "small"} />
                    <LeadingText color="#666">The page you were looking for could not be found. It might have been removed, or did not exist in the first place.</LeadingText>
                </Card>
            </Container>
        </Fragment>
    )
}

export default NotFound
