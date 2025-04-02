import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Handle scroll event for back-to-top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
        }
    };

    return (
        <div>
            <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-mosque text-2xl"></i>
                        <a href="/" className="text-xl font-bold">Srafa-Immuna Islamic Basic School</a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        id="mobile-menu-button"
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className="fas fa-bars text-2xl"></i>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <a href="/" className="hover:text-green-200 font-medium">Home</a>
                        <a href="/about" className="hover:text-green-200 font-medium">About</a>
                        {/* <a href="/admission" className="hover:text-green-200 font-medium">Admission</a> */}
                        <a href="/gallery" className="hover:text-green-200 font-medium">Gallery</a>
                        <a href="/contact" className="hover:text-green-200 font-medium">Contact</a>
                        <a href="/admission" className="bg-white text-green-800 px-4 py-1 rounded hover:bg-green-100 font-medium">Admission</a>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div id="mobile-menu" className="md:hidden bg-green-700 px-4 pb-4">
                        <a href="/" className="block py-2 hover:text-green-200">Home</a>
                        <a href="/about" className="block py-2 hover:text-green-200" >About</a>
                        {/* <a href="/admission" className="block py-2 hover:text-green-200" onClick={(e) => handleAnchorClick(e, '#academics')}>Academics</a> */}
                        <a href="/gallery" className="block py-2 hover:text-green-200" >Gallery</a>
                        <a href="/contact" className="block py-2 hover:text-green-200" >Contact</a>
                        <a href="/admission" className="block bg-white text-green-800 px-4 py-1 rounded hover:bg-green-100 w-max mt-2">Admission</a>
                    </div>
                )}
            </nav>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    id="back-to-top"
                    className="fixed bottom-4 right-4 bg-green-800 text-white p-2 rounded-full shadow-lg hover:bg-green-700"
                    onClick={scrollToTop}
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default Navbar;