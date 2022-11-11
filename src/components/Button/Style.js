import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyleButton = styled(Button)`
    height: ${({height}) => height};
    padding: ${({padding}) => padding};
    width: ${({width}) => width};
    border: ${({border}) => border};
    background-color: ${({backgroundcolor}) => backgroundcolor};
    border-radius: ${({borderradius}) => borderradius};
`