import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-light ">
            <div className="container">
                <Link to='/' className="navbar-brand mb-0 h1 text-white">Course Listings</Link>
            </div>
        </nav>
    )
}
