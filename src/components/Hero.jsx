import React from 'react';

// Hero banner with tagline and call-to-action
export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="my-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-6">{subtitle}</p>
      <a href={ctaLink} className="button">{ctaText}</a>
    </section>
  );
}
