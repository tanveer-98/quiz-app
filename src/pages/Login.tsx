
import TextField from '@mui/material/TextField'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e:any)=>{
     
    if(e.keyCode===13){
        window.sessionStorage.setItem('email', e.target.value);
        navigate('/questions');
    }
  
  }
  return (
    <div>

        <TextField
        // placeholder="Enter Email"
        label="Enter Email"
        // onChange={(e)=>setEmail(e.target.value)}
        onKeyDown={(e)=>handleSubmit(e)}
        autoFocus
    
        />
     
    </div>
  )
}

export default Login