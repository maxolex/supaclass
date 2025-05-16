'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function ProgramHandle() {
  const router = useRouter();
  const [handle, setHandle] = useState('');
  const [isValidHandle, setIsValidHandle] = useState(false);
  
  useEffect(() => {
    // Simple handle validation (alphanumeric and dash)
    const handleRegex = /^[a-zA-Z0-9-]+$/;
    setIsValidHandle(handle.trim() !== '' && handleRegex.test(handle));
  }, [handle]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidHandle) {
      router.push('/dashboard'); // Navigate to dashboard after setup
    }
  };
  
  const handleGoBack = () => {
    router.push('/program/domain'); // Go back to previous step
  };
  
  return (
    <AuthLayout title="Choose your unique handle">
      <div className="w-full flex flex-col gap-6">
        <p className="text-gray-400 text-left">
          Pick a unique handle for your Supaclass profile. This will be your personal
          public URL, making it easy to share and access.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex items-center">
            <div className="flex flex-row items-center p-4 gap-2.5 w-[168px] h-[51px] bg-[#2C2C2C] border-2 border-[#494949] rounded-xl">
              <span className="w-[136px] h-[19px] font-['Inter'] font-medium text-base leading-[19px] text-[#A2A2A2]">
                supaclass.com/@
              </span>
            </div>
            <Input 
              className="rounded-l-none"
              type="text" 
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="yourhandle"
              required
            />
          </div>
          
          <div className="mt-4 flex flex-col gap-3">
            <Button 
              type="submit" 
              variant="primary"
              isActive={isValidHandle}
            >
              Continue
            </Button>
            
            <Button type="button" variant="outline" onClick={handleGoBack}>
              Back
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}