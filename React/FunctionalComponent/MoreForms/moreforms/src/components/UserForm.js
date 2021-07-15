import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confPass, setConfPass] = useState("");
    const [errorFN, seterrorFN] = useState("");
    const [errorLN, seterrorLN] = useState("");
    const [errorEM, seterrorEM] = useState("");
    const [errorPW, seterrorPW] = useState("");
    const [errorCONFPW, seterrorCONFPW] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confPass };
        console.log("Welcome", newUser);

setFirstName("")
setLastName("")
setEmail("")
setPassword("")
setConfPass("")
    };

   const handlerValidationFN = (e) => {
     setFirstName(e.target.value)
       if (e.target.value.length < 2){
           seterrorFN("First Name Must at least 2 Characters")
       }
       else{
        seterrorFN("")
       }
   }

   const handlerValidationLN = (e) => {
    setLastName(e.target.value)
      if (e.target.value.length < 2){
          seterrorLN("Last Name Must at least 2 Characters")
      }
      else{
       seterrorLN("")
      }
  }

  const handlerValidationEM = (e) => {
    setEmail(e.target.value)
      if (e.target.value.length < 2){
          seterrorEM("Email Must at least 2 Characters")
      }
      else{
       seterrorEM("")
      }
  }

  const handlerValidationPW = (e) => {
    setPassword(e.target.value)
      if (e.target.value.length < 8){
          seterrorPW("Pasword Must at least 8 Characters")
      }
      else{
       seterrorPW("")
      }
  }

  const passwordConfirmation = (e) => {
    setConfPass(e.target.value)
    if (e.target.value !== password) {
        seterrorCONFPW("Password Must be Matched!")
    }
    else{
        seterrorCONFPW("")
    }
  }
   
    
    return(
    <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>  
                <input type="text" onChange={ handlerValidationFN } value = {firstName} />
                 <p>{errorFN}</p>
            </div>
                <br></br>
            <div>
                <label>Last Name: </label>  
                <input type="text" onChange={ handlerValidationLN  } value = {lastName}/>
                <p>{errorLN}</p>
            </div>
                <br></br>
            <div>
                <label>Email Address: </label> 
                <input type="email" onChange= { handlerValidationEM } value = {email}/>
                <p>{errorEM}</p>
            </div>

            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlerValidationPW  } value = {password}/>
                <p>{errorPW}</p>
            </div>
                <br></br>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ passwordConfirmation } value = {confPass} />
                <p>{errorCONFPW}</p>
            </div>
            <br></br>

            <input type="submit" value="Re Render!" />

        </form>
<p><h2>Your Form Data : </h2></p>
<p><h3>First Name : {firstName}</h3></p>
<p><h3>Last Name : {lastName}</h3></p>
<p><h3>Email : {email}</h3></p>
<p><h4>Password : {password ? "Password" : ""}</h4> </p>
<p><h5>Conform Password : {confPass ? "Password" : ""}</h5></p>

</>
    );
};
export default UserForm;