
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { FaTwitter, FaFacebook, FaGithub, FaSearch, FaRegHeart, FaUser, FaSignOutAlt, FaSignInAlt} from 'react-icons/fa';
import './top-nav-bar.css'
import Login from '../login';

function TopNavBar({ handleSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchClick = () => {
  const link = "/reciperesult?search="+searchInput;
  console.log(link);
  window.location.href=link;
  }

  const login =()=>
  {
    window.location.href='/login'
  }

  //check if theres a user logged
  let isUserLoggedIn = false;
    try{
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
    }catch(error)
    {
      console.log("error :",error)
    }

  const logout =()=>
  {
    localStorage.clear()
    window.location.reload()
    window.location.href = 'homepage' 

  }

  const crime =()=>
  {
    window.location.href = '/crimemanagement' 
  }
  const action =()=>
  {
    window.location.href = '/actionmanagement' 
  }

  const cell =()=>
  {
    window.location.href = '/cellmanagement' 
  }
  const prison =()=>
  {
    window.location.href = '/prisonmanagement' 
  }

  const addInmate =()=>
  {
    window.location.href = '/addinmate' 
  }
  const userAccount =()=>
  {
    window.location.href = '/useraccount' 

  }

  const home=()=>
  {
    window.location.href = '/homepage' 
  }

  const inmateList=()=>
  {
    window.location.href = '/inmatelist' 
  }

  const updateUserAccount =()=>
  {
    window.location.href ='/updateuseraccount'
  }
  const createNewUser=()=>
  {
    window.location.href = '/useraccount'
  }

  //set the size of dropdown size
  const dropdownItemStyle = {
    fontSize: '15px',
  };

  return (

!isUserLoggedIn?
<>
<Navbar  collapseOnSelect bg="gray" variant="black" className="mt-1 ms-0 me-0">
<Container fluid >
<img
  src="https://th.bing.com/th?q=Criminal+Justice+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-PH&cc=PH&setlang=en&adlt=moderate&t=1&mw=247"
  style={{ width: '25px', height: '25px', borderRadius: '50%' }}
  className="d-inline-block align-top me-3"
  alt="React Bootstrap logo"
/>
  <Navbar.Brand onClick={home}>BilangGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto">

  <button
           className="px-5 py-1  bg-blue-600 text-white rounded-md mr-2 text-sm hover:bg-blue-700 mt-1" 
           onClick={login}
         >
Login
</button>
 
  {/* <Link to='/signup' className="me-2 mt-2 mb-1"><Button variant="primary" className=" btn-warning bg-gradient btn-sm allborder-radius "><FaSignInAlt className="me-0 pb-1" />Signup</Button></Link> */}
  {/* <Link to='/login' className="me-2 mt-2 mb-1"><Button variant="" className=" btn outline-warnig btn-warning bg-gradient btn-sm allborder-radius "><FaUser className="me-0 pb-1" /> Login</Button></Link> */}
  </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</>
:
<>
<Navbar collapseOnSelect expand="sm" bg="white" variant="gray" className="mt-1 ms-0 me-0">
<Container fluid>
<img
   src="https://th.bing.com/th?q=Criminal+Justice+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-PH&cc=PH&setlang=en&adlt=moderate&t=1&mw=247"
   style={{ width: '25px', height: '25px', borderRadius: '50%' }}
  className="d-inline-block align-top me-3"
  alt="React Bootstrap logo"
/>

  <Navbar.Brand onClick={home}>BilangGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
  
    
    <Nav className="ms-auto">
    <NavDropdown title="Inmates" id="basic-nav-dropdown" className="me-2 mt-2 mb-1" align="end">
   
   <NavDropdown.Item onClick={addInmate}>Add New Inmates</NavDropdown.Item >
   <NavDropdown.Item onClick={inmateList}>Inmate List</NavDropdown.Item>
 </NavDropdown>

 <NavDropdown title="Visitor" id="basic-nav-dropdown" className="me-2 mt-2 mb-1" align="end">
   
   <NavDropdown.Item >Add New Visitor</NavDropdown.Item >
   <NavDropdown.Item >Log Visitor</NavDropdown.Item>
 </NavDropdown>
    <NavDropdown title="Utilities" id="basic-nav-dropdown" className="me-2 mt-2 mb-1" align="end">
   
  <NavDropdown.Item onClick={action}>Action Management</NavDropdown.Item >
  <NavDropdown.Item onClick={cell}>Cell Management</NavDropdown.Item>
  <NavDropdown.Item onClick={crime}>Crime Management</NavDropdown.Item>
  <NavDropdown.Item onClick={prison}>Prison Management</NavDropdown.Item>
  <NavDropdown.Item>System Management</NavDropdown.Item>
</NavDropdown>

<NavDropdown title="User Management" id="basic-nav-dropdown" className="me-2 mt-2 mb-1" align="end">
   
   <NavDropdown.Item onClick={createNewUser}> Create New User</NavDropdown.Item >
   <NavDropdown.Item >User List</NavDropdown.Item>
 </NavDropdown>

      <NavDropdown drop="" id="profile-dropdown" title={<Image src="https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" roundedCircle style={{ width: '25px', height: '25px' }} />} className="circle-dropdown"  align="end">

   
     <NavDropdown.Item style={dropdownItemStyle}  onClick={updateUserAccount}>
       <FaUser className="me-2" />
            Account
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item style={dropdownItemStyle} onClick={logout}>
            <FaSignOutAlt className="me-2" />
              Log out
      </NavDropdown.Item>
        </NavDropdown>
  
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</>

  );
}

export default TopNavBar;

