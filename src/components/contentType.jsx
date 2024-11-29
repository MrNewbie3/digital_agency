import React from "react";

export default function ContentType() {
  const imageContent = [
    {
      id: 1,
      url: "./assets/medsos/Image Placeholder.png",
    },
    {
      id: 2,
      url: "./assets/medsos/Image Placeholder-1.png",
    },
    {
      id: 3,
      url: "./assets/medsos/Image Placeholder-2.png",
    },
    {
      id: 4,
      url: "./assets/medsos/Image Placeholder-3.png",
    },
    {
      id: 5,
      url: "./assets/medsos/Image Placeholder-4.png",
    },
    {
      id: 6,
      url: "./assets/medsos/Image Placeholder-5.png",
    },
    {
      id: 7,
      url: "./assets/medsos/Image Placeholder-6.png",
    },
    {
      id: 8,
      url: "./assets/medsos/Image Placeholder-7.png",
    },
    {
      id: 9,
      url: "./assets/medsos/Image Placeholder-8.png",
    },
    {
      id: 10,
      url: "./assets/medsos/Image Placeholder-9.png",
    },
    {
      id: 11,
      url: "./assets/medsos/Image Placeholder-10.png",
    },
    {
      id: 12,
      url: "./assets/medsos/Image Placeholder-11.png",
    },
  ];

  return (
    <div className="pt-12 lg:pt-20">
      <h2 className="text-3xl font-bold text-center capitalize text-blue-main">
        Content Type Style on <span className="text-gray-500">Instagram</span>
      </h2>
      <p className="text-center text-primary-grey my-10">
        Yuk, intip portofolio konten Instagram dari
        <span class="font-bold text-blue-600"> IC DIGITAL</span>! Dirancang khusus untuk
        <span class="font-bold text-blue-500"> meningkatkan engagement</span> dan
        <span class="font-bold text-blue-500"> memperkuat identitas merek</span> Anda, portofolio ini mencakup berbagai gaya konten menarik:
        <span class="font-bold"> Educational</span>,<span class="font-bold"> Inspirational</span>,<span class="font-bold"> Promotional</span>,<span class="font-bold"> Interactive</span>,<span class="font-bold"> Trendy</span>, hingga
        <span class="font-bold"> Engagement Content</span>. Kami hadir untuk memastikan konten Anda tak hanya
        <span class="font-bold text-blue-500"> dilihat</span>, tapi juga
        <span class="font-bold text-blue-500"> dirasakan</span> dan
        <span class="font-bold text-blue-500"> diingat</span>!{" "}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {imageContent.map((e, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] flex flex-col items-center bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300 ease-custom"
          >
            <img src={e.url} alt={e.id || "Content Image"} className="w-full h-auto rounded-md object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-center w-full button-wrapper">
        <a href="https://drive.google.com/drive/folders/1eHwUPrz9f6CtbP--jD2ZbrS09wcDZHo1?usp=sharing" target="_blank" rel="noreferrer">
          <button className="btn border-none w-fit  bg-blue-main text-white py-3 rounded-full hover:bg-blue-main px-8">See More</button>
        </a>
      </div>
    </div>
  );
}
