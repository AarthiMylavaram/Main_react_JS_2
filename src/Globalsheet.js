//import react from 'react';
import DataContext from './DataContext';
import { useState } from 'react'; 

const Globalsheet = (props)=>{
    
        // const SheetParam = useParams();
        const [globalData, setGlobalData] = useState({
        //   globalData : {SheetParam : {rowText:"",
        //   columnText:""} }
      })
        
    
   
    return(
        <DataContext.Provider value={{globalData, setGlobalData ,
          
        //  , handleAddTableChange ,
        //  onclickSubmit
         }}>
            {props.children}
        </DataContext.Provider>
    )
    }

export default Globalsheet;