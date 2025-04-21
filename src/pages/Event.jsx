import React from 'react';

const events = [
  {
    id: 1,
    title: "Library Day",
    description:
      "National Libraries Day is an annual event in the UK dedicated to the celebration of libraries and their importance.",
    date: "22-03-2017 10:09 AM",
    image: "https://via.placeholder.com/500x300?text=Library",
  },
  {
    id: 2,
    title: "Cooking Competition",
    description:
      "All girls must learn how to cook, and this is an opportunity for all the students to try, do, and learn!",
    date: "06-03-2017 08:18 AM",
    image:
      "https://images.unsplash.com/photo-1606788075765-9a46a2c235c7?fit=crop&w=800&q=80",
  },
];

const Event = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-[#29b6f6] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-3">
                  Events
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {event.description.slice(0, 100)}...
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  📅 {event.date}
                </div>
                <button className="bg-[#f96332] hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
