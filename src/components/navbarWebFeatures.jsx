import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavbarWebFeatures() {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-main py-8 mb-20 sticky top-0">
      <div className="container mx-auto text-end">
        <button onClick={() => navigate(-1)} className="text-white text-md font-semibold">
          Back To Website Development Page &rarr;
        </button>
      </div>
    </nav>
  );
}
