import { Col, Row } from "react-bootstrap";
import { BodyContainer } from "../../components/BodyContainer/BodyContainer";
import { Cards } from "../../components/Cards/Cards";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header"
import banner from "../../assets/banner.png"


export const Home = () => {
    return (
        <>
        <div>
        <img style={{
            resizeMode: "auto",
            height: 600,
            width: '100%'
          }} 
        className="banner" src={banner} alt="MARIO"  />
        </div>
            <BodyContainer>
                <Row>
                    <Cards />
                </Row>
            </BodyContainer>
        </>
    );
}