import React, { useState } from 'react';
import Profile from '../pages/Profile';
import Detail from './Detail';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    // Add your logout logic here
  };

  return (
    <div>
      {/* Sidebar */}
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-primary dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                className={`flex items-center justify-start w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'dashboard' ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
                onClick={() => handleTabChange('dashboard')}
              >
                <span className="sr-only">Dashboard</span>
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center justify-start w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'challenges' ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
                onClick={() => handleTabChange('challenges')}
              >
                <span className="sr-only">Challenges</span>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 1a1 1 0 0 1 .293.707v3.586L12 6.793l3.707-3.707a1 1 0 1 1 1.414 1.414L13.414 8l3.707 3.707a1 1 0 1 1-1.414 1.414L12 9.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 8 7.879 4.293A1 1 0 0 1 9 3.586V1zm7 7a1 1 0 0 0-1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 0-2 0v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a1 1 0 0 0-1-1zm-2 2v6H6V10h8zm2 0v6h-1.586l-2-2H11v-2h1.414l2 2H16V12zm-5.293-4.707l-2-2H11.586l2 2H16V4.414l-2-2V1a1 1 0 0 0-2 0v1.414l-2-2V1a1 1 0 0 0-2 0v1.293l-1.707-1.707a1 1 0 1 0-1.414 1.414L8.586 6H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.586l-1.707-1.707a1 1 0 0 0-1.414 0z"/>
                </svg>
                <span className="ml-3">Challenges</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center justify-start w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'kanban' ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
                onClick={() => handleTabChange('kanban')}
              >
                <span className="sr-only">Profile</span>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                <span className="ml-3">Profile</span>
              </button>
            </li>
            
            {/* Add more sidebar items as needed */}
            <li>
              <button
                className="flex items-center justify-start w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleLogout}
              >
                <span className="sr-only">Logout</span>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.96 2.96 0 0 0-.748 1.293H0v3h5a2.96 2.96 0 0 0 .749 1.293l2.828 2.828a2.96 2.96 0 0 0 1.293.749V16h3v5a2.96 2.96 0 0 0 1.293-.748l2.828-2.828a2.96 2.96 0 0 0 .749-1.293h5v-3h-5a2.96 2.96 0 0 0-.749-1.293L13.95 8.495a2.96 2.96 0 0 0-1.293-.748H6.737Z" />
                </svg>
                <span className="ml-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="ml-64">
        {/* Content based on active tab */}
        {activeTab === 'dashboard' && (
          <div>
            <Detail />
          </div>
        )}

        {activeTab === 'kanban' && (
          <div>
            <Profile />
          </div>
        )}

        {/* Add content for other tabs */}
      </div>
    </div>
  );
}

export default Dashboard;
