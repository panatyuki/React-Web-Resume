// Education timeline (mobile mode) vomponents.
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

function EducationTimelineSm() {
  return (
    <section>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-red-400">
            Nov 2023 - Mar 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            - Full-Stack Software Development -
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <SchoolOutlinedIcon className="text-blue-600" /> TechUp (Thailand).
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-red-400">
            Aug 2017 - Sep 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            - Master of Arts -
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Japanese Communication and Culture
          </p>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <SchoolOutlinedIcon className="text-purple-600" /> (National
            Institute of Development Administration).
          </p>
        </li>

        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-red-400">
            Apr 2011 - Apr 2015
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            - Bachelor of Business Administration -
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Japanese Business Administration
          </p>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <SchoolOutlinedIcon className="text-purple-600" /> (Thai-Nichi
            Institute of Technology).
          </p>
        </li>
      </ol>
    </section>
  );
}

export default EducationTimelineSm;

