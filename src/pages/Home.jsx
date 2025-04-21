import React, { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('studentLogin');
  const [formData, setFormData] = useState({
    rollNo: '',
    password: '',
    fullName: '',
    confirmPassword: '',
    course: '',
    semester: '',
    email: '',
    mobile: '',
    profileImage: null
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Forms */}
          <div className="space-y-8">
            {/* Tabs Navigation */}
            <div className="flex space-x-4 border-b border-gray-200">
              {['studentLogin', 'studentRegister', 'adminLogin'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-t-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab === 'studentLogin' && 'Student Login'}
                  {tab === 'studentRegister' && 'Student Registration'}
                  {tab === 'adminLogin' && 'Admin Login'}
                </button>
              ))}
            </div>

            {/* Forms Container */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {/* Student Login */}
              {activeTab === 'studentLogin' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Login to your Account</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Enter Roll No.</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Roll Number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Enter Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-blue-600" />
                        <span className="text-gray-600">Remember Me</span>
                      </label>
                      <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Click Here to Login
                    </button>
                  </div>
                </div>
              )}

              {/* Student Registration */}
              {activeTab === 'studentRegister' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Register to DYPSOMCA</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Roll No.</label>
                      <input
                        type="text"
                        name="rollNo"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Course</label>
                      <select
                        name="course"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Course</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="BCOM">BCOM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Semester</label>
                      <input
                        type="number"
                        name="semester"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                    Complete Registration
                  </button>
                </div>
              )}

              {/* Admin Login */}
              {activeTab === 'adminLogin' && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Staff/Admin Login</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Login ID</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Admin ID"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Enter Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                      />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Login
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Promotional Content */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg flex items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                EnrollHub is Here!
              </h1>
              <p className="text-xl leading-relaxed">
                We are the best and biggest enrollment platform for college. 
                Share your thoughts, write blog posts, learn and much more!
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
                  Learn More
                </button>
                <button className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;