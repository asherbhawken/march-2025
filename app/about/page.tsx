"use client";

import React from "react";

export default function AboutMePage(): JSX.Element {
  return (
    <div className="min-h-screen p-8 bg-black-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">About Asher</h1>
      <p className="text-lg mb-6">
        Hi, I&#39;m Asher. I play sports at Skyline, I like dogs, driving, and
        nature.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <img
          alt="Nature"
          className="w-full h-auto object-cover"
          src="/nature.jpeg"
        />
        <img
          alt="Lacrosse"
          className="w-full h-auto object-cover"
          src="/lax.jpeg"
        />
        <img alt="Dog" className="w-full h-auto object-cover" src="/dog.jpeg" />
        <img
          alt="Car"
          className="w-full h-auto object-cover"
          src="/cars.jpeg"
        />
      </div>
      <a href="https://skylinelax.com/">Skyline lacrosse</a>
    </div>
  );
}
