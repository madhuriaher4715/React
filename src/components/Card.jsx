import React from 'react';

function Card({ title, description }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;
