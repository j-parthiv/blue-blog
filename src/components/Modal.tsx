import Image from "next/image";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div>
        <div className="p-6  bg-white inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <Image
                src="/assets/icons/x-close.svg"
                alt="logo"
                height={24}
                width={24}
                className="cursor-pointer"
                onClick={onClose}
              />
            </div>
            <h4 className="text-secondary text-lg text-center leading-[24px] font-semibold mt-8">
              Stay updated with all our latest blogs alert right in your inbox!
            </h4>
          </div>
          <form className="flex flex-col mt-3">
            <div className="px-5 py-3 mt-3 flex items-center gap-2 border border-gray-300 rounded-[27px]">
              <Image
                src="/assets/icons/mail.svg"
                alt="mail"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              <input
                required
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="flex-1 pl-1 border-none text-gray-500 text-base focus:outline-none border border-gray-300 rounded-[27px] shadow-xs"
              />
            </div>
            <button type="submit" className="px-5 py-3 text-white text-base font-semibold border border-secondary bg-black rounded-lg mt-6">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
