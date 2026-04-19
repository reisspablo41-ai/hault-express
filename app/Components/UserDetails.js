'use client';

import Link from 'next/link';
import { GrNext } from 'react-icons/gr';
import ButtonBig from './ButtonBig';
import { supabase } from '../supabaseClient';
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import ButtonSpinner from './ButtonSpinner';
import { useRouter } from 'next/navigation';
import { useUserContext } from '../Context/UserContext';

function UserDetails() {
  const { user, setUser } = useUserContext(); // Access user from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const email = user?.user_metadata?.email;
  const prefix = email?.split('@')[0];
  const fullName = user?.user_metadata?.name || prefix;
  const userImage = user?.user_metadata?.avatar_url || '/user.avif';

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();

      setUser(null); // Clear user from context

      router.replace('/');
    } catch (error) {
      console.error('Error signing out:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const userContent = loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <p className="text-white mr-1">{fullName}</p>
      <Image
        src={userImage}
        height={40}
        width={40}
        alt="User Avatar"
        className="rounded-full"
      />

      <div className="relative">
        <RiArrowDropDownLine
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="absolute mt-5 w-48 bg-gray-800 text-white rounded shadow-lg z-10 left-[-450%]">
            <ul className="py-2">
              <Link href="/dashboard/myprofile">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Profile
                </li>
              </Link>
              <Link href="/dashboard">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Dashboard
                </li>
              </Link>

              <li className="px-4 py-2 hover:bg-gray-700">
                <button
                  onClick={handleSignOut}
                  disabled={loading}
                  className={`w-full text-left ${loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {loading ? <ButtonSpinner /> : 'Logout'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="flex items-center space-x-4 md:mr-10 xs:mr-2">
      {user ? (
        userContent
      ) : (
        <Link href="/auth">
          <ButtonBig className="px-7 py-2 bg-accent rounded-full items-center text-base">
            Login/Sign Up
            <GrNext className="text-white inline" />
          </ButtonBig>
        </Link>
      )}
    </div>
  );
}

export default UserDetails;
