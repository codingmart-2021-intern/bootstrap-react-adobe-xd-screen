import React from 'react';
import './notFound.scss';
const NotFound = () => {
    return (
        <div className="text-center m-5 p-5 notFound">
            <img className="m-auto" src="/assets/Group 19140.svg" alt="no product found" />
            <div className="text">
                <p className="h2 font-weight-bold text-dark">No result found</p>
                <p className="h4 text-muted" >Tryagain using different spelling or keyword</p>
            </div>
        </div>
    )
}

export default NotFound
