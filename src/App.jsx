import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';


const App = () => {
  return (
    <div className='flex'> 
      <Sidebar/>
      <div className='flex flex-col h-screen w-[85%] bg-[#dcfce1] overflow-auto'>

      </div>
    </div>
  );
}

export default App;