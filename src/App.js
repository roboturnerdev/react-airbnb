import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';
console.log(data);

/*
Challenge:

complete- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
      // <Hero />
  const deck = data.map(item => {
    return (
      <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    )
  });
  return (
    <div className="app">
      <Navbar />
      {deck}
    </div>
  );
}
