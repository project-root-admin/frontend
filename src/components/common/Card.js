import React from "react";

const Card = ({ title, description, imageUrl,classname, children, }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${classname}`}>
      {imageUrl && (
        <img src={imageUrl} alt="Card Image" className="w-full h-auto mb-4 rounded-md" />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
      {children}
    </div>
  );
};

export default Card;