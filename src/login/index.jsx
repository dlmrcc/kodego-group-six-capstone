import React from 'react';
import { LoginAPI } from '../Utils/API/loginManagement';

import { localhost } from '../Utils/const';

export default function Login() {
  // useEffect(() => {
  //   document.getElementById('username').value = '';
  //   document.getElementById('password').value = '';
  // }, []);

  let isUserLoggedIn = false;
    try{
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if(isUserLoggedIn && isUserLoggedIn.id){
          
            window.location.href = '/homepage'
        }
   
    }catch(error)
    {
      console.log("error :",error)
    }

    const handleLogin = ()=>{
      const username =document.getElementById('username').value
      const password = document.getElementById('password').value
      console.log('email: ', username)
      console.log('password: ', password)

      if (!username || !password ) 
      {
        alert("Enter your correct email and password.");
      }
   else
   {
    
  
     LoginAPI(username, password)
      .then((result)=>{
          return result.json()
      })
      .then((result)=>{
          // console.log('result: ', result)
          // console.log('localStorage: ', localStorage)
    
          if(result.success){
            localStorage.setItem('user', JSON.stringify(result.userData))
            window.location.href = '/homepage'
          }else{
            alert("Invalid email or password.");
          }
      })
      .catch(error=>{
          console.log('error: ', error)
      })
  }
}



    return (
      !isUserLoggedIn ?
      <><div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-black-600/40 ring ring-blue-600 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700 uppercase">
             Login
          </h1>
          <form className="mt-6">
              <div className="mb-2">
                  <label
                      type="Username"
                      className="block text-sm font-semibold text-black-800"
                  >
                      Username
                  </label>
                  <input
                  id="username"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <div className="mb-2">
                  <label
                      type="password"
                      className="block text-sm font-semibold text-gray-800"
                  >
                      Password
                  </label>
                  <input
                  id="password"
                type="password"
                      className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
              </div>
              <a
                  href="#"
                  className="text-xs text-blue-600 hover:underline"
              >
                  Forget Password?
              </a>
              <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={() => handleLogin()}>
                      Login
                  </button>
             
              </div>
          </form>

       
      </div>
  </div>
  </>
     :
     <></>
        
    );
}