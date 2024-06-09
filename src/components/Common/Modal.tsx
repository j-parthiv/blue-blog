import Image from "next/image";
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Modal component
const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
      <div className="p-6 bg-white inline-block w-full max-w-md my-8 text-left align-middle transition-all transform shadow-xl rounded-2xl">
        {/* Modal Header */}
        <div className="flex flex-col">
          <div className="flex justify-end">
            <Image
              src="/assets/icons/x-close.svg"
              alt="Close Icon"
              height={24}
              width={24}
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>
          <h4 className="text-secondary text-lg text-center leading-[24px] font-semibold mt-8">
            Stay updated with all our latest blog alerts right in your inbox!
          </h4>
        </div>

        {/* Modal Form */}
        <form className="flex flex-col mt-3" onSubmit={handleSubmit}>
          <div className="px-5 py-3 mt-3 flex items-center gap-2 border border-gray-300 rounded-[27px]">
            <Image
              src="/assets/icons/mail.svg"
              alt="Mail Icon"
              width={18}
              height={18}
            />
            <input
              required
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="flex-1 pl-1 border-none text-gray-500 text-base focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-3 text-white text-base font-semibold bg-black rounded-lg mt-6"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
