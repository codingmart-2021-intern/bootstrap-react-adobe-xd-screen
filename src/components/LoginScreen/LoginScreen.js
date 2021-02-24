import React, { useState } from 'react';
import Login from './login/Login';
import Register from './Register/Register';
import './loginScreen.scss';

const LoginScreen = ({ showBlock, onClick }) => {
    const [login, setLogin] = useState(true);
    return (
        <div className={!showBlock?"hidden":"block"+"screen fixed bg-opacity-25 w-100 h-screen absolute top-0 bg-success "}>
            <div className="w-full relative sm:w-screen md:w-5/12 lg:w-5/12 bg-white h-screen">
                <div className="d-flex justify-center">
                    <div  className="absolute top-5 right-10">
                        <button className="font-bold" onClick={
                            onClick
                        }>
                            &#10005;
                        </button>
                    </div>
                    <div className=" absolute top-10 w-10/12">
                        <nav className="d-flex space-x-5 font-lora font-bold text-xl">
                            <span className={login?"active":""+"text-gray-400"} onClick={()=>{
                                setLogin(true)
                            }} 
                            >Log in</span>
                            <span className={!login?"active":""+"text-gray-400"} onClick={()=>{
                                setLogin(false)
                            }} 
                            >Register</span>
                        </nav>

                    {
                        login?<Login />:<Register />
                    }
                        <div className="flex justify-evenly">
                            <div className="rounded-md flex w-auto px-4 py-1 justify-evenly text-xs text-black border-2 border-gray-200">
                                <img className="pr-2" src='/assets/google.svg' alt="google" width="26px"/>
                                <button className="uppercase focus:outline-none tracking-wider">google</button>
                            </div>
                            <div className="rounded-md flex w-auto px-4 py-1 justify-evenly text-xs text-black border-2 border-gray-200">
                                <img className="pr-1" src='/assets/fb.svg' alt="fb" width="26px"/>
                                <button className="uppercase focus:outline-none tracking-wider">facebook</button>
                            </div>
                            <div className="rounded-md flex w-auto px-4 py-1 justify-evenly text-xs text-black border-2 border-gray-200">
                                <img className="pr-1" src='/assets/twitter.svg' alt="twitter" width="26px"/>
                                <button className="uppercase focus:outline-none tracking-wider">twitter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
