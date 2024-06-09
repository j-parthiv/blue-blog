// components/ErrorComponent.tsx
import { FC } from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex flex-col gap-5 text-center p-4 my-9 bg-red-100 text-red-800 border border-red-400 rounded-md">
      <p>Something went wrong!</p>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
