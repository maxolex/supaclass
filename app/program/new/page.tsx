'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function NewProgram() {
  const router = useRouter();
  const [programName, setProgramName] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setProgramName(name);
    setIsValidName(name.trim().length > 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidName) {
      router.push('/program/domain');
    }
  };
  
  const handleGoBack = () => {
    router.push('/program/setup');
  };
  
  return (
    <AuthLayout title="What's the name of your program?">
      <div className="w-full flex flex-col gap-6">
        <p className="text-gray-400 text-left">
          Enter the name of your existing program to set it up on Supaclass. This
          will help us organize your experience.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="relative">
            <Input 
              type="text" 
              value={programName}
              onChange={handleNameChange}
              placeholder="Untitled Program"
              required
            />
            {programName.length > 0 && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-1 rounded-md text-xs">
                UP
              </div>
            )}
          </div>
          
          <div className="mt-4 flex flex-col gap-3">
            <Button 
              type="submit" 
              variant="primary"
              isActive={isValidName}
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