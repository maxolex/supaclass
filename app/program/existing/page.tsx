'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function ExistingProgram() {
  const router = useRouter();
  const [websiteUrl, setWebsiteUrl] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (websiteUrl) {
      router.push('/dashboard');
    }
  };
  
  const handleGoBack = () => {
    router.push('/program/setup');
  };
  
  return (
    <AuthLayout title="Where is your program currently hosted?">
      <div className="w-full flex flex-col gap-6">
        <p className="text-gray-400 text-center">
          Share the website or platform where your program is currently hosted.
          This helps us integrate it seamlessly with Supaclass for a smoother experience.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <Input 
            type="url" 
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="www.website.com"
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