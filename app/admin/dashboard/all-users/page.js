export const dynamic = 'force-dynamic';
import { fetchAllTransitTimmes, fetchAllUsers } from '@/app/api/supabaseapi';
import UserTables from '../../Components/UsersTable';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import ErrorBox from '@/app/dashboard/Components/ErrorBox';
async function Page() {
  const { data, error } = await fetchAllUsers();

  console.log(data);
  if (error) error.message = 'Error Occured While Trying to  Fetch Data';
  return (
    <>
      <div>
        <h1 className="text-4xl">Welcome, Admin</h1>
      </div>

      <div>
        <UserTables data={data} error={error} />
      </div>
    </>
  );
}

export default Page;
