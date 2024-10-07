// My Personal Info component.

// Icons
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ManIcon from "@mui/icons-material/Man";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function PersonalInfo() {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-2xl">
            A developer with experience in Japanese language.
          </p>
        </div>
        <div>
          <p className="font-opensans text-slate-500">
            I am always ready to learn new things and adapt easily.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-12">
        <div className="flex flex-col gap-5">
          <div className="flex">
            <PermIdentityIcon />
            <p> Panat Charoenchokdilok</p>
          </div>

          <div className="flex">
            <ManIcon />
            <p> Male, Thai</p>
          </div>

          <div className="flex">
            <LocalPhoneIcon />
            <p> (+66)98-287-5561</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <CalendarTodayIcon />
            <time> Born on 13 July, 1993</time>
          </div>

          <div className="flex">
            <HomeIcon />
            <p> Saphansung, Bangkok 10240, Thailand</p>
          </div>

          <div className="flex">
            <MailOutlineIcon />
            <p> admiral.dancho@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="border-b-2 border-orange-400">
          <p className="text-2xl text-orange-400 font-kanit">Language Skill</p>
        </div>
        <p className="font-opensans mt-3">Thai, English, Japanese</p>
      </div>
    </div>
  );
}

export default PersonalInfo;

