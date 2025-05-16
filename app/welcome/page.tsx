'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Button from '@/components/Button';

export default function Welcome() {
  const router = useRouter();
  const username = "Rasheed"; // This would normally come from your auth state
  
  const handleContinue = () => {
    router.push('/program/setup');
  };
  
  return (
    <AuthLayout title={`No worries, ${username}`}>
      <div className="w-full flex flex-col gap-8">
        <p className="text-gray-400 text-left">
          We&apos;ll help you set up hosting for your program with a custom domain.
          Let&apos;s get started and make it yours in just a few steps.
        </p>
        
        <div className="flex flex-col gap-3">
          <Button onClick={handleContinue} isActive={true}>
            Continue
          </Button>
          
          <Button variant="outline" onClick={() => router.push('/phone-verification')}>
            Back
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}