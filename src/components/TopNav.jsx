import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className="text-white text-2xl font-bold tracking-wide transform hover:scale-105 transition-transform duration-300"
            >
              EnrollHub 
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium relative group transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-200 hover:text-white'
                  }`
                }
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              
              <NavLink 
                to="/news" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium relative group transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-200 hover:text-white'
                  }`
                }
              >
                News and Updates
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              
              <NavLink 
                to="/events" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium relative group transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-200 hover:text-white'
                  }`
                }
              >
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              
              <NavLink 
                to="/meetings" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium relative group transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-200 hover:text-white'
                  }`
                }
              >
                Meeting
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium relative group transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-200 hover:text-white'
                  }`
                }
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;