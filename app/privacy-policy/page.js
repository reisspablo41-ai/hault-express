import Footer from '../Components/Footer';
import PrivacyAccord from '../Components/PrivacyAccord';
import Seperator from '../Components/Seperator';

function page() {
  const data = {
    title: 'Privacy Policy',
    description: 'Contact us page',
  };
  const privacyData = [
    {
      id: 1,
      title: 'None of our Privacy Practices, Including Privacy Acts',
      heading1:
        'The following describes the ways we collect information from you, and the protections that apply to your information.',
      description:
        'The Postal Service collects personal information from you and from your transactions with us. We use information we collect to provide you certain products and services, and if needed to respond to your inquiries or requests for information. We occasionally collect data about you from financial entities to perform verification services and from commercial sources. We do this, for example, to prepopulate data fields in call centers to facilitate transactions, or to market products to consumers who have agreed to receive such messages.',
      title2: 'Privacy Act Rights',
      description2:
        'The Postal Service follows the privacy requirements of the Privacy Act, which protects your personal information that we maintain in what is called a system of records. A system of records is a file, database, or program from which personal information is retrieved by name or other personal identifier. In other words, the Privacy Act applies when we use your personal information to know who you are and to interact with you – such as when you provide information to request a product or service, register on Hault Express Delivery.com, or submit an inquiry or complaint. The Privacy Act provides comprehensive protections for your personal information. This includes how information is collected, used, disclosed, stored, and discarded.',
    },
    {
      id: 2,
      title: 'Your Choices and Preferences',
      heading1: '',
      description:
        'The Postal Service believes in permission-based marketing. We do not sell, rent, or otherwise provide your personal information to outside marketers. You will only receive marketing about products and services of the Postal Service or its partners, other than products and services you already receive or are registered for, under the following conditions.',
      title2: '',
      description2:
        'If you are a consumer, we use an opt-in standard. If you have provided personal information to register for or purchase a product or service, we will not use that information to contact you in the future about another product or service unless you have provided express consent.',
    },
    {
      id: 3,
      title: 'How You Can Access Your Personal Information',
      heading1: '',
      description:
        'If you have provided personal information to us, you may request to review the information that we have maintained. Please contact the program office that provided you the product or service, the office that handled your inquiry, or the privacy office at the addresses below. We will correct or delete any inaccurate information upon your request.',
      title2: '',
      description2: '',
    },
    {
      id: 4,
      title: 'Where to Submit Inquires',
      heading1: '',
      description:
        'We would like to hear from you if you have any questions or complaints regarding our privacy policy or use of your information',

      title2: '',
      description2: 'Please contact us at haultexpressdelivery@gmail.com',
    },
  ];

  return (
    <>
      <div className="md:w-[80%] xs:w-[98%] mx-auto mt-[7%] pt-[10vh] ">
        <h1 className="text-5xl">Privacy Policy</h1>
        <Seperator />
        <h2 className="mt-10">Scope</h2>
        <p>
          This statement applies to Hault Express Delivery customers and Hault Express Delivery.com visitors,
          unless a separate privacy notice is prominently displayed.
        </p>
        <h2>Uses</h2>
        <p>
          For over two centuries, the Postal Service™ has valued your privacy,
          and built a brand that customers trust. Thank you for reviewing our
          privacy policy. <br />
          <br />
          Our privacy policy tells you about our information practices when you
          provide personal information to us, whether collected online or
          offline, or when you visit us online to browse, obtain information, or
          conduct a transaction. Personal information may include your name,
          email, mailing and/or business address, phone numbers, or other
          information that identifies you personally. We do not require you to
          register or provide personal information to visit our website. <br />
          <br />
          Key aspects of our privacy policy include: <br />
          <br />
        </p>
        <ul className="list-disc pl-10">
          <li>
            We do not sell or rent your personal information to outside parties.
          </li>
          <li>
            {' '}
            We do not market other products or services to you without your
            consent.
          </li>
          <li>
            {' '}
            We do not use web analysis tools (e.g., cookies) to identify you
            personally without your express consent.
          </li>
        </ul>
        <br />
        The policy includes detailed explanations of how we provide:
        <PrivacyAccord data={privacyData} />
      </div>
      <div className="w-[80%] mx-auto mt-[7%] pb-[10vh]">
        <h3 className="font-bold text-2xl">Personal Information</h3>
        <p>
          We collect personal information directly from you and your
          transactions with us. We also occasionally obtain information about
          you from verification services and commercial sources, such as to
          acquire permission-based marketing lists.
        </p>
        <h3 className="font-bold my-5 text-2xl">Uses</h3>
        <ul className="m-2 list-disc">
          <li>
            We use your information to provide you Hault Express Delivery products and services,
            or respond to your inquiries.
          </li>
          <li>
            We do not sell customer or mailing lists to outside parties,
            including marketers.
          </li>
          <li>
            We protect your information under the Privacy Act. We only share
            your information in the following limited situations: to a
            congressional office on your behalf; to financial entities regarding
            financial transaction issues; to a Hault Express Delivery auditor; to entities,
            including law enforcement, as required by law or in legal
            proceedings; to customs agencies relating to outgoing international
            mail; to contractors and other entities to fulfill your product or
            service; or with your consent
          </li>
        </ul>
        <h3 className="font-bold my-5 text-2xl">Important Information</h3>
        <p>
          You may access information we maintain about you by contacting the
          program office for the product/service you ordered, or by contacting
          the privacy office at the addresses provided.
        </p>
        <h3 className="font-bold my-5 text-2xl">Your choices</h3>
        <ul className="m-2 list-disc">
          <li>
            We only market other Hault Express Delivery products/services to you with your
            consent, based on your marketing preferences.
          </li>
          <li>
            You may create or change your preferences by accessing your account
            on Hault Express Delivery.com and editing your profile.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default page;
