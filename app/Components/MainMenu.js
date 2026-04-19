'use client';

import { useState, useEffect } from 'react';
import QuickToolsMenu from './QuickToolsMenu';
import { useUserContext } from '../Context/UserContext';
import SendMenu from './SendMenu';
import ReceiveMenu from './ReceiveMenu';
import HelpMenu from './HelpMenu';

function MainMenu() {
  const { setActiveMenu, activeMenu } = useUserContext();

  useEffect(() => {
    const closeMenu = () => {
      setActiveMenu(null); // Set activeMenu to null to close all menus
    };
    const handleClickOutside = (event) => {
      // Ensure the click is outside the menu
      if (
        !event.target.closest('.menu-item') &&
        !event.target.closest('.menu')
      ) {
        closeMenu();
      }
    };

    const handleEscapeKey = (event) => {
      // Close the menu on pressing Escape
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    // Add event listeners
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscapeKey);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [activeMenu, setActiveMenu]);

  return (
    <div className="relative">
      <ul className="flex list-none ml-[7%]">
        <li
          className="menu-item bg-primary px-20 py-3 text-white hover:bg-gray-100 hover:text-primary cursor-pointer mr-[-3%]"
          style={{ clipPath: 'polygon(5% 0, 0 100%, 95% 100%, 100% 0)' }}
          onMouseOver={() => setActiveMenu(1)}
        >
          Quick Tools
        </li>
        <li
          className="menu-item bg-gray-300 px-20 py-3 text-primary hover:bg-gray-100 cursor-pointer mr-[-3%]"
          style={{ clipPath: 'polygon(5% 0, 0 100%, 95% 100%, 100% 0)' }}
          onMouseOver={() => setActiveMenu(2)}
        >
          Send
        </li>
        <li
          className="menu-item bg-gray-300 px-20 py-3 text-primary hover:bg-gray-100 cursor-pointer mr-[-3%]"
          style={{ clipPath: 'polygon(5% 0, 0 100%, 95% 100%, 100% 0)' }}
          onMouseOver={() => setActiveMenu(3)}
        >
          Receive
        </li>
        <li
          className="menu-item bg-gray-300 px-20 py-3 text-primary hover:bg-gray-100 cursor-pointer mr-[-3%]"
          style={{ clipPath: 'polygon(5% 0, 0 100%, 95% 100%, 100% 0)' }}
          onMouseOver={() => setActiveMenu(4)}
        >
          Help
        </li>
      </ul>
      <div>
        {activeMenu === 1 && <QuickToolsMenu className="menu absolute" />}
        {activeMenu === 2 && <SendMenu className="menu absolute" />}
        {activeMenu === 3 && <ReceiveMenu className="menu absolute" />}
        {activeMenu === 4 && <HelpMenu className="menu absolute" />}
      </div>
    </div>
  );
}

export default MainMenu;
