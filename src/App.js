import React, { useContext } from 'react';
// import './App.css'
import Sheet from './Sheet';
import Home from './Home';
import Todo from './Todo';
//import Sheet2 from './Sheet2';

import { Routes, Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { render } from '@testing-library/react';
import Globalsheet from './Globalsheet'
import Todolist from './Todolist';



function App() {
    // const values = useContext(DataContext)
  return (
    <>
     <Globalsheet>
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/:SheetParams'element={<Sheet />} />
           {/* <Route path='/Todo'element={<Todo />} /> */}
           <Route path='/Todolist'element={<Todolist />} />
           {/* <Route path='/DataContext'element={<DataContext />} /> */}
        </Routes>
        
      </Globalsheet>
          
    </>      
  );
  
}

export default App;