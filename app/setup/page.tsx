'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function ProfileSetup() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName) {
      router.push('/phone-verification');
    }
  };
  
  const handleGoBack = () => {
    router.push('/login');
  };
  
  return (
    <AuthLayout title="What's your name?">
      <div className="w-full flex flex-col gap-6">
        <p className="text-gray-400 text-center">
          It&apos;ll help us personalize your experience and make our interactions more engaging.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <Input 
            type="text" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required
          />
          
          <Input 
            type="text" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            required
          />
          
          <div className="mt-4 flex flex-col gap-3">
            <Button type="submit" variant="primary">
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