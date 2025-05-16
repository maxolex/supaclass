'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function ProgramDomain() {
  const router = useRouter();
  const [domain, setDomain] = useState('');
  const [isValidDomain, setIsValidDomain] = useState(false);
  
  useEffect(() => {
    // Simple domain validation
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
    setIsValidDomain(domain.trim() !== '' && domainRegex.test(domain));
  }, [domain]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain) {
      router.push('/program/team'); // Navigate to handle selection
    }
  };
  
  const handleGoBack = () => {
    router.push('/program/existing'); // Go back to previous step
  };
  
  return (
    <AuthLayout title="What is your personal domain name / Where should your program be hosted?">
      <div className="w-full flex flex-col gap-6">
        <p className="text-gray-400 text-left">
          Enter your personal domain name to host your program.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <Input 
            type="text" 
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="website.com, website.co, website.io, website.ai..."
            required
          />
          <p className="text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#9A9A9A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.00033 4.5C8.41454 4.5 8.75033 4.83579 8.75033 5.25V8.25C8.75033 8.66421 8.41454 9 8.00033 9C7.58611 9 7.25033 8.66421 7.25033 8.25V5.25C7.25033 4.83579 7.58611 4.5 8.00033 4.5Z" fill="#9A9A9A"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.00033 10.5C7.58611 10.5 7.25033 10.8358 7.25033 11.25C7.25033 11.6642 7.58611 12 8.00033 12C8.41454 12 8.75033 11.6642 8.75033 11.25C8.75033 10.8358 8.41454 10.5 8.00033 10.5Z" fill="#9A9A9A"/>
              </svg>
              It can be your current personal domain or the one mentioned earlier.
            </span>
          </p>
          
          <div className="mt-4 flex flex-col gap-3">
            <Button 
              type="submit" 
              variant="primary"
              isActive={isValidDomain}
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