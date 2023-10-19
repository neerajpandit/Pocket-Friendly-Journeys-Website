import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../auth/actions/auth';

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <div>
            <Navbar />
            {children}
            <Footer/>
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
