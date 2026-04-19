export const dynamic = 'force-dynamic';
import { fetchAllUsers } from '@/app/api/supabaseapi';
import CreateRefunds from '../../Components/CreateRefunds';

async function Page() {
  const { data, error } = await fetchAllUsers();
  return (
    <div>
      <CreateRefunds data={data} error={error} />
    </div>
  );
}

export default Page;
