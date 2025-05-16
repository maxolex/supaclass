import React from 'react';

interface DividerProps {
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-full my-4">
      <div className="flex-grow h-px bg-gray-700"></div>
      {text && (
        <>
          <span className="mx-4 text-gray-600 text-center text-base font-medium">{text}</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </>
      )}
    </div>
  );
};

export default Divider;