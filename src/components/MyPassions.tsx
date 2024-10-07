// My passions component.
import { passionsData } from "../constants/passion";

function MyPassions() {
  return (
    <div className="bg-neutral-100 dark:bg-dark min-h-screen flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="text-3xl dark:text-white font-kanit">
          Additional <span className="text-red-400">Passions</span>
        </h3>
        <p className="text-neutral-400">What I offer.</p>
      </div>

      <div className=" flex justify-center items-center flex-wrap mb-10 gap-8">
        {/* Position box */}
        {passionsData.map((passion, id) => (
          <div
            key={id}
            className="bg-slate-200 flex flex-col items-center h-[300px] w-[300px] overflow-hidden my-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer"
          >
            <img
              src={passion.image}
              alt="job-position"
              className="h-[180px] w-full object-cover"
            />

            <div className="flex flex-col justify-center items-center mt-5">
              <h4 className="text-2xl text-green-600 font-roboto">
                {passion.position}
              </h4>
              <p className="italic font-opensans">{passion.descriptions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPassions;

