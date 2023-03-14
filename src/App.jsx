import './App.css';
import useState from "react";

function App() {
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-4 w-500 h-1000">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Action list</h3>
          <button className="hover:text-gray-600">
            <svg
              className="w-6 h-6 fill-current text-gray-500 hover:text-gray-600 transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 10.586l4.95-4.95a1 1 0 1 1 1.414 1.414L13.414 12l4.95 4.95a1 1 0 1 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 1 1-1.414-1.414L10.586 12 5.636 7.05A1 1 0 0 1 7.05 5.636L12 10.586z" />
            </svg>
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Action name"
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 text-sm"
          />
          <div className="flex justify-end">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 text-sm hover:bg-red-600"
            >
              Add new
            </button>
            <button
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
