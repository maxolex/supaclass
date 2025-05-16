import React from 'react';
import Logo from '@/components/Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[561px] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-5">
            <Logo />
            <h1 className="text-4xl font-semibold text-gray-100">{title}</h1>
            {subtitle && <div className="text-gray-400 text-base font-medium">{subtitle}</div>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;