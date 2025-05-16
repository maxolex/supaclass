import React, { useState, useRef, useEffect, KeyboardEvent, ClipboardEvent } from 'react';

interface VerificationInputProps {
  length: number;
  onChange: (code: string) => void;
  value?: string;
}

const VerificationInput: React.FC<VerificationInputProps> = ({ length, onChange, value = '' }) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (value) {
      const valueArray = value.split('').slice(0, length);
      setCode(valueArray.concat(Array(length - valueArray.length).fill('')));
    }
  }, [value, length]);

  useEffect(() => {
    onChange(code.join(''));
  }, [code, onChange]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value === '') {
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
      return;
    }
    
    // Only accept the last character if multiple are entered
    const lastChar = value[value.length - 1];
    
    // Update the code state
    const newCode = [...code];
    newCode[index] = lastChar;
    setCode(newCode);
    
    // Move to next input if available
    if (index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      // If current input is empty and backspace is pressed, move to previous input
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    if (!pastedData.match(/^[0-9a-zA-Z]+$/)) return;
    
    const chars = pastedData.split('').slice(0, length);
    const newCode = [...code];
    
    chars.forEach((char, idx) => {
      newCode[idx] = char;
    });
    
    setCode(newCode);
    
    // Focus the last filled input or the next empty one
    const focusIndex = Math.min(chars.length, length - 1);
    inputRefs.current[focusIndex].focus();
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => { inputRefs.current[index] = el as HTMLInputElement; }}
          type="text"
          inputMode="text"
          maxLength={1}
          value={code[index] || ''}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-12 bg-transparent border border-gray-700 rounded-md text-center text-xl text-white focus:border-gray-500 focus:outline-none"
          autoComplete="off"
        />
      ))}
    </div>
  );
};

export default VerificationInput;
