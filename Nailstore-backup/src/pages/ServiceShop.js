import React from 'react';

function Services() {
  const servicesList = [
    'Manicure',
    'Pedicure',
    'Acrylic Nails',
    'Gel Nails',
    'Nail Art',
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-semibold">Services</h2>
      <ul className="mt-2">
        {servicesList.map((service, index) => (
          <li key={index} className="mb-2">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;