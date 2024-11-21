import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CallbackForm from '../components/CallbackForm';

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CallbackForm />
    </div>
  );
}