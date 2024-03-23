import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';

const App = () => {
  return (
    <div className='flex'> 
      <Sidebar/>
      <div className='flex flex-col h-screen w-[85%] bg-[#dcfce1] overflow-auto'>
      <Navbar/>
      <Main/>
      </div>
    </div>
  );
}

export default App;