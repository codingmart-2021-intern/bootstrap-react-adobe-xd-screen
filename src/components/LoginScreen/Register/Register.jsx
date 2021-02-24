import { specialChars } from '@testing-library/user-event';
import React from 'react';

const Register=()=>{
    return(
        <div className="my-5">
            <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="position-relative">
                        <input className="p-1 rounded border " type="text" name="name" id="name" placeholder=' '/>
                        <label className="position-relative input-label px-3" htmlFor="name">Full name<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="position-relative">
                        <input className="p-1 rounded border " type="email" name="mail" id="mail" placeholder=' '/>
                        <label className="position-relative input-label px-3" htmlFor="email">Email<sup className="text-danger">*</sup></label>
                    </div>
                    <div className="position-relative">
                        <input className="p-1 rounded border " type="password" name="password" id="password" placeholder=' '/>
                        <label className="position-relative input-label px-3" htmlFor="password">Password<sup className="text-danger">*</sup></label> 
                    </div>
                    <button className="text-uppercase sub-btn border-0 font-weight-bold text-white" type="submit">sign up</button>
                </form>
                <h6 className="text-center">Or <span>register using</span></h6>
            </div>
        </div>
    )
}

export default Register