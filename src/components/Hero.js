import React from 'react';
import hero from '../images/hero.png';

export default function Hero() {
    return (
        <section className="hero">
            <img src={hero} alt="" class="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}