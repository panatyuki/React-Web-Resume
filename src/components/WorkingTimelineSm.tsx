// Working timeline (mobile mode) components.
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

function WorkingTimelineSm() {
  return (
    <section>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-red-400">
            May 2023 - Oct 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            - Japanese Teacher -
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <BusinessOutlinedIcon className="text-purple-600" />{" "}
            (Triamudomsuksanomklao School).
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-red-400">
            Apr 2015 - Jul 2015
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            - Marketing Officer -
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <BusinessOutlinedIcon className="text-purple-600" /> (Colliers
            International Thailand).
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-red-400">
            2013 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            - Japanese Tutor -
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <WorkHistoryIcon className="text-blue-600" /> (Freelance).
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-red-400">
            2013 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            - Japanese Interpreter and Translator -
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <WorkHistoryIcon className="text-blue-600" /> (Freelance).
          </p>
        </li>
      </ol>
    </section>
  );
}

export default WorkingTimelineSm;

