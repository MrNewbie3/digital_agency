import React, { useEffect, useState } from "react";
import { FiHeart, FiUser, FiBriefcase } from "react-icons/fi";

const Customers = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-semibold text-blue-main text-center">Our results in numbers</h2>
      <p className="text-gray-600 mt-4 text-center font-semibold text-lg">Berikut adalah data client yang telah bekerja sama dengan kami:</p>

      <div className="flex flex-col mt-16 md:flex-row justify-center w-full space-y-6 md:space-y-0 md:space-x-6 md:px-[15vw]">
        <div className="flex flex-col items-start bg-white p-6 rounded-lg border border-[#A0A3BD] w-full gap-10">
          <div className="title flex justify-start gap-20 items-center w-full">
            <div className="icon p-3 rounded-xl bg-blue-secondary ">
              <FiHeart className="text-blue-main  text-3xl" />
            </div>
            <h3 className="text-xl font-medium">Customer satisfaction</h3>
          </div>
          <p className="flex  text-6xl text-black font-bold  ">
            <NumberCounter endNumber={99} duration={2000} />
            <span className="text-blue-main">%</span>
          </p>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg border border-[#A0A3BD] w-full gap-10">
          <div className="title flex justify-start gap-20 items-center w-full">
            <div className="icon p-3 rounded-xl bg-blue-secondary ">
              <FiUser className="text-blue-main  text-3xl" />
            </div>
            <h3 className="text-xl font-medium">Active users</h3>
          </div>
          <p className="flex  text-6xl text-black font-bold  ">
            <NumberCounter endNumber={10} duration={2000} />
            <span className="text-blue-main">+</span>
          </p>
        </div>

        <div className="flex flex-col items-start bg-white p-6 rounded-lg border border-[#A0A3BD] w-full gap-10">
          <div className="title flex justify-start gap-20 items-center w-full">
            <div className="icon p-3 rounded-xl bg-blue-secondary ">
              <FiBriefcase className="text-blue-main  text-3xl" />
            </div>
            <h3 className="text-xl font-medium">Company growth</h3>
          </div>
          <p className="flex  text-6xl text-black font-bold  ">
            <NumberCounter endNumber={75} duration={2000} />
            <span className="text-blue-main">%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function NumberCounter({ endNumber, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    function animate(currentTime) {
      // Calculate elapsed time
      const elapsed = currentTime - startTime;

      // Calculate progress as a value between 0 and 1
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing function to progress
      const easedProgress = easeInOutQuad(progress);

      // Calculate the new count based on the eased progress
      const newCount = Math.floor(easedProgress * endNumber);

      // Update the count state
      setCount(newCount);

      // Continue the animation until the progress reaches 1 (or 100%)
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    // Start the animation
    requestAnimationFrame(animate);
  }, [endNumber, duration]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Customers;
