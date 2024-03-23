import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';


const App = () => {
  return (
    <div className='flex'> 
      <Sidebar/>
      <div className='flex flex-col h-screen w-[85%] bg-[#dcfce1] overflow-auto'>
      <Navbar/>
      </div>
    </div>
  );
}

export default App;