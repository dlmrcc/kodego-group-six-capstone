import Carousel from 'react-bootstrap/Carousel';
import './homepage.css';

function Homepage() {
  return (
    <>
    <Carousel slide={true} >
      <Carousel.Item >
        <img
            className=" img-fluid d-block w-100  img-3"

            //1600 x 900
            src='https://ca-times.brightspotcdn.com/dims4/default/e65ca05/2147483647/strip/true/crop/2048x1222+0+0/resize/1200x716!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcc%2Fc7%2F13068879a00c71ce80b0052ac395%2Fla-1557763311-x38rlcb06u-snap-image'
          alt="First slide"
          // style={{ height: "600px" }}
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  img-3"
         src='https://buildings.honeywell.com/content/dam/hbtbt/en/images/horizontal/industries-corrections-and-justice-2880x1440.jpg'
          alt="Second slide"
          // style={{  height: "600px" }}
          
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-100  img-3"
            src='https://media.istockphoto.com/id/1454098839/photo/airport-fence-barbed-wire-fence.jpg?b=1&s=170667a&w=0&k=20&c=T-sff202AI8bj32Rb6g8RbgpKM7ZHLzzw9snoXRKo6s='
            alt="Third slide" 
            // style={{  height: "600px" }}
            />


      </Carousel.Item>
    </Carousel>


</>
  );
}

export default Homepage;