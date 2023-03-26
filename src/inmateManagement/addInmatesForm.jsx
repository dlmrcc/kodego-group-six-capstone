import { useEffect, useState } from 'react';
import { Italic } from 'react-feather';
import Select from 'react-select';

import { AddCellAPI, DeleteCellAPI, GetCellList2API, UpdateCellAPI } from '../Utils/API/cellMangement';
import { AddInmatesAPI, InmateCodeAPI } from '../Utils/API/inmateManagement';
import { GetPrisonListAPI } from '../Utils/API/prisonManagement';
import { formatString } from '../Utils/const';



export default function AddInmate() {

  const[inmateCode, setInmateCode]=useState(null);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [extensionName, setExtensionName] = useState("");
  const [complexion, setComplexion] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [street, setStreet] = useState("");
  const [cell, setCell] = useState(null);
  const [visitorPrivilage, setVisitorPrivilage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [relationship, setRelationship] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [cellList, setCellList] = useState([]);
  const [name, setName] = useState("");
  const [yearSentence, setYearSentence] = useState("");


 
  const fetchCellAPI = () =>
  {
    GetCellList2API(1)
   .then((result)=>
   {
    return result.json()
   })
   .then((result) => {
    console.log(JSON.stringify(result.cellList))
    setCellList(result.cellList)
  })
   .catch(error => {
    console.log('error: ', error)
  })}

 const getInmateCode  = () =>
 {
  InmateCodeAPI()
.then((result) => {
  return result.json()
})
.then((result) => {
  setInmateCode(result.code)
})
.catch(error => {
  console.log('error: ', error)
})
 }
  useEffect(()=>
  {
    getInmateCode();
    fetchCellAPI ();

  },[])
  const cellName = cellList.map(cell => ({
    label: cell.name,
    value: cell.id
  }));

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleSelectChange = (selectedOption) => {
    setCell(selectedOption);
  };

  const formFields = [
    {name: 'lastName', message: 'Please enter last name.'},
    {name: 'firstName', message: 'Please enter first name.'},
    {name: 'birthday', message: 'Please enter birthday.'},
    {name: 'gender', message: 'Please enter gender.'},
    {name: 'civilStatus', message: 'Please enter civil status.'},
    {name: 'address', message: 'Please enter address.'},
    {name: 'complexion', message: 'Please enter complexion.'},
    {name: 'eyeColor', message: 'Please enter eye color.'},
    {name: 'dateStart', message: 'Please enter date start.'},
    {name: 'dateEnd', message: 'Please enter date end.'},
    {name: 'visitorPrivilage', message: 'Please enter visiting privilage.'},
    {name: 'cell', message: 'Please enter cell assignment.'},
    {name: 'name', message: 'Please enter emergency name'},
    {name: 'contactNumber', message: 'Please enter contact number.'},
    {name: 'relationship', message: 'Please enter relationship.'},
  
   
  ];


 
  const handleSave = () => {
    let errorMessages = formFields
      .filter((field) => !eval(field.name))
      .map((field) => field.message);
  
    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
    } else {
      
      const confirmSave = window.confirm("Do you want to save this info?");
      if (confirmSave) {
        AddInmatesAPI(
          inmateCode,
          formatString(firstName),
          formatString(lastName),
            formatString(middleName),
           gender,
          birthday,
          formatString(address),
          civilStatus,
          eyeColor,
          complexion,
          cell.value,
          yearSentence,
          dateStart,
          dateEnd,
          formatString(name),
          formatString(contactNumber),
          formatString(relationship),
          imageFile,
          formatString(extensionName),
          visitorPrivilage.value,
        )
          .then((result) => {
            console.log(result);
            return result.json();
          })
          .then((result) => {
            alert(result.message)
            console.log(JSON.stringify(result.inmateList));
            window.location.reload();
            // how iwant to reload this page or route to dashboard
          })
          .catch((error) => {
            console.log("error: ", error);
          });
          window.location.href='/addinmate'
      }
    }
  };
  const handleCancel = () => {
    window.location.href ='/inmatelist'

  }

  
  return (
    <div className="flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-md p-4 mt-6 mb-5 ml-40 mr-40 w-full w-100">
    <div className="w-full">
        
    <div className="flex justify-center items-center mb-3">
             <h1  className="text-lg font-bold " style={{ fontSize: "20px" }}>New Inmate Information</h1>
             <div className="hover:text-gray-600 text-sm  ml-auto " onClick={() => handleCancel()} >
            <svg
              className=" w-6 h-6 fill-current text-red-500 hover:text-gray-600 transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 10.586l4.95-4.95a1 1 0 1 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 1 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 1 1-1.414-1.414L10.586 12 5.636 7.05A1 1 0 0 1 7.05 5.636L12 10.586z" />
            </svg>
          </div>
          </div>

          
      <form onSubmit={handleSubmit}>
        {step === 1 && (
        <div className="flex flex-col">
          <div className="w-100 border border-gray-400 rounded mb-2 justify-center items-center">
          <div className="flex justify-center items-center mb-1 mt-1">
             <label className="text-sm font-bold align-middle ml-1" htmlFor="">
            Inmate Code
          </label>
          </div>
          <div className="flex justify-center items-center mb-1">
             <h1  id="code" className="text-lg font-bold" >{inmateCode}</h1>
          </div>
          </div>
          {/* inmate Information */}
        <div className="w-100 border border-gray-400 rounded ">
        <div className="flex justify-center items-center">
             <label className="text-sm font-bold align-middle ml-1 mt-2" htmlFor="">
            Inmate Information
          </label>
          </div>
        
        {/* lastname, firstname, middlename */}
          <div className="w-100 flex mb-2">
          <div className="mb-1 mr-1 ml-1 mt-1 ">
              <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                Last Name*
              </label>
              <input
                         className="appearance-none border border-gray-300 rounded w-full w-300 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                         id="lastName"
                         type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                  />
            </div>
            <div className="mb-1 mr-1 ml-1 mt-1">
              <label className="block text-gray-700 mb-0 text-sm" htmlFor="middleName">
                Middle Name <i class="italic">(Optional) </i> 
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                id="middleName"
                type="text"
                placeholder="Enter middle name"
                value={middleName}
                onChange={(event) => setMiddleName(event.target.value)}
              />
            </div>
            <div className="mb-1 mr-1 ml-1 mt-1">
              <label className="block text-gray-700 mb-0 text-sm" htmlFor="firstName">
                First Name*
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                id="firstName"
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="mb-1 mr-1 ml-1 mt-1">
              <label className="block text-gray-700 mb-0 text-sm" htmlFor="extension">
              Extension <i className="italic">(Optional)</i>
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                id="extension"
                type="text"
                placeholder="Enter extension name"
                value={extensionName}
                onChange={(event) => setExtensionName(event.target.value)}
              />
            </div>
          </div>

{/* date of birth, sex, civil status */}
          <div className="w-100 flex mb-2">

          <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
              <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                Date of Birth*
              </label>
              <input
                 className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                   id="birthday"
                   type="date"
                 value={birthday}
                   onChange={(event) => setBirthday(event.target.value)}
                    />

            </div>
            <div className="flex-grow mb-1 mr-1 ml-1 mt-1">
              <label className="block text-gray-700 mb-0 text-sm" htmlFor="middleName">
               Sex* 
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                id="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <option value="">Select sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex-grow mb-1 mr-1 ml-1 mt-1">
              <label className="block text-gray-700 mb-0 text-sm" htmlFor="firstName">
                Civil Status*
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                id="civilStatus"
                value={civilStatus}
                onChange={(event) => setCivilStatus(event.target.value)}
              >
                <option value="">Select civil status</option>
                <option value="single">Single</option>
                <option value="married">Marrried</option>
                <option value="annulled">Annulled</option>
                <option value="separated">Seperated</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
        
          </div>

{/* address  */}
          <div className="w-100 flex mb-2">

<div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
    <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
      Complete Address* 
    </label>
    <input
                         className="appearance-none border border-gray-300 rounded w-full w-300 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                         id="address"
                         type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                  />
  </div>

 

           </div>

           {/* eye complexion, color of hair  */}
          <div className="w-100 flex mb-2">
             <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
                <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                  Complexion*
                 </label>
                 <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                id="complexion"
                value={complexion}
                onChange={(event) => setComplexion(event.target.value)}
              >
                <option value="">Select complexion</option>
                <option value="">Light</option>
                <option value="Medium">Medium</option>
                <option value="Tan">Tan</option>
                <option value="Dark">Dark</option>
              </select>
             </div>
             <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
                <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                  Eye Color*
                 </label>
                 <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                id="eyeColor"
                value={eyeColor}
                onChange={(event) => setEyeColor(event.target.value)}
              >
                <option value="">Select eye color</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Dark">Dark</option>
              </select>
             </div>
           </div>
        </div>
      </div>
      
        )}
        {step === 2 && (
            <div className="flex flex-col">
       
            {/* inmate Information */}
          <div className="w-100 border border-gray-400 rounded ">
   
          
          {/* lastname, firstname, middlename */}
          <div className="mb-0 mr-1 ml-1 mt-1 ">
            <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                  Sentence
                </label>
          </div>

          <div className="w-100 flex mb-2">
            <div className="flex-grow mb-0 mr-1 ml-1 mt-1 ">
                <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                  Start Date*
                </label>
                <input
                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                     id="startDate"
                     type="date"
                   value={dateStart}
                     onChange={(event) => setDateStart(event.target.value)}
                      />
              </div>
              <div className="flex-grow  mb-1 mr-1 ml-1 mt-1 ">
                <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                  End Date*
                </label>
                <input
                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                     id="endDate"
                     type="date"
                   value={dateEnd}
                     onChange={(event) => setDateEnd(event.target.value)}
                      />
              </div>

              <div className="flex-grow  mb-1 mr-1 ml-1 mt-1 ">
                <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                  Total Year(s) of sentence
                </label>
                <input
                   className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                     id="startDate"
                     type="text"
                    disabled={true}
                     
                  //  value={birthday}
                    //  onChange={(event) => setBirthday(event.target.value)}
                      />
              </div>
           
           
            </div>

            
  
  {/* date of birth, sex, civil status */}
            <div className="w-100 flex mb-2">
  
            <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
                <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                  Visiting Privilage
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id="vistorPrivilage"
                  value={visitorPrivilage}
                  onChange={(event) => setVisitorPrivilage(event.target.value)}
                >
                  <option value="">Select visiting privilage</option>
                  <option value="1">Allowed visitor(s)</option>
                  <option value="0">Not allowed visitor(s)</option>
                </select>
              </div>

              <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
                <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
                  Cell Assignment*
                </label>
          
            <Select
             id="cell"
             options={cellName}
              value={cell}
              onChange={handleSelectChange}
              className="appearance-none border rounded w-full py-0 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                 
               />
              </div>
           
          
            </div>
  
  {/* address title */}
    <div className="w-100 flex mb-1">
    <div className="flex-grow mb-0 mr-1 ml-1 mt-1 ">
      <label className="block text-gray-700 mb-0 text-sm" htmlFor="">
        Emergency contact person*
      </label>
    </div>
   
  </div>
  
  
  {/* address  */}
            <div className="w-100 flex mb-2">
  
  <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
      <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
        Name*
      </label>
      <input
                           className="appearance-none border border-gray-300 rounded w-full w-300 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                           id="name"
                           type="text"
                          placeholder="Enter namet"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                    />
    </div>
   
    <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
      <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
        Contact Number*
      </label>
      <input
                           className="appearance-none border border-gray-300 rounded w-full w-300 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                           id="contactNumber"
                           type="text"
                          placeholder="Enter contact number"
                          value={contactNumber}
                          onChange={(event) => setContactNumber(event.target.value)}
                    />
    </div>
    <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
      <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
        Relationship
      </label>
      <input
                           className="appearance-none border border-gray-300 rounded w-full w-300 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                           id="relationship"
                           type="text"
                          placeholder="Enter relationship"
                          value={relationship}
                          onChange={(event) => setRelationship(event.target.value)}
                    />
    </div>
  
             </div>
  
             {/* eye complexion, color of hair  */}
            <div className="w-100 flex mb-2">
               <div className="flex-grow mb-1 mr-1 ml-1 mt-1 ">
                  <label className="block text-gray-700 mb-0 text-sm" htmlFor="lastName">
            Image
                   </label>
                   <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  id=""
                  type="file"
                  value={imageFile}
                  
                  onChange={(event) => setImageFile(event.target.value)}
                >
                  
                </input>
               </div>
             </div>
          </div>
        </div>
        )}

<div className="flex justify-between">
{step > 1 && (
<button
           className="px-5 py-1  bg-blue-600 text-white rounded-md mr-2 text-sm hover:bg-blue-700 mt-1" 
           onClick={handlePreviousStep}
         >
Previous
</button>
)}
{step < 2 && (
<button className="px-5 py-1  bg-blue-600 text-white rounded-md mr-2 text-sm hover:bg-blue-700 mt-1" onClick={handleNextStep} >
Next
</button>
)}
{step === 2 && (
<button
           className="px-5 py-1 bg-green-500 hover:bg-green-700 text-white rounded-md mr-2 text-sm mt-1"
           type="submit"
           onClick={handleSave}
         >
Submit
</button>
)}
</div>
</form>
</div>
</div>
</div>
);
};