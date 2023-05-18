import { createContext, useState } from 'react'
import ComponentThree from './components/ComponentThree';
import MyData from './Hassan\'sData';
import ComponentOne from './components/componentOne';
import './style.css'

export const nameContext = createContext();
function App() {
  const [users, setUser] = useState(MyData);
  
  return (
    <div className='container'>
      <nameContext.Provider value={users} >
         <ComponentOne/>
      </nameContext.Provider>
    </div>
  )
}

export default App
