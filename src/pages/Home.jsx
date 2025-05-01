import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero
        title="Welcome to Scrptble"
        subtitle="Where your ideas turn into automated scripts."
        ctaText="Get Started"
        ctaLink="/contact"
      />
      <section>
        <h2 className="text-2xl font-semibold mb-2">Why Scrptble?</h2>
        <p>Streamline your workflow with code generation tools that adapt to your needs.</p>
      </section>
    </div>
  );
}
