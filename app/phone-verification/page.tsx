'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function PhoneVerification() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber) {
      router.push(`/verification?phone=${encodeURIComponent(`${countryCode}${phoneNumber}`)}`);
    }
  };
  
  const handleGoBack = () => {
    router.push('/profile/setup');
  };
  
  return (
    <AuthLayout title="What's your phone number?">
      <div className="w-full flex flex-col gap-6">
        <p className="text-gray-400 text-center">
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
