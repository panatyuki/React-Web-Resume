// Skills component.

import { skills } from "../constants/skills";

function Skills() {
  return (
    <div className="bg-neutral-100 dark:bg-dark">
      <div className="flex flex-col justify-center items-center min-h-screen mx-20">
        {/* section topic. */}
        <div className="flex flex-col justify-center items-center mt-20">
          <h3 className="text-3xl font-kanit dark:text-white">
            My <span className="text-red-400">skills</span>
          </h3>
          <p className="font-opensans text-gray-400">
            My stacks and technologies
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap mt-20 gap-5">
          {skills?.map((skill, id) => (
            <div
              key={id}
              className="w-80 flex justify-start items-center border rounded-xl gap-3 px-2 py-2 bg-white dark:bg-slate-600 shadow-md transition-transform transform hover:scale-105 hover:cursor-pointer"
            >
              <div className="border rounded-lg dark:bg-neutral-200">
                <img src={skill.image} alt={skill.title} />
              </div>

              <div>
                <h4 className="dark:text-white font-roboto font-semibold">
                  {skill.title}
                </h4>
                <p className="text-gray-400 font-opensans">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

