import styled from "styled-components";
import { Card } from 'react-bootstrap';

export const StyleCard = styled(Card)`
    height: ${({height}) => height};
    width: ${({width}) => width};
    border: ${({border}) => border};
    margin-top: ${({margintop}) => margintop};
    margin-bottom: ${({marginbotoom}) => marginbotoom};
    text-align: ${({textalign}) => textalign};
    background-color: ${({backgroundcolor}) => backgroundcolor};
`

export const CardImg = styled(Card.Img)`
    height: ${({height}) => height};
    width: ${({width}) => width};
    padding: ${({padding}) => padding};
`