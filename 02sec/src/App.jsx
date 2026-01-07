import { useState ,useCallback ,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(5)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null) 

  const passwordGenetator = useCallback (() => {
    let pass = ""
    let str=
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*()_+{}|:<>?-=[];',./`~"

    for (let i= 1; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length + 1) 
      pass += str.charAt(char)
    } 

    setPassword(pass)


  } , [length,numAllowed,charAllowed,setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => { passwordGenetator() }, [length ,numAllowed ,charAllowed ,passwordGenetator])
  


  return (
    <>
    <div className='text-info justify-content-center pt-5 '>
      <div className=' container   w-50 mx-auto rounded-5 p-4 my-3 justify-content-center text-info  bg-light '>
        <h1 className=' text-center' >Password Generter</h1> 
        <div className=' w-50 container my-5 py-5 overflow-hidden rounded-3 d-flex justify-content-center ' > 
          <input 
          type="text" 
          className=' shadow-none  btn btn-outline-light border-0 fs-4 text-center text-dark' 
          placeholder='password' 
          value={password} 
          ref={passwordRef}
          readOnly />
          <button 
          className='btn btn-primary'
          onClick={copyPassword}
          >copy</button>
        </div> 
        <div className='d-flex justify-content-center'>
          <input 
          type='range' 
          min="5" 
          max="20" 
          value={length} 
          onChange={(e) => setLength(e.target.value)} />
          <label className='mx-3 fs-5'>Length : {length} </label>

          <input 
          type='checkbox' 
          defaultChecked={numAllowed}
          onClick={() => setNumAllowed ((prev)=>!prev) }
           />
          <label className='mx-3 fs-5'>Number </label>

          <input 
          type='checkbox' 
          defaultChecked={charAllowed}
          onClick={() => setCharAllowed ((prev)=>!prev) }S
           />
          <label className='mx-3 fs-5'> Characters </label>


        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
