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
    profileImage: null,
    profilePreview: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: file,
          profilePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
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
                    {/* Full Name */}
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Roll Number */}
                    <div>
                      <label className="block text-gray-700 mb-2">Roll Number *</label>
                      <input
                        type="text"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-gray-700 mb-2">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-gray-700 mb-2">Password *</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-gray-700 mb-2">Confirm Password *</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-gray-700 mb-2">Course *</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Course</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="BCOM">BCOM</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="MBA">B.E/B.Tech</option>
                      </select>
                    </div>

                    {/* Semester */}
                    <div>
                      <label className="block text-gray-700 mb-2">Semester *</label>
                      <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Semester</option>
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="5">Semester 7</option>
                        <option value="6">Semester 8</option>
                      </select>
                    </div>
                  </div>

                  {/* Profile Image Upload */}
                  <div className="space-y-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Profile Image
                    </label>
                    
                    <div className="flex items-center space-x-6">
                      {/* Image Preview */}
                      <div className="shrink-0">
                        {formData.profilePreview ? (
                          <img 
                            className="h-16 w-16 object-cover rounded-full border-2 border-gray-300" 
                            src={formData.profilePreview} 
                            alt="Profile preview" 
                          />
                        ) : (
                          <div className="h-16 w-16 rounded-full bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">No image</span>
                          </div>
                        )}
                      </div>
                      
                      {/* File Input */}
                      <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Upload a clear passport-size photo (Max 2MB, JPG/PNG)
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="button"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                    >
                      Complete Registration
                    </button>
                  </div>
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
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;