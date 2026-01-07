import { Container, Row, Col, Button, Card } from "react-bootstrap";
import{Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const CardSection3 = () => {
    const cardItem=[{img:"https://www.shikhar.com/images/tours/rajasthan-camel-safari-tour-intro.jpg",day:"16 Days / 15 Nights", tour:"Rajasthan Camel Safari Tour",city:"Delhi - Mandawa - Bikaner - Jaisalmer - Sand dunes - Kanoi - Masoordi - Deegasar - Amarsagar - Jaisalmer - Jodhpur - Jaipur"},
      {img:"https://www.shikhar.com/images/tours/hornbill-festival-nagaland-intro.jpg",day:"9 Days / 8 Nights", tour:"Hornbill Festival Tour Package - Nagaland",city:"Hornbill Festival Tour Package - Nagaland"},
      {img:"https://www.shikhar.com/images/tours/mt-kilimanjaro-expedition-5895-m-intro.jpg",day:"9 Days / 8 Nights", tour:"Mount Kilimanjaro Trekking",city:"Route No.-1: Machame Route"}]
  return (
    <>
    <div className="bg-blue-500">
      <Container className="text-center ">
        <Row>
          <Col md={12} className=" text-white p-4">
            <h2>Trending Travel Experiences</h2>
            <p>
              Popular trips our travelers are booking right now.
            </p>

            <Row className="mt-5 mb-5">

              {cardItem.map((item,index)=>
                  (
                    <Col md={4} key={index} >
                    
                <Card  text="black" style={{height:"490px"}}>
                    <Card.Img  variant="top" src={item.img}/>
                  <Card.Body>
                    <p>{item.day}</p>
                    <Card.Title>{item.tour}</Card.Title>
                    <Card.Text>
                      {item.city}
                    </Card.Text>
                    <Link to='/' className="bg-violet-600 hover:bg-sky-700"><Button>Learn More</Button></Link>
                  </Card.Body>
                </Card>
                
              </Col>
                  )
                 )}
              

               </Row>
          </Col>
        </Row>
      </Container>
      </div>

      
    </>
  );
};
export default CardSection3;
