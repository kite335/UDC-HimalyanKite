import { Container, Row, Col, Button, Card } from "react-bootstrap";
import{Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const CardSection3 = () => {
    const cardItem=[]
  return (
    <>
    <div className="bg-blue-500">
      <Container className="text-center my-5">
        <Row>
          <Col md={12} className=" text-white p-4">
            <h2>Trending Travel Experiences</h2>
            <p>
              Popular trips our travelers are booking right now.
            </p>

            <Row>

              <Col md={4}>
                <Card  text="black">
                    <Card.Img variant="top" src="https://www.shikhar.com/images/tours/rajasthan-camel-safari-tour-intro.jpg" />
                  <Card.Body>
                    <p>16 Days / 15 Nights</p>
                    <Card.Title>Rajasthan Camel Safari Tour</Card.Title>
                    <Card.Text>
                      Delhi - Mandawa - Bikaner - Jaisalmer - Sand dunes - Kanoi - Masoordi - Deegasar - Amarsagar - Jaisalmer - Jodhpur - Jaipur
                    </Card.Text>
                    <Link to='/' className="bg-blue-500">Learn More</Link>
                  </Card.Body>
                </Card>
              </Col>

               </Row>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};
export default CardSection3;
