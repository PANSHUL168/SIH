import React, { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Alumni Meet & Greet', date: '2024-09-10', location: 'University Hall', status: 'Upcoming', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Career Fair', date: '2024-09-15', location: 'Conference Center', status: 'Upcoming', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Networking Dinner', date: '2024-09-20', location: 'Main Auditorium', status: 'Upcoming', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Alumni Gala', date: '2024-08-25', location: 'Grand Ballroom', status: 'Ongoing', image: 'https://via.placeholder.com/150' }, // Example ongoing event
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-teal-300 to-blue-500 p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column - Upcoming Events */}
        <div className="bg-white p-8 rounded-xl shadow-xl col-span-1">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {events.filter(event => event.status === 'Upcoming').map((event) => (
              <div key={event.id} className="bg-teal-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-sm text-gray-600">{event.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Current/Ongoing Events */}
        <div className="bg-white p-8 rounded-xl shadow-xl col-span-3">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Current/Ongoing Events</h2>
          <div className="space-y-4">
            {events.filter(event => event.status === 'Ongoing').map((event) => (
              <div key={event.id} className="bg-teal-50 p-4 rounded-lg shadow-md flex items-center">
                <img src={event.image} alt={event.title} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date}</p>
                  <p className="text-sm text-gray-600">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
