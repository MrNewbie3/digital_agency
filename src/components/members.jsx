// src/components/TeamMembers.jsx
import React from "react";

const teamMembers = [
  {
    name: "Anggit Jaya Mukti",
    position: "Chief Executive Officer",
    image: "./assets/image.png", // replace with the actual image URL
  },
  {
    name: "Alief Aulia Rachman",
    position: "Chief Marketing Officer",
    image: "./assets/image-1.png", // replace with the actual image URL
  },
  {
    name: "Michael Jonathan",
    position: "Chief Operation Officer",
    image: "./assets/image-3.png", // replace with the actual image URL
  },
  {
    name: "Arthur Andy",
    position: "Chief Technology Officer",
    image: "./assets/imageMe.jpg", // replace with the actual image URL
  },
  {
    name: "Audrina Charlotte Denali",
    position: "Chief Design Officer",
    image: "./assets/image-2.png", // replace with the actual image URL
  },
];

const TeamMembers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-main mb-4">Meet our team members</h2>
        <p className="text-gray-600 mb-12">Kenali tim kami yang berpengalaman dan berdedikasi.</p>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-row relative gap-4 w-[600px] h-[300px] border rounded-lg text-start bg-white hover:shadow-lg transition-shadow duration-200">
              <img className="h-full min-w-[40%] rounded-l-lg object-cover" src={member.image} alt="illustration" />
              <div className="bio flex flex-col justify-center gap-2">
                <h4 className="text-2xl font-bold  text-primary-text">{member.name}</h4>
                <p className="tracking-wider text-xl mb-4">{member.position}</p>
                <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, soluta.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
