import React from 'react'
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
      <>
          <div className="bodyx" style={{display: 'flex',
  minWidth: '320px',placeItems:'center',
  minHeight: '100vh'}}>
              <div className="container mx-auto">
                    <img src={logo}  />
                </div>
          </div>
        
      </>
  )
}

export default Home