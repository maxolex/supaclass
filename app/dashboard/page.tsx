'use client';

import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="bg-gray-800 py-4 px-6 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">Supaclass Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-medium">
              R
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Welcome to Supaclass!</h2>
            <p className="text-gray-300 mb-6">
              Your account has been successfully set up. You&apos;re now ready to start creating and managing your courses.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/dashboard/create-course" 
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Create a Course
              </Link>
              <Link 
                href="/dashboard/settings" 
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Settings
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Courses</p>
                  <p className="text-2xl font-semibold">0</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Students</p>
                  <p className="text-2xl font-semibold">0</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Revenue</p>
                  <p className="text-2xl font-semibold">$0</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Views</p>
                  <p className="text-2xl font-semibold">0</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <div className="text-gray-400 text-center py-8">
                No recent activity
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}