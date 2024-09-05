import React, { useState } from 'react';

const Donation = () => {
  // Initial donor data
  const [donors, setDonors] = useState([
    { id: 1, name: 'John Doe', amount: '$100', date: '2024-08-15' },
    { id: 2, name: 'Jane Smith', amount: '$250', date: '2024-08-20' },
    { id: 3, name: 'Alice Johnson', amount: '$50', date: '2024-08-22' },
  ]);

  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleNameChange = (e) => {
    setDonorName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setDonorEmail(e.target.value);
  };

  const handleDonateClick = () => {
    const newDonation = {
      id: donors.length + 1,
      name: donorName,
      amount: `$${donationAmount}`,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
    };

    // Add the new donation to the existing list
    setDonors([newDonation, ...donors]);

    // Clear input fields
    setDonationAmount('');
    setDonorName('');
    setDonorEmail('');

    // Show a thank you message
    alert(`Thank you, ${donorName}, for your donation of ${donationAmount}!`);
  };

  return (
    <div className="min-h-screen mt-[82px] bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Donation Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-between md:col-span-1">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Make a Donation</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Name:</label>
              <input
                type="text"
                value={donorName}
                onChange={handleNameChange}
                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Email:</label>
              <input
                type="email"
                value={donorEmail}
                onChange={handleEmailChange}
                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">Donation Amount:</label>
              <input
                type="number"
                value={donationAmount}
                onChange={handleDonationChange}
                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:border-blue-400"
                placeholder="$0.00"
              />
            </div>
            <button
              onClick={handleDonateClick}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-300"
            >
              Donate
            </button>
          </div>
        </div>

        {/* Right Column - Recent Donations */}
        <div className="bg-white p-8 rounded-xl shadow-xl md:col-span-2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Recent Donations</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <ul className="divide-y divide-gray-200">
              {donors.map((donor) => (
                <li key={donor.id} className="py-4 flex items-center space-x-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800">{donor.name}</h3>
                    <p className="text-sm text-gray-500">{donor.date}</p>
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{donor.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;



