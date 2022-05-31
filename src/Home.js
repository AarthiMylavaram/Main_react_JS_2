import React, { Component , useContext, useEffect } from 'react'
 import DataContext from './DataContext';

  function Home(){
//       const a = useContext(DataContext)
//       useEffect(() =>{
//           a.update();
//       }, [])
      
    return( 
        <div>
{/* <p>This is about {a.s            tate.name} And she is in section {a.state.sec}</p>  */}
            <footer><h2>Advanced Communications and Electronic Systems company <abbr title="">ACES</abbr> is a leading international neutral host operator and a digital infrastructure company</h2></footer>
        </div>
    );
}
export default Home;
