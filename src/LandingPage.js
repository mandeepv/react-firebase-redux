import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Link to="/signup">
                <button style={{ padding: '20px', fontSize: '20px', margin: '10px', cursor: 'pointer' }}>
                    Sign Up
                </button>
            </Link>
            <Link to="/signin">
                <button style={{ padding: '20px', fontSize: '20px', margin: '10px', cursor: 'pointer' }}>
                    Sign In
                </button>
            </Link>
        </div>
    );
}

export default LandingPage;
