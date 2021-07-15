import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confPass, setConfPass] = useState("");
    
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

  
    
    return(
    <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>  
                <input type="text" onChange={ (e) => setFirstName(e.target.value)  } value = {firstName} />
            </div>
                <br></br>
            <div>
                <label>Last Name: </label>  
                <input type="text" onChange={ (e) => setLastName(e.target.value)  } value = {lastName}/>
            </div>
                <br></br>
            <div>
                <label>Email Address: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) } value = {email}/>
            </div>

            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value = {password}/>
            </div>
                <br></br>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfPass(e.target.value) } value = {confPass} />
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