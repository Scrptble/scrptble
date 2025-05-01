import React, { useState } from 'react';
import jobs from '../data/jobs';

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    alert(`Applied for ${form.role} as ${form.name}`);
    setForm({ name: '', email: '', role: '' });
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Careers</h1>
      <ul className="mb-8 space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="border p-4">
            <h2 className="font-semibold">{job.role}</h2>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className="w-full p-2 border"
        >
          <option value="">Select Role</option>
          {jobs.map((j) => (
            <option key={j.id} value={j.role}>{j.role}</option>
          ))}
        </select>
        <button type="submit" className="button">Apply Now</button>
      </form>
    </section>
  );
}
