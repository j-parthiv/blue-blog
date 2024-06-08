import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";
import Badge from "./Badge";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="h-auto py-6 flex flex-col xl:flex-row  gap-9 items-center">
      <div className="xl:w-6/12">
        <Badge title="Explore" />
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-snug tracking-wide my-5">
          Uncover compelling articles that will capture your interest
        </h1>
        <p className="text-md text-gray-700 mb-8 leading-normal tracking-wide">
          Our blog offers a diverse range of topics to satisfy your curiosity
          and fuel your journey towards a more fulfilling life. Subscribe to our
          newsletter and be the first to receive notifications about our newest
          articles.
        </p>
        <button
          className="py-3 px-6 text-white bg-black rounded-3xl"
          onClick={openModal}
        >
          Subscribe
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className="xl:w-6/12 xl:p-9">
        <Image
          src="/dummy.jpeg"
          alt="dummy"
          width={600}
          height={400}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
