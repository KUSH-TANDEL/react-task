import React , {useEffect} from 'react'
import { useNavigate } from 'react-router';

function ProctectedRoute( {children} ) {

    const authtoken = localStorage.getItem("Authtoken");
    const authtokenParsed = authtoken ? JSON.parse(authtoken) : null;
    const navigate = useNavigate();

    useEffect(() => {
      if (!authtokenParsed) {
        navigate('/login')
      }
    }, [])
    

    if (authtokenParsed) {
        return children;
    } 

}

export default ProctectedRoute