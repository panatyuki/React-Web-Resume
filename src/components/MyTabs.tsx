// My tabs component.
// Render in My profile section.

// Components
import PersonalInfo from "./PersonalInfo";
import EducationTimeline from "./EducationTimeline";
import EducationTimelineSm from "./EducationTimelineSm";
import WorkingTimeline from "./WorkingTimeline";
import WorkingTimelineSm from "./WorkingTimelineSm";

// Tools
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function MyTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="dark:text-white">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab
                label="Personal Info"
                value="1"
                icon={<PersonIcon />}
                iconPosition="start"
                className="dark:text-gray-400"
              />
              <Tab
                label="Education"
                value="2"
                icon={<SchoolIcon />}
                iconPosition="start"
                className="dark:text-gray-400"
              />
              <Tab
                label="Working Experience"
                value="3"
                icon={<WorkIcon />}
                iconPosition="start"
                className="dark:text-gray-400"
              />
            </TabList>
          </Box>

          <TabPanel value="1">
            <PersonalInfo />
          </TabPanel>

          <TabPanel value="2">
            <div className="hidden md:block">
              <EducationTimeline />
            </div>
            <div className="md:hidden">
              <EducationTimelineSm />
            </div>
          </TabPanel>

          <TabPanel value="3">
            <div className="hidden md:block">
              <WorkingTimeline />
            </div>
            <div className="md:hidden">
              <WorkingTimelineSm />
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default MyTabs;

