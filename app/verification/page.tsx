'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Button from '@/components/Button';
import VerificationInput from '@/components/VerificationInput';

export default function Verification() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email') || '';
  const [verificationCode, setVerificationCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
  
  useEffect(() => {
    if (!email) {
      router.push('/login');
    }
  }, [email, router]);
  
  useEffect(() => {
    // Check if code is complete (6 digits)
    setIsValidCode(verificationCode.length === 6);
  }, [verificationCode]);
  
  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.length === 6) {
      router.push('/welcome');
    }
  };
  
  const handleGoBack = () => {
    router.push('/login');
  };
  
  return (
    <AuthLayout title="Verification code">
      <div className="w-full flex flex-col items-start gap-8">
        <p className="text-gray-400">
          We sent a verification code to {email}
        </p>
        
        <form onSubmit={handleVerification} className="w-full flex flex-col gap-6">
          <div className="flex justify-start">
            <VerificationInput 
              length={6} 
              onChange={setVerificationCode} 
            />
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            disabled={!isValidCode}
            isActive={isValidCode}
          >
            Continue
          </Button>
          
          <Button type="button" variant="outline" onClick={handleGoBack}>
            Back
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}