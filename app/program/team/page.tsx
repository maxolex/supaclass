'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import Button from '@/components/Button';

type TeamMember = {
  role: string;
  email: string;
};

export default function InviteTeam() {
  const router = useRouter();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { role: 'Editor', email: '' },
    { role: 'Designer', email: '' },
    { role: 'Manager', email: '' }
  ]);

  const updateTeamMemberEmail = (index: number, email: string) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index].email = email;
    setTeamMembers(newTeamMembers);
  };

  const handleAddMember = () => {
    setTeamMembers([...teamMembers, { role: 'Member', email: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter out empty email entries before submitting
    const validTeamMembers = teamMembers.filter(member => member.email.trim() !== '');
    // Process team invites
    console.log('Inviting team members:', validTeamMembers);
    router.push('/program/handle'); // Navigate to handle selection
  };

  const handleSkip = () => {
    router.push('/program/handle');
  };

  return (
    <AuthLayout title="Invite some buddies over to help set things up">
      <div className="w-full flex flex-col gap-6">
        <p className="text-gray-400 text-left">
          Bring in your team to help build your program on Supaclass. Add their
          emails and assign roles to get started together.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-28">
                <div className="w-full px-4 py-4 border-2 border-gray-600 rounded-xl bg-transparent text-gray-300 flex items-center justify-between">
                  {member.role}
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <Input
                  type="email"
                  value={member.email}
                  onChange={(e) => updateTeamMemberEmail(index, e.target.value)}
                  placeholder="name@email.com"
                />
              </div>
            </div>
          ))}

          <div onClick={handleAddMember} className="border-2 border-dashed border-gray-600 rounded-xl py-4 flex items-center justify-center cursor-pointer hover:border-gray-500 transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1V13M1 7H13" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-2 text-gray-400">Add</span>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <Button
              type="submit"
              variant="primary"
              isActive={true}
            >
              Continue
            </Button>

            <Button type="button" variant="outline" onClick={handleSkip}>
              Skip
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}