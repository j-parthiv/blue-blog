"use client";
import Image from "next/image";
import { useState, FC } from "react";
import Modal from "./Modal";
import Badge from "./Badge";

const Hero: FC = () => {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="h-auto py-6 flex flex-col xl:flex-row gap-9 items-center">
      <div className="xl:w-6/12">
        <Badge title="Explore" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug tracking-wide my-5">
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
      <div className="xl:w-1/2 xl:p-9">
        <Image
          src="/dummy.jpeg"
          alt="dummy"
          width={1000}
          height={400}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
