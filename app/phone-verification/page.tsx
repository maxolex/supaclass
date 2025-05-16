'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function PhoneVerification() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [isFormValid, setIsFormValid] = useState(false);
  
  useEffect(() => {
    // Simple validation for phone number
    const phoneRegex = /^\d{6,15}$/; // Basic validation for digits only, 6-15 chars
    setIsFormValid(phoneRegex.test(phoneNumber) && countryCode.trim() !== '');
  }, [phoneNumber, countryCode]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber && countryCode) {
      router.push(`/welcome`);
    }
  };
  
  const handleGoBack = () => {
    router.push('/profile/setup');
  };
  
  return (
    <AuthLayout title="What's your phone number?">
      <div className="w-full flex flex-col gap-6">
        <p className="text-gray-400 text-left">
          This information will be utilized to authenticate your account and grant access to features such as direct messaging.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="w-20">
              <Input 
                type="text" 
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                required
              />
            </div>
            
            <div className="flex-1">
              <Input 
                type="tel" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
                required
              />
            </div>
          </div>
          
          <div className="mt-4 flex flex-col gap-3">
            <Button 
              type="submit" 
              variant="primary"
              isActive={isFormValid}
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