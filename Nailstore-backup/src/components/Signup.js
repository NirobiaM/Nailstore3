import React, { useState } from 'react';

function Signup() {
  const [firstName,setFirstName]=useState('');
  const [lastName, setLastName] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', {firstName,lastName,password,email});
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-gray-600">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-600">
            First Name:
          </label>
          <input
          
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
            className="border p-2 rounded-md w-full text-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-600">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

