export const dynamic = 'force-dynamic';
import {
  fetchAllItemTypes,
  fetchAllTransitTimmes,
  fetchAllStatus
} from '@/app/api/supabaseapi';
import CreateShipmentForm from '../../Components/CreateShipmentForm';

async function page() {
  const { transittimes, error: transitError } = await fetchAllTransitTimmes();
  const { packagetype, error: packageError } = await fetchAllItemTypes();
  const { statuses, error: statusError } = await fetchAllStatus();
  return (
    <div>
      <h3 className="text-4xl xs:text-center md:text-left">
        Create New Shipment
      </h3>
      <CreateShipmentForm
        transittimes={transittimes}
        transitError={transitError}
        allPackageType={packagetype}
        packageError={packageError}
        statuses={statuses || []}
      />
    </div>
  );
}

export default page;
