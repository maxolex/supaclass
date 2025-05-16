'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Button from '@/components/Button';

export default function ProgramSetup() {
  const router = useRouter();
  const [hasProgram, setHasProgram] = useState<boolean | null>(null);
  
  const handleExistingProgram = () => {
    setHasProgram(true);
    router.push('/program/existing');
  };
  
  const handleNewProgram = () => {
    setHasProgram(false);
    router.push('/program/new');
  };
  
  return (
    <AuthLayout title="Do you already have a program?">
      <div className="w-full flex flex-col gap-8">
        <p className="text-gray-400 text-left">
          If you already have an existing program, we&apos;ll help you set it up in no time.
          If you&apos;re new to this, let&apos;s build your perfect program from scratch.
        </p>
        
        <div className="flex gap-4">
          <Button 
            className="flex-1" 
            onClick={handleExistingProgram}
            isActive={true}
          >
            Yes, I do
          </Button>
          
          <Button 
            className="flex-1" 
            variant="outline"
            onClick={handleNewProgram}
          >
            No, I don&apos;t
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}