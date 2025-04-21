import React from 'react';
import { FaNewspaper, FaCalendarAlt } from 'react-icons/fa';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Exams Announcement",
      excerpt:
        "For the betterment of the students exams be held, not for giving stress to them. At the end of the semester, we conduct exams to evaluate learning progress.",
      date: "06-03-2017 07:53 AM",
    },
    {
      id: 2,
      title: "Campus Placement Drive",
      excerpt:
        "Leading tech companies will be visiting our campus next week for recruitment. Final year students should prepare their resumes.",
      date: "15-03-2017 10:30 AM",
    },
    {
      id: 3,
      title: "Cultural Fest 2023",
      excerpt:
        "Annual cultural fest 'DYPSOMCA Utsav' will be held from April 10-12. Registrations are now open for various events.",
      date: "20-03-2017 04:15 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-800">📢 News & Updates</h1>
        <p className="text-gray-600 mt-2 text-lg">Stay informed with the latest happenings around the campus.</p>
      </header>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {newsItems.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaNewspaper className="text-blue-500" /> {news.title}
              </h2>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                <FaCalendarAlt className="text-gray-400" />
                {news.date}
              </span>
            </div>
            <p className="text-gray-600 mb-6 text-sm">{news.excerpt}</p>
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm transition-transform transform hover:scale-105">
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-full bg-white text-blue-600 shadow hover:bg-blue-50">
            Previous
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white shadow">
            1
          </button>
          <button className="px-4 py-2 rounded-full bg-white text-blue-600 shadow hover:bg-blue-50">
            2
          </button>
          <button className="px-4 py-2 rounded-full bg-white text-blue-600 shadow hover:bg-blue-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default News;
