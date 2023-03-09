import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Login from "./UserManagement/login";

import { ArrowRight } from 'react-feather';
import { FaTwitter, FaFacebook, FaGithub, FaSearch, FaRegHeart, FaUser, FaSignOutAlt, FaSignInAlt} from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Login />
  {/* <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="https://twitter.com"><FaTwitter size={25} /></a></li>
      <li class="ms-3"><a class="text-muted" href="https://facebook.com"><FaFacebook size={25} /></a></li>
      <li class="ms-3"><a class="text-muted" href="https://github.com"><FaGithub size={25} /></a></li>
    </ul>

    <button>
   
      <ArrowRight />
      Click me
    </button>

    <h6 className="">
    Hello world!
  </h6>
  
    <div>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Price
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div> */}
    </>
  
  )
}

export default App


