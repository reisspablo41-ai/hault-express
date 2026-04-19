import ButtonBig from '@/app/Components/ButtonBig';

function EditUser() {
  return (
    <div>
      <form className="w-[90%] mx-auto">
        <div className="w-[100%] flex justify-between mt-10">
          <input
            name="name"
            id="name"
            placeholder="Full Names"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
          <input
            name="email"
            id="email"
            placeholder="Email"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
        </div>
        <div className="w-[100%] flex justify-between mt-10">
          <input
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
          <input
            name="address"
            id="address"
            placeholder="Address"
            className="w-[48%] rounded-sm p-2 focus:outline-none border border-primary"
          />
        </div>

        {/* Conditionally render Error or Success messages */}
      </form>
    </div>
  );
}

export default EditUser;
