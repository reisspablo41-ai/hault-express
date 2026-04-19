import RefundsTable from '@/app/Components/RefundsTable';

async function page() {
  return (
    <div>
      <p>
        We inform you that the Total Refundable amount will be paid upon
        Delivery at your loaction. Thanks
      </p>
      <RefundsTable />
    </div>
  );
}

export default page;
