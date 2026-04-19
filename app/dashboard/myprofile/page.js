'use client';
import Image from 'next/image';
import { useUserContext } from '@/app/Context/UserContext';
import { fetchUser } from '@/app/api/supabaseapi';
import { useEffect, useState } from 'react';
import Loading from '../loading';
function Page() {
  const { user, setUser } = useUserContext();
  const userImage = user?.user_metadata?.avatar_url || '/user-image.jpeg';
  const fullName = user?.user_metadata?.name || 'Guest';
  console.log(user);
  const [refunds, setRefunds] = useState([]);
  const [error, setError] = useState();
  const { email } = useUserContext();
  const [loading, setLoading] = useState(true);
  const [activeUser, setActiveUser] = useState(true);
  useEffect(() => {
    if (email) {
      async function fetchUsers() {
        try {
          const { data } = await fetchUser(email);
          console.log(data);
          setActiveUser(data);
          setError(error);
          setLoading(false); // Stop loading after fetching data
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }

      fetchUsers(); // Call the function inside useEffect
    }
  }, [email, error]); // Add dependency array to avoid infinite loops
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-[70%] mx-auto h-[100vh] ">
      <div className="w-[100%] bg-white flex items-center justify-center rounded p-10 flex-col">
        <Image
          src={userImage}
          height={100}
          width={100}
          alt="User Avatar"
          className="rounded-full "
        />
        <div className="flex md:flex-row xs:flex-col justify-center mt-10 w-[70%] mx-auto xs:items-center">
          <h3 className="font-bold md:mr-10">User Name</h3>
          <h3>{fullName}</h3>
        </div>
        <div className="flex md:flex-row xs:flex-col justify-center mt-2 w-[70%] mx-auto xs:items-center">
          <h3 className="font-bold md:mr-10">Email</h3>
          <h3>{user?.user_metadata?.email}</h3>
        </div>
        <div className="flex md:flex-row xs:flex-col justify-center mt-2 w-[70%] mx-auto xs:items-center">
          <h3 className="font-bold md:mr-10">Phone Number</h3>
          <h3>{activeUser.phone_number}</h3>
        </div>
        <div className="flex  md:flex-row xs:flex-col justify-center mt-2 w-[70%] mx-auto xs:items-center xs:text-center">
          <h3 className="font-bold md:mr-10">Address</h3>
          <h3>{activeUser.address}</h3>
        </div>
      </div>
    </div>
  );
}

export default Page;
