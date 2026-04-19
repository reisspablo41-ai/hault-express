import Footer from '../Components/Footer';
import PrivacyAccord from '../Components/PrivacyAccord';
import Seperator from '../Components/Seperator';

function page() {
  const data = {
    title: 'Accessibility Statement',
    description: 'Accessibility Statement Page',
  };

  return (
    <>
      <div className="w-[80%] mx-auto mt-[7%] mb-20 py-[10vh]">
        <h1 className="text-5xl my-5">Accessibility Statement</h1>
        <Seperator />
        <h2 className="my-5">
          Any person accessing this site agrees to the following:
        </h2>
        <p>
          Hault Express Delivery is committed to making its electronic information and
          communication technologies (ICT) including its websites accessible to
          individuals with disabilities by complying with the requirements of
          Section 508 of the Rehabilitation Act of 1973. This commitment applies
          to members of the public, employees, and applicants for positions with
          the Hault Express Delivery Section 508 is a federal law that requires agencies to
          provide individuals with disabilities access to ICT and data
          comparable to those who do not have disabilities unless an undue
          burden would be imposed on the agency. The Section 508 standards are
          the technical requirements and criteria that are used to measure
          conformance with the law. More information on Section 508 and the
          technical standards can be found at www.access-board.gov. The W3C Web
          Content Accessibility Guidelines (WCAG) 2.0 can be found
          at www.w3.org/tr/wcag20.
          <br />
          <br />
        </p>
        <h3 className="font-bold text-2xl"> COMPLAINT PROCEDURES</h3>

        <p>
          <br />
          Any employee, applicant, or member of the public with a disability
          (Complainant) who believes Hault Express Delivery ICT is inaccessible in violation of
          Section 508 may file an informal complaint. If the Complainant is not
          satisfied with the response to the informal complaint, then the
          Complainant may file a formal complaint. Informal Complaint. A
          complainant initiates the informal process by informing the
          responsible delivery manager orally or in writing of the alleged
          discrimination or inaccessibility of Delivery programs, activities, or
          ICT. Likewise, an applicant must inform the selecting official, and a
          member of the public must inform the responsible Delivery manager of
          the inaccessibility. If the matter cannot be resolved within 30 days
          of its receipt by the delivery manager or official, the Complainant
          should receive an interim status report. On or before the 60th day
          from the agency&apos;s receipt of the informal complaint, the
          appropriate Delivery Service area or functional vice president will
          send a written decision to the Complainant detailing the disposition
          of the informal complaint. Formal Complaint. If an informal complaint
          is denied relief, the Complainant may seek relief in any other
          appropriate forum, including the right to file a formal complaint with
          the Vice President and Consumer Advocate in accordance with the
          following procedures. If the Complainant files a formal complaint with
          the Vice President and Consumer Advocate, the Complainant shall
          exhaust the formal complaint procedures before filing suit in any
          other forum. A formal complaint must be filed within 30 days of the
          date the Complainant receives the decision of the area/functional vice
          president denying relief. Formal complaints must be sent to the Vice
          President and Consumer Advocate at the following Headquaters
          <br />
          <br />
          <span className="italic">Updated on July 12, 2023</span>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default page;
