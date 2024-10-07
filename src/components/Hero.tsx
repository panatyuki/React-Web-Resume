// Hero component.
import myPhoto from "../assets/photos/my_photo.png";
import myPhotoPictureCircle from "../assets/photos/my-profile-picture-circle.png";

function Hero() {
  return (
    <div className="bg-neutral-100 dark:bg-hero flex flex-wrap justify-center items-center min-h-screen">
      {/* Profile picture sm */}
      <div className="bg-[#152b65] rounded-full w-60 h-60 mt-5 mb-8 md:hidden">
        <img src={myPhotoPictureCircle} />
      </div>

      <div className="flex justify-center items-center gap-3">
        {/* Greeting & button */}
        {/* Greeting section */}
        <div className="flex flex-col justify-center items-center md:justify-center md:items-start">
          <div className="flex flex-col justify-center items-center mx-5 md:justify-center md:items-start">
            <p className="dark:text-white text-3xl font-roboto">Hi!</p>
            <h2 className="dark:text-white text-3xl font-roboto">
              I'm{" "}
              <span className="text-purple-400">PANAT Charoenchokdilok.</span>
            </h2>
            <h1 className="dark:text-white text-3xl font-roboto">
              <span className="text-blue-600">a Front-End-Developer</span>
            </h1>
          </div>

          <br />

          <div className="flex flex-col mx-5 justify-center md:justify-start">
            <p className="dark:text-white font-opensans">
              I'm a web developer who is interested in Japan. and I live in
              Bangkok, Thailand.
            </p>
            <p className="dark:text-white font-opensans">
              And I'm very passionate and dedicated to my works.
            </p>
          </div>

          <br />

          <div className="flex flex-col mx-5 justify-center md:justify-start">
            <p className="dark:text-white font-opensans">
              I have a positive attitude and always listen to the opinions of
              others and team members.
            </p>
            <p className="dark:text-white font-opensans">
              And I am constantly improving myself and never stop learning new
              things.
            </p>
          </div>

          <br />

          {/* Button section */}
          <div className="flex justify-center items-center md:justify-start gap-1">
            <a
              href="/(Resume) Panat_Charoenchokdilok.pdf"
              download="(Resume) Panat_Charoenchokdilok.pdf"
              className="flex w-[235px]"
            >
              <button className="btn-download font-kanit">
                Download My Resume
              </button>
            </a>

            <a href="#profile" className="flex w-[235px]">
              <button className="btn-view font-kanit">View My Profile</button>
            </a>
          </div>

          <div className="flex justify-center my-10 md:justify-start md:mx-5">
            <p className="text-neutral-400">🖱 Scroll down ↓</p>
          </div>
        </div>

        {/* Profile picture lg */}
        <div>
          <img
            src={myPhoto}
            alt="my-profile-picture"
            className="hidden lg:flex lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

