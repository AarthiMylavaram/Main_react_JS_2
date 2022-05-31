import React, { useContext, useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { GrAddCircle } from "react-icons/gr";
import DataContext from './DataContext';
import Globalsheet from './Globalsheet';
import { useParams } from 'react-router-dom';
//import { Update } from '@mui/icons-material';



function Sheet() {
  //const b = useContext(DataContext)
  const {globalData, setGlobalData} = useContext(DataContext)
   let SheetParam = useParams().SheetParams;
const [rowData, setrowData] = useState("")
const [colData, setcolData] = useState("")
    // globalData.useParams=()=>{
    // Obj[columntext]={
    // columnText:''}
    // Obj[rowText]={
    //     rowText:''}
    // }
  
  const handleAddTableChange = (e) =>{
    e.preventDefault(); 
    // const fieldName = e.target.getAttribute('name'); //This gets the name the user gave
    // const fieldValue = e.target.value;//this gets the actuall value
    // const newTabledata = {...globalData};//copy of the existing row or column data
    // newTabledata[fieldName] = fieldValue;//updates the data

    // setGlobalData(newTabledata);
    const fieldName = e.target.getAttribute('name'); //This gets the name the user gave
  const fieldValue = e.target.value;//this gets the actuall value
  console.log(globalData[SheetParam])
  if (globalData[SheetParam] !== undefined){ //update the sheet  inside the globalData
    if(fieldName==="rowText"){
     setGlobalData(prev=>{
       globalData[SheetParam].rowText=fieldValue;
       globalData[SheetParam].columnText = prev[SheetParam].columnText;
     })
    }
    else {
    setGlobalData(prev=>{
      globalData[SheetParam].rowText=prev[SheetParam].rowText
      globalData[SheetParam].columnText = fieldValue;
    })
  }
  }
  else {
    let Obj= {}
    if(fieldName==="rowText"){
      Obj[SheetParam]={
        rowText : fieldValue ,
        columnText : ''
      }}
      else {
        Obj[SheetParam]={
          rowText : '' ,
          columnText : fieldValue
        }};
        setGlobalData(prev=>({
          ...prev,...Obj }))
  }


}
console.log(SheetParam);
console.log(globalData);
// useEffect(() =>{
//   globalData.update();
//         }, [])
// const onClickSubmit=(e) =>{
//   e.preventDefault();
//    console.log(SheetParam);
//   console.log(globalData);
  // const fieldName = e.target.getAttribute('name'); //This gets the name the user gave
  // const fieldValue = e.target.value;//this gets the actuall value
  // console.log(globalData[SheetParam])
  // if (globalData[SheetParam] !== undefined){ //update the sheet  inside the globalData
  //   if(fieldName==="rowText"){
  //    setGlobalData(prev=>{
  //      globalData[SheetParam].rowText=fieldValue;
  //      globalData[SheetParam].columnText = prev[SheetParam].columnText;
  //    })
  //   }
  //   else {
  //   setGlobalData(prev=>{
  //     globalData[SheetParam].rowText=prev[SheetParam].rowText
  //     globalData[SheetParam].columnText = fieldValue;
  //   })
  // }
  // }
  // else {
  //   let Obj= {}
  //   if(fieldName==="rowText"){
  //     Obj[SheetParam]={
  //       rowText : fieldValue ,
  //       columnText : ''
  //     }}
  //     else {
  //       Obj[SheetParam]={
  //         rowText : '' ,
  //         columnText : fieldValue
  //       }};
  //       setGlobalData(prev=>({
  //         ...prev,...Obj }))
  // }
// }
  
  const [Sheet, setSheet]=useState(['Sheet1'])
  const [eachsheet, seteachsheet]=useState(2)
  const navigate = useNavigate();


  const handleSubmit= (e) => {
    e.preventDefault();
    // ???
  }

  

  const sheetHandler = () =>{
   seteachsheet(prev=>prev+1)
    setSheet(prev => [...prev,`Sheet`+eachsheet])
  }
  
  return (
 <div>
    <ul className="nav nav-pills nav-fill" style={{borderBottom:'1px solid black',padding:'4px'}}>
        <li className="nav">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               File
            </button>
         </li>
  <li className="nav-item">
 <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
Data
 </button>
 </li>
  <li className="nav-item">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Worksheet</button>
 </li>
 <li className="nav">
 <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Dashboard</button>
 </li>
 </ul>  <>
  <ul className='navsec'>
    <li className='lis'><a  href=''style={{textDecoration: 'none',color:'black'}}>Home</a></li>
   <li className='lis'><a  href='' style={{textDecoration: 'none',color:'black'}}>Left</a></li>
   <li className='lis'><a  href='' style={{textDecoration: 'none',color:'black'}}>Right</a></li>
  </ul>
 </>
 
  <div className='task'>
    <div className='gop'>
      <table className='table table-bordered border-dark' style={{width:'160px'}}>
       <thead>
         <tr>
           {/* <th scope="col">#</th> */}
           <th scope="col"><button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Datafield</button></th>
           <th scope="col"><button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Analytics</button></th>
           {/* <th scope="col">Handle</th> */}
         </tr>
       </thead>
       <tbody >
         <tr>
           <td></td>
           <td></td>
          </tr>
       </tbody>
     </table>
 <table className='table table-bordered border-dark' >
  
   <tbody >
     <tr className='align'>
      
       <td style={{paddingRight:'90px'}} ><button type="button"  className="btn btn-secondary btn-sm "><i>Filters</i></button><br/><br/>
       <button type="button" className="btn btn-secondary btn-sm"><i>Marks</i></button><br/><br/>
       <button type="button" className="btn btn-secondary btn-sm"><i>Pages</i></button></td>
      
     </tr>
    
  </tbody>
 </table>
 </div>

 <table className='table table-bordered border-dark' style={{justifyContent:'right'}}  >
 <tbody  >
     <tr >
       
       <td style={{listStyle:'none'}}><li>row: <input type="text"  name="rowText" onChange={handleAddTableChange}/><hr/></li>
        <li>column: <input type="text"  name="columnText" onChange={handleAddTableChange}/><hr /> </li>
       <li><button type="button"   className="btn btn-success btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Submit</button> </li></td>
      
     </tr></tbody></table>
     <form onSubmit={e => {handleSubmit(e)}}>
        <label>Chore Description</label>
        <br />
        <input 
          name='choreDesc' 
          type='text'
        />
        <br/>
        <label>Name</label>
        <br />
        <input 
          name='userName' 
          type='text' 
        />
        <br />
        
      </form>
 
 </div>
    <div className="sheet-bar"  >
         <div className="sheet-tab-container">
                <div className="sheet-tab selected" style={{color:'black'}}>Datasource</div>
                 </div>
                 {Sheet.map((eachitem,key) =>(
                   <button key={key}>
                     <Link to={'/'+eachitem} key={key} style={{textDecoration:'none'}}>{eachitem}</Link>
                   </button>
                 ))}
                
                 {/* <div className="plus"><button><a href="">Sheet-2</a></button></div> */}
             <div className='brdf'><button onClick={sheetHandler}><GrAddCircle/></button></div>
       </div>
    </div>


  )
  
}

export default Sheet;
