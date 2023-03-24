import { MDBContainer, MDBRow, MDBCol, MDBCard,
    MDBCardBody, MDBCardTitle, MDBCardText,
    MDBCardImage, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export function Home() {
const handleClkScroll = () => {
    const element = document.getElementById('crlSection');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth'});
    }
};

return (
<>
<main className='my-5'>
<MDBContainer>
<MDBRow className='mb-3'>
    <MDBCol md='7' className='col-example'>
    <h1 className='mb-3'>Announcement</h1>
    </MDBCol>
</MDBRow>

<MDBCarousel showIndicators showControls fade>
    <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.bjmp.gov.ph/images/sidebar/iso.jpg'
        alt='...'>
    </MDBCarouselItem>

    <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.bjmp.gov.ph/images/sidebar/transparency.jpg'
        alt='...'>
    </MDBCarouselItem>

<MDBCarouselItem
    className='w-100 d-block'
    itemId={3}
    src='https://www.bjmp.gov.ph/images/sidebar/prime-hrm.jpg'
    alt='...'>
</MDBCarouselItem>
<MDBCarouselItem
    className='w-100 d-block'
    itemId={3}
    src='https://www.bjmp.gov.ph/images/sidebar/dpa.jpg'
    alt='...'>
</MDBCarouselItem>
<MDBCarouselItem
    className='w-100 d-block'
    itemId={3}
    src='https://www.bjmp.gov.ph/images/sidebar/foi.jpg'
    alt='...'>
</MDBCarouselItem>
</MDBCarousel>
<br />
<MDBRow className='mb-3'>
    <h1 className='mb-3'>BJMP 5-YEAR HUMAN RESOURCE STRATEGIC PLAN</h1>
</MDBRow>
<MDBRow className='mb-3'>
<div className="ratio ratio-16x9">
        <iframe
            src="/demo-vid-bjmp.mp4"
            title="Cake video"
            allowFullScreen>
        </iframe>
        </div>
</MDBRow>

<hr />
<div id='contSection'>
<MDBRow>
    <MDBCol md='7' className='col-example'>
    <h1 className='mb-3'>Contact Us</h1>
    <h2>BilangGO Jail Management and Penology</h2>
        <p>Email: cdsmessagecenter@bjmp.gov.ph
        <br />Trunkline: 89276383, 89275505, 89267756, 89276154, 53104022, 53104023, 53104024, 53104026, 53104027
        <br />Address : 144 Mindanao Avenue, Project 8, Quezon City, Philippines 1106
        <br />© 2010 BJMP All Rights Reserved
        </p>
    </MDBCol>
</MDBRow>
</div>
</MDBContainer>
</main>
</>
)
}