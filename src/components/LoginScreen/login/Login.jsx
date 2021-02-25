
import React from 'react';

const Login=()=>{
    return(
        <div className="my-5">
            <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="position-relative">
                        <input className="p-1 rounded-3 border" type="email" name="mail" id="mail" placeholder=' ' />
                        <label className="position-relative input-label px-3" htmlFor="email">Email<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="position-relative">
                        <input className="p-1 rounded-3 border" type="password" name="password" id="password" placeholder=' '/>
                        <label className="position-relative input-label px-3" htmlFor="password">Password<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="d-flex justify-content-between pb-2 mob-text ">
                        <div className="d-flex align-items-center text-nowrap ">
                        <span className="remBox"><input type="checkbox" name="remember" id="remember"/></span>
                            <span className="position-relative">Remember me</span>
                        </div>
                        <div className="d-flex">
                            <a href="#" className="mr-5 orange text-capitalize underline">forgot password?</a>
                        </div>
                    </div>
                        <button className="text-uppercase  sub-btn border-0 font-weight-bold text-white" type="submit">log in</button>
                </form>
                <h5 className="text-center h6 ">Or <span>log in using</span></h5>
            </div>
        </div>
    )
}

export default Login