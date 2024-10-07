// Contact component.

// Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GridViewIcon from "@mui/icons-material/GridView";

function Contact() {
  return (
    <div className="bg-neutral-100 dark:bg-dark flex flex-col justify-center items-center gap-14 min-h-screen">
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="dark:text-white text-4xl font-kanit">
          <span className="text-red-400">Contact</span> Me
        </h3>
        <p className="text-slate-400 font-opensans">
          Feel free to get in touch.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-4 mb-20">
          <p className="dark:text-white text-2xl font-opensans">
            Talk to me 😊
          </p>

          <div className="flex flex-col flex-wrap justify-center items-center gap-5 px-5 py-5 lg:border-r-4 lg:border-red-400">
            <div className="flex flex-col justify-center items-center w-[300px] h-[150px] bg-neutral-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-purple-200">
              <LocalPhoneIcon sx={{ fontSize: 40 }} />
              <p className="font-semibold text-orange-500">
                Mobilephone Number
              </p>
              <p className="font-opensans">(+66)98-287-5561</p>
            </div>

            <div className="flex flex-col justify-center items-center w-[300px] h-[150px] bg-neutral-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-purple-200">
              <MailOutlineIcon sx={{ fontSize: 40 }} />
              <p className="font-semibold text-blue-400">E-Mail</p>
              <p className="font-opensans">admiral.dancho@gmail.com</p>
              <p className="font-opensans">yuki.business@gmail.com</p>
            </div>

            <div className="flex flex-col justify-center items-center w-[300px] h-[150px] bg-neutral-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-purple-200">
              <img
                src="https://img.icons8.com/?size=100&id=SsFmv0xarbyz&format=png&color=000000"
                alt="line-logo"
                className="w-10 h-10"
              />
              <p className="font-semibold text-green-400">LINE</p>
              <p className="font-opensans">snowwhitesakura</p>
              <p className="font-opensans">(+66)98-287-5561</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-col justify-center items-center gap-5">
          <p className="dark:text-white text-2xl font-opensans">
            Or you can view my profile
          </p>
          <p className="dark:text-white text-2xl font-opensans">
            on other websites as follows 👍
          </p>

          <div className="flex flex-col justify-center items-center mb-10 gap-5">
            <div className="flex flex-wrap justify-center items-center gap-3">
              <a
                href="https://github.com/panatyuki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center w-[200px] h-[150px] bg-neutral-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-pink-200 hover:cursor-pointer">
                  <GitHubIcon sx={{ fontSize: 40 }} />
                  <p className="font-semibold text-slate-800">GitHub</p>
                </div>
              </a>

              <a
                href="https://vercel.com/panatyukis-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center w-[200px] h-[150px] bg-neutral-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-pink-200 hover:cursor-pointer">
                  <svg
                    data-testid="geist-icon"
                    height="35"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="35"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 1L16 15H0L8 1Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="font-semibold text-slate-800">Vercel</p>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
              <a
                href="https://www.linkedin.com/in/panat-charoenchokdilok-24702427a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center w-[200px] h-[150px] bg-neutral-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-pink-200 hover:cursor-pointer">
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                  <p className="font-semibold text-blue-800">LinkedIn</p>
                </div>
              </a>

              <a
                href="https://th.jobsdb.com/th/profile/panatปาณัท-charoenchokdilokเจริญโชคดิลก-Fp4lkV38wX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center w-[200px] h-[150px] bg-neutral-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-pink-200 hover:cursor-pointer">
                  <GridViewIcon sx={{ fontSize: 40 }} />
                  <p className="font-semibold text-blue-800">Jobsdb</p>
                </div>
              </a>

              <div className="flex flex-col justify-center items-center w-[200px] h-[150px] bg-neutral-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-pink-200">
                <div className="flex flex-col justify-center items-center">
                  <GridViewIcon sx={{ fontSize: 40 }} />
                  <p className="font-semibold text-orange-400">Jobthai</p>
                  <p className="font-kanit">ปาณัท เจริญโชคดิลก</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

