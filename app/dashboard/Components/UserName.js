'use client';

import { useUserContext } from '@/app/Context/UserContext';

function UserName() {
  const { user, setUser } = useUserContext();
  return (
    <>
      <h2 className="md:text-2xl xs:text-xl mb-5">
        Welcome, {user?.user_metadata?.name}
      </h2>
    </>
  );
}

export default UserName;
