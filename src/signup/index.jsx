import { useEffect, useState } from 'react';
import { CreateNewUSer } from '../Utils/API/userAccountManagement';
import { formatString, inmateName } from '../Utils/const';
import "./signup.css";



function Signup() {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPAssword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [type, setType] = useState(null);

// const handleSave=()=>
// {
//   setFirstname(document.getElementById('fisrtname'))
//   setMiddlename(document.getElementById('middlename'))
//   setLastname(document.getElementById('middlename'))
//   setUsername(document.getElementById('middlename'))

//   if (firstname === "") {
//     alert("Please enter firstname");
//     } else if (lastname === "") {
//     alert("Please enter lastname");
//     } else if (username === "") {
//     alert("Please enter username");
//     } else if (password === "") {
//     alert("Please enter password");
//     }else if (password != confirmPAssword)  {
//     alert("Password not match");
//     } else if (type === null) {
//     alert("Please enter type");
//     } else {
//    CreateNewUSer()
//    .then((result) => {
//     return result.json();
//   })
//   .then((result) => {
//     if (result.success === false) {
//       alert(result.message)
//     }
//     else {
//       alert("Succesfully added new user")
//       window.location.href='/useraccount'
      
//     }
//   })
//   .catch((error) => {
//     console.log(error);

//   });
//     }
    
    
    
    
    
    
// }
return (

    <>
    
    <section class="bg-blue-50 dark:bg-gray-900 pt-2">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">

          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create New User Account
              </h1>

              <div>
                <label for="Fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input type="Fname" name="Fname" id="Fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" required=""
               />
              </div>
              <div>
                <label for="Mname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle Name</label>
                <input type="Mname" name="Mname" id="Mname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Middle Name" required="" 
              />
              </div>
              <div>
                <label for="Lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input type="Lname" name="Lname" id="Lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" required="" 
              />
              </div>
              <div>
                <label for="Uname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="Uname" name="Uname" id="Uname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" required=""
                 />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
               />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input type="password" name="password" id="confirmpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
                />
              </div>

              <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select id="user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >

                <option value="1">Administrator</option>
                <option value="0">Staff</option>

              </select>

              <div class="py-0 center">
                <div class="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48">
                  <div class="mb-4">
                    <img class="w-auto mx-auto rounded-full object-cover object-center" src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg" alt="Avatar Upload" />
                  </div>
                  <label class="cursor-pointer mt-6">
                    <span class="mt-2  leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
                    <input type='file' class="hidden" />
                  </label>
                </div>
              </div>




              <div className="flex items-center mt-4">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" 
                >
                  Create New User
                </button>
              </div>


            </div>
          </div>
        </div>
      </section>
        
    </>
);
}


export default Signup;


// import { useState } from 'react';

// function Signup() {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   }

//   return (
//     <div>
//       <label htmlFor="password">Password</label>
//       <div className="input-group">
//         <input
//           id="password"
//           type={showPassword ? "text" : "password"}
//           className="form-control"
//         />
//         <button
//           className="btn btn-outline-secondary"
//           type="button"
//           onClick={handleTogglePassword}
//         >
//           {showPassword ? "Hide" : "Show"}
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Signup;