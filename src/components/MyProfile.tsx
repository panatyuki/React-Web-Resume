// Qualifications component.
import MyTabs from "./MyTabs";

import myProfilePictureCircle from "../assets/photos/my-profile-picture-circle.png";

function MyProfile() {
  return (
    <div className="bg-neutral-100 dark:bg-dark flex flex-col gap-20 justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="dark:text-white text-3xl font-kanit">
          My <span className="text-blue-400">Profile</span>{" "}
          <span className="text-red-400">& Qualifications</span>
        </h3>
        <p className="text-neutral-400">My personal journey</p>
      </div>

      <div className="flex flex-wrap justify-center items-center mx-10 mb-20 gap-20">
        <div className="flex flex-col justify-center items-center h-96 w-96 p-4 gap-8">
          <div className="bg-[#152b65] rounded-full">
            <img src={myProfilePictureCircle} />
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-slate-500 dark:text-white font-opensans">
              For more details, You can download my resume to learn more
              details.
            </p>

            <a
              href="/(Resume) Panat_Charoenchokdilok.pdf"
              download="(Resume) Panat_Charoenchokdilok.pdf"
              className="w-[235px]"
            >
              <button className="btn-download font-kanit">
                Download My Resume
              </button>
            </a>
          </div>
        </div>

        <MyTabs />
      </div>
    </div>
  );
}

export default MyProfile;

