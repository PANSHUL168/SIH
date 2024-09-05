import React, { useState } from 'react';

const Jobs = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      location: 'New York, NY',
      type: 'Full-Time',
      description: 'Develop and maintain web applications using modern frameworks.',
      applicationDeadline: '2024-09-30',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateX',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      description: 'Lead product development teams to deliver high-quality products.',
      applicationDeadline: '2024-10-15',
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Data Insights',
      location: 'Remote',
      type: 'Part-Time',
      description: 'Analyze and interpret complex data sets to provide business insights.',
      applicationDeadline: '2024-09-25',
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Creative Minds',
      location: 'Austin, TX',
      type: 'Full-Time',
      description: 'Design intuitive and user-friendly interfaces for web and mobile applications.',
      applicationDeadline: '2024-10-10',
    },
    {
      id: 5,
      title: 'Marketing Specialist',
      company: 'Brandify',
      location: 'Chicago, IL',
      type: 'Full-Time',
      description: 'Develop and execute marketing strategies to increase brand awareness.',
      applicationDeadline: '2024-09-20',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'Cloud Solutions',
      location: 'Seattle, WA',
      type: 'Full-Time',
      description: 'Manage and optimize cloud infrastructure and CI/CD pipelines.',
      applicationDeadline: '2024-10-05',
    },
    {
      id: 7,
      title: 'Business Analyst',
      company: 'Enterprise Co.',
      location: 'Boston, MA',
      type: 'Part-Time',
      description: 'Analyze business processes and provide insights for improvement.',
      applicationDeadline: '2024-09-22',
    },
    {
      id: 8,
      title: 'Cybersecurity Specialist',
      company: 'SecureTech',
      location: 'Washington, D.C.',
      type: 'Full-Time',
      description: 'Implement and maintain security measures to protect digital assets.',
      applicationDeadline: '2024-10-12',
    },
    {
      id: 9,
      title: 'Sales Manager',
      company: 'Retail Solutions',
      location: 'Los Angeles, CA',
      type: 'Full-Time',
      description: 'Lead a sales team to achieve targets and grow market share.',
      applicationDeadline: '2024-09-28',
    },
    {
      id: 10,
      title: 'Graphic Designer',
      company: 'Design Studio',
      location: 'Miami, FL',
      type: 'Remote',
      description: 'Create visual content for digital and print media.',
      applicationDeadline: '2024-10-08',
    },
  ]);

  // State to track the currently clicked job
  const [clickedJobId, setClickedJobId] = useState(null);

  const handleCardClick = (id) => {
    setClickedJobId(id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`bg-white p-6 rounded-lg shadow-md transition-transform duration-300 cursor-pointer transform hover:scale-105 
            }`}
            onClick={() => handleCardClick(job.id)}
          >
            <h2
              className={`text-xl font-semibold mb-2 transition-transform duration-300 transform ${
                clickedJobId === job.id || clickedJobId === null ? 'group-hover:scale-110' : ''
              }`}
            >
              {job.title}
            </h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500 mb-4">{job.location} | {job.type}</p>
            <p className="text-gray-700">{job.description}</p>
            <p className="text-sm text-gray-500 mt-4">Apply by: {job.applicationDeadline}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;