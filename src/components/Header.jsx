import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import a from '../assets/1.jpeg';
const Header = () => {
    return (
        <>
            <Container>
                <Row className={"image"}>
                    <Col xs={6} md={4}>
                        <Image src="https://i.pinimg.com/474x/f0/77/32/f0773270b459114d371975c602d0ef7c.jpg"  height={200} style={{objectFit:"cover",width:"100%"}} rounded />
                    </Col>
                    <Col xs={6} md={8}>
                        <Image src={a} style={{objectFit:"cover",width:"100%",height:"200px"}} rounded />
                    </Col>


                </Row>
            </Container>
        </>
    )
}

export default Header;