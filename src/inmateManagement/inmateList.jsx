import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatString, inmateName } from '../Utils/const';

import { GetInmateListAPI } from '../Utils/API/inmateManagement';

// import { AddInmateAPI, DeleteInamteAPI, GetInamteListAPI, UpdateInamteAPI } from './Utils/API/inmateManagement';


function InmateList() {

  const [inmateStatus, setInmateStatus] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [inmateList, setInmateList] = useState([]);
  const [addButton, setAddButton] = useState("Save")
  const [inputValue, setInputValue] = useState("");
  const [idUpdate, setIdUpdate] = useState();




  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  //Load the Action list to table
  const fetchData = () => {
    GetInmateListAPI(inmateStatus)
      .then((result) => {
        console.log(result)
        return result.json()
      })
      .then((result) => {
        console.log(JSON.stringify(result.inmateList))
        setInmateList(result.inmateList)
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddNewButton = () => {
   window.location.href='/addinmate'
  
  }

  const handleCancel = () => {
    window.location.href ='/homepage'

  }

  const handleRecord = (id) => {
  
    window.location.href = "/recordmanagement?search="+id;

  }


return (

    <div className="flex justify-center items-center mt-0 ml-1 w-100 ">
      <div className="bg-white rounded-lg shadow-md p-4 mt-6 mb-5 ml-2 mr-2 ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center">
            Inmate Management
            <div className="bg-green-500 text-white rounded-md px-0 py-0 ml-2 hover:bg-green-600 text-sm outline-none" onClick={() => handleAddNewButton()}>
              <svg
                className="w-5 h-5 fill-current "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              
            </div>
          </h3>

         
          <div className="hover:text-gray-600 text-sm " onClick={() => handleCancel()} >
          
            <svg
              className="w-6 h-6 fill-current text-red-500 hover:text-gray-600 transition-colors duration-200" 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 10.586l4.95-4.95a1 1 0 1 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 1 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 1 1-1.414-1.414L10.586 12 5.636 7.05A1 1 0 0 1 7.05 5.636L12 10.586z" />
            </svg>
      
          </div>
   

        </div>



 
        <hr />
        <div className="flex justify-between items-center mt-2 mb-4 ">
          <h2 className="font-medium">List of Inmates</h2>
        </div>
        <div >
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-xs">
                <th className="px-1 py-1" >Code</th>
                <th className="px-1 py-1">Name</th>
                <th className="px-1 py-1">ID</th>
                <th className="px-1 py-1">Sex</th>
                <th className="px-1 py-1">Date of Birth</th>
                <th className="px-1 py-1">Address</th>
                <th className="px-1 py-1">Civil Status</th>
                <th className="px-1 py-1">Eye Color</th>
                <th className="px-1 py-1">Complexion</th>
                <th className="px-1 py-1">Cell</th>
                <th className="px-1 py-1">Emergency Person Contact</th>
                <th className="px-1 py-1">Visiting Privilage</th>
                <th className="px-1 py-1">Action</th>
              </tr>
            </thead>
            <tbody style={{ overflowY: 'auto' }}>
              {inmateList.map((item) => (
                <tr id="tablerowhover" key={item.id} className="border-b">
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2">{item.id}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2  " >{item.code}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.lastname+", "+item.firstname+" "+item.middlename+" "+(item.extension ==null ?"":item.extension)}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.sex}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.dob}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.address}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.marital_status}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.eye_color}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.complexion}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.cell_id}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{item.emergency_name +", "+item.emergency_contact+", "+item.emergency_relation}</td>
                  <td className="px-1 py-1 text-gray-600 text-xs border-l-2 ">{(item.visiting_privilege==1
                     ? 'Allowed Visitor':'Not Allowed Visitors')}</td>

                  <td className="py-2 px-4 text-gray-600 text-xs  border-l-2 border-r-2  text-align-center">
                    <div className="mr-0 flex">
                    <div onClick={() => handleDelete(item.id)}>
                     <svg
                        className="h-4 w-4 text-blue-500 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                            >                    
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                    </svg>
                </div>

                      <div className=""  onClick={() => handleRecord(item.id, (item.lastname+", "+item.firstname+" "+item.middlename+" "+(item.extension ==null ?"":item.extension)))}>
                        <svg
                          className="h-5 w-5 text-green-500 hover:text-gray-600
                          "
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 19a2 2 0 01-2 2H9a2 2 0 01-2-2v-9a2 2 0 012-2h6a2 2 0 012 2v1"
                          />
                        </svg>
                      </div>

                      <div >
                        <svg
                          className="h-5 w-5 text-red-500 hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InmateList;
