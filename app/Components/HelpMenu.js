import Link from 'next/link';
function HelpMenu() {
  return (
    <div className="w-[40%] bg-gray-100 p-7 absolute left-[70%]">
      <ul className="text-primary">
        <Link href="/Faqs">
          {' '}
          <li className="hover:bg-gray-200 py-1">Faqs</li>
        </Link>
        <Link href="/ContactUs/RequestRefund">
          {' '}
          <li className="hover:bg-gray-200 py-1">Requesting a Refund</li>
        </Link>
        <Link href="/ContactUs/FileClaim">
          <li className="hover:bg-gray-200 py-1">Filing A Claim</li>
        </Link>
        <Link href="/testimonials">
          <li className="hover:bg-gray-200 py-1">Customer Testimonials</li>
        </Link>
      </ul>
    </div>
  );
}

export default HelpMenu;
