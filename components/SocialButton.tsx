import React from 'react';
import Image from 'next/image';

interface SocialButtonProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button
      className="flex flex-row justify-center items-center gap-2 px-4 py-4 w-full border border-gray-600 rounded-xl text-gray-400"
      onClick={onClick}
    >
      <div className="w-4 h-4 relative">
        <Image src={icon} alt={text} width={16} height={16} />
      </div>
      <span className="font-medium text-base">{text}</span>
    </button>
  );
};

export default SocialButton;