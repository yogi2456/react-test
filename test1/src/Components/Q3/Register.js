import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const router = useNavigate();

    const [userData, setUserData] = useState({name: '', email: '', password: ''})

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name] : event.target.value});
    }

    const registerSubmit = (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password) {
            if(userData.password.length >= 8) {

                const response = { data: {success: true}};
                if(response.data.success) {
                    alert("register success")
                    setUserData({name: '', email: '', password: ''});
                    router('/')
                }

            } else {
                alert("password should be 8 digits")
            }

        } else {
            alert("all fields are mandatory")
        }
    }
    return(
        <div>
            <h1>Register Form</h1>
            <form onSubmit={registerSubmit}>
                <label>Name:</label> <br />
                <input type="text" name="name" onChange={handleChange} value={userData.name}/> <br />
                <label>Email:</label> <br />
                <input type="email" name="email" onChange={handleChange} value={userData.email}/> <br />
                <label>Password</label> <br />
                <input type="password" name="password" onChange={handleChange} value={userData.password}/> <br />
                <input type="submit" value="register"/>
            </form>
        </div>
    )
}

export default Register