import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4 px-8 flex justify-between items-center mb-3">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-teal-400">About</Link></li>
                <li><Link to="/skills" className="hover:text-teal-400">Skills</Link></li>
                <li><Link to="/portfolio" className="hover:text-teal-400">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
