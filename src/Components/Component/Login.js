import React from 'react';
import axios from "axios";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
  
    const { setAuth } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
  
    const userRef = useRef();
    const errRef = useRef();
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:5000/login",
          JSON.stringify({ email, password }),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            withCredentials: true,
          }
        );
        console.log(response);
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        const _id = response?.data?.resultId;
  
        setAuth({ email, password, roles, accessToken, _id });
        setEmail("");
        setPassword("");
        navigate("/");
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      }
    };
  
  return (
      <>
    <div class="accountbg"></div>
    <div class="wrapper-page">
        <div class="card">

            <div class="card-body">
                <h3 class="text-center mt-0 mb-3">
                    <a href="/" class="logo"><img src="https://sperious.com/images/services/shiv.png" height="35" alt="logo-img"/>  SPERIOUS</a>
                </h3>
                <h5 class="text-center mt-0 text-color"><b> Log In</b></h5>

                <form class="form-horizontal mt-3 mx-3" action="index.html">

                    <div class="form-group mb-3">
                        <div class="col-12">
                            <input 
                            class="form-control"
                             type="text" 
                             required="" 
                             placeholder="Username"
                             onChange={handleEmail}/>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <div class="col-12">
                            <input
                            class="form-control"
                            type="password"
                            required=""
                            placeholder="Password"  
                            value={password}
                            onChange={handlePassword}/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-12">
                            <div class="checkbox checkbox-primary">
                                <input id="checkbox-signup" type="checkbox" checked=""/>
                                <label for="checkbox-signup" class="text-color">
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group text-center mt-3">
                        <div class="col-12">
                            <button class="btn btn-primary btn-block btn-lg waves-effect waves-light w-100" type="submit" onClick={handleSubmit}>
                                Log In </button>
                        </div>
                    </div>

                    <div class="form-group row mt-4 mb-0">
                        <div class="col-sm-7">
                            <a href="/forgotpassword" class="text-color" onClick={() => navigate("/forgotpassword")}>
                                <i class="mdi mdi-lock me-1"></i> Forgot your password?</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
    </>
  )
}

export default Login
