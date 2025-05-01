import React from 'react';

const features = [
  { title: 'Form Automation', desc: 'Auto-fill forms from spreadsheets.' },
  { title: 'API Integration', desc: 'Connect to any RESTful service.' },
  { title: 'Custom Scripts', desc: 'Build and deploy your own scripts.' },
];

export default function Features() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Features</h1>
      <div className="grid gap-4">
        {features.map((f) => (
          <div key={f.title} className="p-4 border">
            <h2 className="font-semibold">{f.title}</h2>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
