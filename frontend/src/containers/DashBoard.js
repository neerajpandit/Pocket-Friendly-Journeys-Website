import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => (
    <div className='container'>
        <div class='jumbotron mt-5'>
            <h1 class='display-4'>Jai Shree Ram</h1>

            <p class='lead'>This isIts login with production level features!</p>
            <hr class='my-4' />
            <p>Click the Log In button</p>
            <Link class='btn btn-primary btn-lg' to='/logout' role='button'>Login</Link>
        </div>
    </div>
);

export default DashBoard;