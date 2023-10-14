import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const router = useNavigate();

    const [userData, setUserData] = useState({email: '', password: ''});

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    const loginSubmit = (event) => {
        event.preventDefault();
        if(userData.email && userData.password) {

            const response = {data: {success: true}};
            if(response.data.success) {
                alert("login success")
                setUserData({email: '', password: ''})
                router('/')
            }

        } else {
            alert("please fill all the fields")
        }
    }


    return(
            <div>
                <h1>Login Form</h1>
                <form onSubmit={loginSubmit}>
                    <label>Email :</label> <br />
                    <input type="email" name="email" onChange={handleChange} value={userData.email}/> <br />
                    <label>Password :</label> <br />
                    <input type="password" name="password" onChange={handleChange} value={userData.password}/> <br />
                    <input type="submit" value="login"/> 
                </form>
            </div>

    )
}

export default Login