import React from 'react'
import './css/start.css';

const Start = () => {
    console.log('Start');

  return (
      <>
          <div className="body">
          <div class="container">
        <div class="wrapper">
        <div class=""> </div>
        <h1> EDUPHER </h1>
        <p>Lorem ipsum dolor sit amet, <br/>
            consectetur adipiscing elit.</p>
        </div>
        <div class="button-wrapper"> 
        <button class="btn outline">Import</button>
          <a href="/outcome"><button class="btn fill" >Submit</button></a>  
        </div>
    </div>
          </div>
      

      </>
  )
}

export default Start