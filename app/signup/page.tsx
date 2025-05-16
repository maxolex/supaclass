'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Divider from '@/components/Divider';
import SocialButton from '@/components/SocialButton';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  
  useEffect(() => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  }, [email]);
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && isValidEmail) {
      window.location.href = `/verification?email=${encodeURIComponent(email)}`;
    }
  };
  
  return (
    <AuthLayout 
      title="Create an account" 
      subtitle={
        <div className="text-left">
          Already have an account? <Link href="/login" className="text-gray-100 hover:underline">Log Into Supaclass</Link>
        </div>
      }
    >
      <form onSubmit={handleSignup} className="w-full flex flex-col gap-7 mt-4">
        <div className="flex flex-col gap-3">
          <Input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          variant="primary"
          isActive={isValidEmail}
        >
          Sign up
        </Button>
        
        <Divider text="or" />
        
        <div className="flex gap-3">
          <SocialButton 
            icon="/google.svg" 
            text="Continue with Google" 
          />
          <SocialButton 
            icon="/apple.svg" 
            text="Continue with Apple" 
          />
        </div>
        
        <div className="text-sm text-gray-400 mt-4">
          By signing up to Supaclass, you acknowledge that you have read and agree to
          <Link href="/terms" className="text-gray-400 hover:text-gray-300"> Terms </Link>
          and
          <Link href="/privacy" className="text-gray-400 hover:text-gray-300"> Privacy Policy</Link>.
        </div>
      </form>
    </AuthLayout>
  );
}