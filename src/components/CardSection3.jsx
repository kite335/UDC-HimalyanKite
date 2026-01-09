import { Container, Row, Col, Button, Card } from "react-bootstrap";
import{Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const CardSection3 = () => {
    const cardItem=[{img:"https://www.shikhar.com/images/tours/rajasthan-camel-safari-tour-intro.jpg",day:"16 Days / 15 Nights", tour:"Rajasthan Camel Safari Tour",city:"Delhi - Mandawa - Bikaner - Jaisalmer - Sand dunes - Kanoi - Masoordi - Deegasar - Amarsagar - Jaisalmer - Jodhpur - Jaipur"},
      {img:"https://www.shikhar.com/images/tours/hornbill-festival-nagaland-intro.jpg",day:"9 Days / 8 Nights", tour:"Hornbill Festival Tour Package - Nagaland",city:"Hornbill Festival Tour Package - Nagaland"},
      {img:"https://www.shikhar.com/images/tours/mt-kilimanjaro-expedition-5895-m-intro.jpg",day:"9 Days / 8 Nights", tour:"Mount Kilimanjaro Trekking",city:"Route No.-1: Machame Route"}];

      const cardItem_2=[
        {img:"https://www.shikhar.com/images/tours/mount-kun-expedition-7077m-newhome.jpg",day:"24 Days / 23 Nights",tour:"Mount Kun Expedition (7077 M | 23218 Ft)",city:"Delhi - Leh - Kargil - Parkachik - Shafat Nala - Base Camp - Summit - Base Camp - Kargil - Leh - Delhi"},

        {img:"https://www.shikhar.com/images/tours/markha-valley-winter-trek-newhome.jpg",day:"8 Days / 7 Nights",tour:"Markha Valley Trek - Cost And Itinerary Of Markha Valley",city:"Leh - Chilling - Skiu - Sara – Markha Village - Skiu – Chilling – Leh"},

        {img:"https://www.shikhar.com/images/tours/mount-nun-expedition-7135-m-newhome.jpg",day:"24 Days / 23 Nights",tour:"Mount Nun Climbing Expedition (7135 M | 23409 Ft)",city:"Delhi - Leh - Kargil - Tangol - Base Camp - Summit Mt Nun - Base Camp - Tangol - Kargil - Leh - Delhi"}

      ];

      const cardItem_3=[
        {img:"https://images.pexels.com/photos/1441207/pexels-photo-1441207.jpeg",day:"24 Days / 23 Nights",tour:"Mount Kun Expedition (7077 M | 23218 Ft)",city:"Delhi - Leh - Kargil - Parkachik - Shafat Nala - Base Camp - Summit - Base Camp - Kargil - Leh - Delhi"},
        {img:"https://images.pexels.com/photos/7846473/pexels-photo-7846473.jpeg",day:"",tour:"",city:""},{img:"https://images.pexels.com/photos/34804199/pexels-photo-34804199.jpeg",day:"",tour:"",city:""}
      ]

      const cardItem_4=[
        {head:"Riskiesh",img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/30/3a/3c/mesmerizing.jpg?w=600&h=600&s=1",p:"Whether taking a boat ride in the lake or just walking along it on the Mall Road, the views are breathtaking.",btn:""},

         {head:"Naintal",img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/84/bb/triveni-ghaat-entrance.jpg?w=1000&h=-1&s=1",p:"Do visit in the evening when you visit rishikesh, it is a good place to sit in peace and watch the river.",btn:""},
         
          {head:"Kedarnath",img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/51/35/6c/on-the-way-to-kedarnath.jpg?w=1000&h=800&s=1",
          p:"The trek to Kedarnath is both challenging and breathtaking."
            ,btn:""}  
      ]
  return (

    <>
    <section>
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
                    <Link to='/' className="bg-violet-600 hover:bg-sky-700"><Button>Book now</Button></Link>
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
      </section>

               {/* section-2 */}

      <section>
       <div className="bg-blue-500 ">
        <div className=" text-center bg-[url('https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg')] bg-cover bg-center ">
        <h1 className="pt-5">High-Altitude Adventures & Cultural Trails</h1>
          <p className="pt-3 text-xl">Explore legendary peaks, remote trails, and once-in-a-lifetime expeditions led by expert guides</p>
         <div className="container mt-5">
          <div className="row">
            {cardItem_2.map((item)=>(
               <div className="col-md-4">
             <Card  text="black" style={{height:"490px"}}>
                    <Card.Img  variant="top" src={item.img}/>
                  <Card.Body>
                    <p>{item.day}</p>
                    <Card.Title>{item.tour}</Card.Title>
                    <Card.Text>
                      {item.city}
                    </Card.Text>
                    <Link to='/' className="bg-violet-600 hover:bg-sky-700"><Button>Book now</Button></Link>
                  </Card.Body>
                </Card>
          </div>
            ))}
          </div>
         
         </div>
              <Link to="/" > <Button className="mt-5 mb-5">Explore Uttarkhand</Button></Link>
          
        </div>
        
       
       </div>
      </section>
                     {/* Section-3 */}
       <section>
       <div className="bg-blue-500 ">
        <div className=" text-center bg-[url('https://images.unsplash.com/photo-1720936313396-0c20c09aa8d2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
        <h1 className="pt-5 font-bold">Top Experiential Tours in Uttarkhand</h1>
          <p className="pt-3 text-xl font-bold">Uncover the Heart of Uttarkhand Through Curated, Authentic Experiences</p>
         <div className="container mt-5">
          <div className="row">
            {cardItem_3.map((item)=>(
               <div className="col-md-4">
             <Card  text="black" style={{height:"490px"}}>
                    <Card.Img  variant="top" src={item.img} style={{height:"250px",objectFit:"cover",objectPosition:"center"}}/>
                  <Card.Body>
                    <p>{item.day}</p>
                    <Card.Title>{item.tour}</Card.Title>
                    <Card.Text>
                      {item.city}
                    </Card.Text>
                    <Link to='/' className="bg-violet-600 hover:bg-sky-700"><Button>Book now</Button></Link>
                  </Card.Body>
                </Card>
          </div>
            ))}
          </div>
         
         </div>
              <Link to="/" > <Button className="mt-5 mb-5">Explore Packages</Button></Link>
          
        </div>
        
       
       </div>
      </section>
                      {/* section-4 */}

                      <section>
                        <div>
                          <div className=" text-center bg-[url('https://images.pexels.com/photos/19558507/pexels-photo-19558507.jpeg')] bg-cover bg-center ">
        <h1 className="pt-5 font-bold">Discover India’s Best-Kept Secrets</h1>
          <p className="pt-3 text-xl font-bold">Carefully crafted India tours blending cultural depth, natural beauty, and unforgettable experiences</p>
         <div className="container mt-5">
          <div className="row">
            {cardItem_4.map((item)=>(
               <div className="col-md-4">
             <Card className="px-4 box-boder " text="black" style={{height:"490px"}}>
              <h1>{item.head}</h1>
                    <Card.Img  variant="top" src={item.img} style={{height:"250px",objectFit:"cover",objectPosition:"center"}}/>
                  <Card.Body className="box-boder">
                    <p className="text-justify">{item.p}</p>
                    <Card.Title>{item.tour}</Card.Title>
                    <Card.Text>
                      {item.city}
                    </Card.Text>
                    <Link to='/' className=" hover:bg-sky-700"><Button className=" box-border w-[250px]">View All Packages</Button></Link>
                  </Card.Body>
                </Card>
          </div>
            ))}
          </div>
         
         </div>
              <Link to="/" > <Button className="mt-5 mb-5">View All Destinations</Button></Link>
          
        </div>
                        </div>
                      </section>
      
    </>
  );
};
export default CardSection3;
