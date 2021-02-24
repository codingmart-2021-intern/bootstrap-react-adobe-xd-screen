
import React from 'react';

const Login=()=>{
    return(
        <div className="my-10">
            <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="position-relative mb-5">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="email" name="mail" id="mail" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="email">Email<sup className="text-primary">*</sup></label>
                    </div>
                    <div className="relative">
                        <input className="p-1 rounded-md border-2 border-gray-200" type="password" name="password" id="password" placeholder=' '/>
                        <label className="relative text-sm -top-8 px-3" htmlFor="password">Password<sup className="text-primary">*</sup></label>
                    </div>
                    <div className="flex justify-between pb-2">
                        <div className="flex whitespace-nowrap w-3/12">
                            <input className="p-20" type="checkbox" name="remember" id="remember"/>
                            <span className="text-xs relative bottom-0.5">Remember me</span>
                        </div>
                        <div className="flex">
                            <a href="#" className="text-xs orange capitalize underline">forgot password?</a>
                        </div>
                    </div>
                        <button className="uppercase px-7 py-2 sub-btn rounded-md font-bold text-white text-sm" type="submit">log in</button>
                </form>
                <h2 className="text-center text-xs text-gray-400">Or <span>log in using</span></h2>
            </div>
        </div>
    )
}

export default Login