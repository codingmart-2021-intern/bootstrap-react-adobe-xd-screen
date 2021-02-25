import React, { useState } from 'react';
import Login from './login/Login';
import Register from './Register/Register';
import './loginScreen.scss';

const LoginScreen = ({ onClick }) => {
    const [login, setLogin] = useState(true);
    return (
        <div className="screen fixed-top h-100 zindex-modal" >
            <div className="inner-block pl-3 bg-white ">
                <div className="d-flex justify-content-center w-100">
                    <div>
                        <span className="btn close-btn font-weight-bold" onClick={onClick} >
                            &#10005;
                        </span>
                    </div>
                    <div className="position-relative mt-4 w-100">
                        <nav className="d-flex space-x-5 font-lora h5 font-weight-bold ">
                            <span className={login?"active ":""+' text-secondary'} onClick={()=>{
                                setLogin(true)
                            }} 
                            >Logs in </span>
                            <span className={!login?"active ":""+' text-secondary'} onClick={()=>{
                                setLogin(false)
                            }} 
                            > Register</span>
                        </nav>

                    {
                        login?<Login />:<Register />
                    }
                        <div className="d-flex-around ">
                            <div className="rounded-3 socialcard px-3 py-1  border ">
                                <img className="pr-2" src='/assets/Group 18978.svg' alt="google" width="26px"/>
                                <buspantton className="text-uppercase">google</buspantton>
                            </div>
                            <div className="rounded-3 socialcard px-4 py-1  border ">
                                <img className="pr-2" src='/assets/Group 18975.svg' alt="fb" width="26px"/>
                                <span className="text-uppercase">facebook</span>
                            </div>
                            <div className="rounded-3 socialcard px-3 py-1 border ">
                                <img className="pr-2" src='/assets/Group 18976.svg' alt="twitter" width="26px"/>
                                <span className="text-uppercase">twitter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
