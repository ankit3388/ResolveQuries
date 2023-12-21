import React,{useState} from "react";
import'./index.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
// import { provider } from "../../firebase";
function Index() {
    const [register,setRegister] = useState(false);
    const [email,setEmail]=useState("")
    const [password,setPassword] =useState("")
    const [username,setUsername]=useState("")
    const [loading,setLoading]=useState("")
    const [error,setError]=useState("")
    const history=useHistory();
    function ValidateEmail(email) 
    {
        var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (reg.test(email)===false) {
        //   alert("Valid email address!");
        //   document.form1.text1.focus();
          return false;
        } else {
        //   alert("Invalid email address!");
        //   document.form1.text1.focus();
          return true;
        }
      
    }
    const handleSignInGoogle=() =>{
        signInWithPopup(auth,provider).then((res)=>{
            console.log(res)
           history.push('/');
        })
    }
    const handleRegister = () =>{
        // e.preventDefault()
        setError("")
        setLoading(true)
        if(email==="" || password==="" || username==='')
        {
            setError('Required feild is missing')
            setLoading(false);
            // history.push('/')
        }
        else 
        {
            createUserWithEmailAndPassword(auth,email,password).then((res)=>{
                setLoading(false)
                console.log(res)
                history.push('Stackoverflow')
            }).catch((error)=>{
                console.log(error)
                setError(error.message)
                setLoading(false)
            })
        }
    }
    const handleSignIn=() =>{
        // e.preventDefault()
        setError("")
        setLoading(true)
        if(email==="" || password==="")
        {
            setError('Required field is missing')
            setLoading(false)
        }
        else if(!ValidateEmail(email))
        {
            setError("email is malformed");
            setLoading(false);
        }
        else
        {
            signInWithEmailAndPassword(auth,email,password).then((res)=>{
                console.log(res)
                history.push("/")
                setLoading(false)

            }).catch((error)=>{
                console.log(error.code)
                setError(error.message)
                setLoading(false)
            })
        }
    }
    return (
    <div className="auth">
        <div className="auth-container">
            <p>Add another way to log in or sign</p>
            <div className="sign-options">
                <div onClick ={handleSignInGoogle}className="sign-option">
                    <img src="https://www.google.com/images/hpp/gsa_super_g-64.gif" alt="google"></img> 
                    <p>Login with Google</p>
                </div>
            </div>
            <div className="auth-login">
                <div className="auth-login-container">
                    {register ? (
                        <>
                            <div className="input-field">
                                <p>UserName</p>
                                <input value ={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='UserName Email'></input>
                            </div>
                            <div className="input-field">
                                <p>Email</p>
                                <input value ={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='ankit@gmail.com'></input>
                            </div>
                            <div className="input-field">
                                <p>Password</p>
                                <input value ={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='stronge'></input>
                            </div>
                            <button onClick={handleRegister} disable={loading} style={{marginTop:"10px"}}> {loading ? 'Registering..,' : 'Register'}Register</button>
                        </>

                    ):(
                        <>
                             <div className="input-field">
                                <p>Email</p>
                                <input type="text" placeholder='UserName or Email'></input>
                            </div>
                            <div className="input-field">
                                <p>Password</p>
                                <input type="password" placeholder='stronge'></input>
                            </div>
                            <button onClick={handleSignIn} disable={loading}style={{marginTop:"10px"}}>{loading ? 'Singing In...' : "Login"}Login</button>
                        </>
                    )}
                    <p onClick={() => setRegister(!register)}
                    style={{marginTop:"10px",textAlign:"center",color:"#0095ff",textDecoration:"underline",cursor:"pointer"}}>{register ? "Login" :"Register"} ?
                    </p>
                </div>
            </div>
            {
                error !=="" && (<p style={{
                    color:"red",
                    fontsize:"14px",
                }}>
                    {error}
                </p>
                )
            }
        </div>
    </div>
  )
}

export default Index
