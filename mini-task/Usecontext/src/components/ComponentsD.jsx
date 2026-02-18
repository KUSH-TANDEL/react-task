import React ,{useContext} from 'react'
import { UserContext } from './componentsA'

const ComponentsD = () => {
  const user = useContext(UserContext)
  return (
    <>
    <div className='box'>
    <div>componentsD</div>
    <div>{user}</div>
    </div>
    </>
  )
}

export default ComponentsD