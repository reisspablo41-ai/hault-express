import useScrollTimeline from '../Hooks/scrollPositionTimeline';

function HistoryDates() {
  const [scrollPosition, scrollY] = useScrollTimeline();
  console.log(`the value is': ${scrollY}`);
  return (
    <div>
      <ul
        className={`flex items-center justify-center font-bold border-b-2 border-gray-300 ${
          scrollPosition
            ? 'fixed top-[13vh] left-0 w-full z-50 mx-auto transition-all  text-white bg-primary'
            : ''
        }`}
      >
        <li
          className={` p-3 ${
            scrollY >= 2018 && scrollY <= 2526.5 ? 'bg-secondary' : ''
          }`}
        >
          2010
        </li>
        <li
          className={` p-3 ${
            scrollY > 2526.5 && scrollY <= 2836.5 ? 'bg-secondary' : ''
          }`}
        >
          2012
        </li>
        <li
          className={` p-3 ${
            scrollY > 2836.5 && scrollY <= 3406.5 ? 'bg-secondary' : ''
          }`}
        >
          2015
        </li>
        <li
          className={` p-3 ${
            scrollY > 3406.5 && scrollY <= 3972 ? 'bg-secondary' : ''
          }`}
        >
          2018
        </li>
        <li
          className={` p-3 ${
            scrollY > 3972 && scrollY <= 4475 ? 'bg-secondary' : ''
          }`}
        >
          2020
        </li>
        <li
          className={` p-3 ${
            scrollY > 4475 && scrollY <= 4802 ? 'bg-secondary' : ''
          }`}
        >
          2022
        </li>
        <li className={` p-3 ${scrollY > 4802 ? 'bg-secondary' : ''}`}>2024</li>
      </ul>
    </div>
  );
}
2535.5;

export default HistoryDates;
