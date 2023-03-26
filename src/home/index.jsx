import { FaTwitter, FaFacebook, FaGithub, FaSearch, FaRegHeart, FaUser, FaSignOutAlt, FaSignInAlt} from 'react-icons/fa';
import TopNavBar from "../top-nav-bar";
import { Outlet } from "react-router-dom";
import { useState } from 'react';


// import AddNav from "../anothernavbar";
// import Example from "../anothernavbar";

function Home() {
    const [currentLink, setCurrentLink] = useState('/')



 
    return (
        <>
              <div class="container-fluid px-0 py-0 vh-100 bg-light h-screen d-flex flex-column">
  
                    <TopNavBar/>
                <main class="fluid w-100 pt-0 mt-0 flex-grow-1">
                <Outlet/>
                
                </main>

                </div>
            </>
    );
}
export default Home;