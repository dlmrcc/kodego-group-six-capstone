import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Homepage from './homepage';
import Login from './login';
import CrimeList from './crimeManagement/crimeList';
import ActionList from './actionManagement/actionList';
import CellManagement from './cellBlockManagement';
import PrisonList from './prisonManagement/prisonList';
import InmateList from './inmateManagement/inmateList';
import AddInmate from './inmateManagement/addInmatesForm';
import UserAccountManagement from './useraccount';
import NotFound from './404';
import RecordList from './recordList/recordList';
import Signup from './signup';
import UpdateAccountManagement from './useraccount';

function App() {

 
return (
  <>


<BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>}>
        <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/crimemanagement" element={<CrimeList />} />
          <Route path="/actionmanagement" element={<ActionList />} />
          <Route path="/cellmanagement" element={<CellManagement />} />
          <Route path="/prisonmanagement" element={<CellManagement />} />
          <Route path="/addinmate" element={<AddInmate />} />
          <Route path="/inmatelist" element={<InmateList />} />
          <Route path="/recordmanagement" element={<RecordList />} />
          <Route path="/useraccount" element={<Signup />} />
          <Route path="/updateuseraccount" element={<UpdateAccountManagement />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>


  );
}

export default App;
