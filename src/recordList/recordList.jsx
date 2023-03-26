import { useEffect, useState } from 'react';
import { formatString, inmateName } from '../Utils/const';

import { GetRecordListAPI} from '../Utils/API/recordManagement';


function RecordList() {

  const [recordStatus, setRecordStatus] = useState(1)
  const [showAddForm, setShowAddForm] = useState(false);
  const [recordList, setRecordList] = useState([]);
  const [addButton, setAddButton] = useState("Save")
  const [inputValue, setInputValue] = useState("");
  const [idUpdate, setIdUpdate] = useState();
  const [name, setName] = useState();
 
  const [theSearchValue, setTheSearchValue]=useState();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {

    fetchData();
   
  }, []);

  //Load the Record list to table
  const fetchData = () => {
    let url = new URL(window.location.href);
    let searchValue = url.searchParams.get("search");
    console.log(searchValue)
    GetRecordListAPI(searchValue)
      .then((result) => {
        console.log(result)
        return result.json()
      })
      .then((result) => {
        console.log(JSON.stringify(result.recordList))
        setRecordList(result.recordList)
      })
      .catch(error => {
        console.log('error: ', error)
      })

      
  }


 
  const handleAddNewButton = () => {
    setShowAddForm(false)
    setAddButton("Save")
    setShowAddForm(true)
    setInputValue("")
  }

  // const handleSaveButton = () => {
  //   const name = formatString(document.getElementById('recordName').value)
  //   if (addButton === "Save") {
  //     //Save New API
  //     if (name == '') {
  //       alert("The record name field is empty.")
  //     }
  //     else
  //      {
  //       AddRecordAPI(name)
  //         .then((result) => {
  //           return result.json();
  //         })
  //         .then((result) => {
  //           if (result.success === false) {
  //             alert(result.message)
  //           }
  //           else {
  //             alert("Succesfully added new record")
  //             setShowAddForm(false)
  //             fetchData();
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }

  //   }
  //   else if (addButton === "Update") {
  //     //Update API
  //     if (name == '') {
  //       alert("The record name field is empty.")
  //     }
  //     else {
  //       console.log(name);
  //       UpdateRecordAPI(name, idUpdate)
  //         .then((result) => {
  //           return result.json();
  //         })
  //         .then((result) => {
  //           if (result.success === false) {
  //             alert(result.message)
  //           }
  //           else {
  //             alert("Succesfully update the record")
  //             setShowAddForm(false)
  //             fetchData();
  //           }
  //         })
  //         .catch((error) => {
  //           // console.log(error);

  //         });
  //     }

  //   }
  // }

  // const handleEdit = (name, id) => {
  //   setAddButton("Update")
  //   setShowAddForm(true);
  //   setInputValue(name)
  //   setIdUpdate(id)

  // }

  const handleCancel = () => {
    window.location.href='/inmatelist'
    setAddButton("Save")
    setShowAddForm(false)
  }


  //handle to delete the record
  // const handleDelete = (id) => {
  //   setShowAddForm(false)
  //   const confirmation = window.confirm("Are you sure you want to delete this item? This action cannot be undone.");
  //   if (confirmation) {

  //     setRecordList(recordList.filter((item) => item.id !== id));

  //     DeleteRecordAPI(id)
  //       .then((result) => {
  //         if (!result.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return result.json();
  //       })
  //       .then((data) => {
  //         if (!data || Object.keys(data).length === 0) {
  //           throw new Error("JSON data is empty or incomplete");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);

  //       });

  //   }
  // };
  return (

    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-4 mt-6 mb-5 ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center">
            Record Management
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
<div>
<h5 className='text-sm font-medium flex items-center'>Inamte Name: {name}</h5>
</div>


        {showAddForm && (

          <div>
            <hr className="mb-3" />
            <div className="mr-0 flex ">
              <label className="whitespace-nowrap text-sm pr-4 mt-2">Record Name</label>

              <input
                id="recordName"
                type="text"
                placeholder="Type here new record name"
                value={inputValue}
                className="w-full border border-gray-300 rounded-md pl-4 pr-4 py-2 text-sm focus:outline-red"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-end mt-2 mb-2">
              <button
                className="px-5 py-1  bg-blue-600 text-white rounded-md mr-2 text-sm hover:bg-blue-700"
                onClick={() => handleSaveButton()}
              >
                {addButton}
              </button>
              <button
                className="px-3 py-1 bg-gray-400 text-white rounded-md mr-0 text-sm hover:bg-gray-500"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <hr />
        <div className="flex justify-between items-center mt-2 mb-4">
          <h2 className="font-medium">List of Record</h2>
        </div>
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-sm">
                <th className="py-1 px-4">ID</th>
                <th className="py-1 px-4" >Action</th>
                <th className="py-1 px-4">Remarks</th>
                <th className="py-1 px-4">Date</th>
                <th className="py-1 px-4">Actions</th>
              </tr>
            </thead>
            <tbody style={{ overflowY: 'auto' }}>
              {recordList.map((item) => (
                <tr id="tablerowhover" key={item.id} className="border-b">
                  <td className="py-2 px-4 text-gray-600 text-sm border-l-2">{item.id}</td>
                  <td className="py-2 px-4 text-gray-600 text-sm border-l-2  " >{item.action}</td>
                  <td className="py-2 px-4 text-gray-600 text-sm border-l-2 ">{item.remarks}</td>
                  <td className="py-2 px-4 text-gray-600 text-sm border-l-2 ">{item.date}</td>
                  <td className="py-2 px-4 text-gray-600 text-sm  border-l-2 border-r-2  text-align-center">
                    <div className="mr-0 flex">
                      <div className="mr-2" onClick={() => handleEdit(item.name, item.id)}>
                        <svg
                          className="h-5 w-5 text-green-500 hover:text-gray-600"
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
                      <div onClick={() => handleDelete(item.id)}>
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

export default RecordList;
