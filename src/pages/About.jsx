import React from 'react';

const About = () => {
  const projectTitle = 'College Social Network'; // Replace with dynamic data as needed

  const features = [
    {
      title: 'Incredible Features',
      text: 'The web application which helps college students to interact with their faculties and many more.',
      img: 'img/info1.webp',
    },
    {
      title: 'Beautifully Designed',
      text: 'The website works in the desktop computers, laptops, and mobile devices with the help of browser.',
      img: 'img/info2.webp',
    },
    {
      title: 'Faculty Friendly',
      text: 'Faculties are the users who monitor students, upload quiz questions, study materials, and publish results.',
      img: 'img/info3.webp',
    },
    {
      title: 'Rich Student Interface',
      text: 'Students can view study materials, quiz questions, results and communicate with each other.',
      img: 'img/info4.webp',
    },
    {
      title: 'Messaging System',
      text: 'Allows users to chat with their friend circles and in group chat.',
      img: 'img/info5.webp',
    },
    {
      title: 'Connect',
      text: 'Provides a common platform to connect students and faculties online.',
      img: 'img/info6.webp',
    },
  ];

  return (
    <div className="bg-blue-100 pt-20 ">
      <div className="bg-blue-100 py-10 text-center">
        <h1 className="text-4xl font-bold text-blue-800">About Us</h1>
        <nav className="text-gray-600 mt-2">
          <a href="#" className="hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>About Us</span>
        </nav>
      </div>

      <section className="py-20 bg-white text-center">
        <h3 className="text-xl text-gray-500 uppercase">{projectTitle}</h3>
        <h2 className="text-3xl font-bold mt-2 mb-4">Why {projectTitle}?</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          The College Social Network is the social networking project for college students. It allows communication between students and faculties, enabling the sharing of assignments, notes, and interaction through the portal.
        </p>
        <hr className="my-8 border-gray-300 w-1/3 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src={feature.img} alt={feature.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Campus <span className="text-blue-500">Social</span> Network
            </h2>
            <p className="text-gray-700">
              {projectTitle} EnrollHub is a social networking site for College. The aim of this site is to provide a single platform for students and the staffs to interact with each other, such as discussing their queries, uploading and viewing the study materials, chatting with each other, attending the quiz provided by the staff members, uploading their messages, images and videos in their timeline, viewing the notice published by the staff members. The admin of the site takes care of the activities such as adding and removing of courses, subjects, students and staff members and publishing notices.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="images/5293.jpg"
              alt="Campus Network"
              className="rounded-xl w-full max-w-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="text-center mb-12">
          <h3 className="uppercase text-sm text-gray-500 tracking-widest">COLLEGE SOCIAL NETWORK</h3>
          <h2 className="text-3xl font-bold">Meet our Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          <div className="text-center">
            <img src="img/team1.webp" alt="Team member" className="w-full h-64 object-cover rounded-lg shadow" />
            <h4 className="text-lg font-bold mt-4">Krushna Karale</h4>
            <p className="text-sm text-gray-600">Developer</p>
          </div>
          {/* Add more team members here if needed */}
        </div>
      </section>
    </div>
  );
};

export default About;