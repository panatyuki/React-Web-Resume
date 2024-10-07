// Education timeline.
// Render in MyTabs component.

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

// Icons
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ComputerIcon from "@mui/icons-material/Computer";

function EducationTimeline() {
  return (
    <div className="">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
            className="dark:text-white"
          >
            Nov 2023 - Mar 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              - Full-Stack Software Development -
            </Typography>
            <Typography>TechUp (Thailand)</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
            className="dark:text-white"
          >
            Aug 2017 - Sep 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <AutoStoriesIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              - Master of Arts -
            </Typography>
            <Typography>Japanese Communication and Culture</Typography>
            <Typography>
              (National Institute of Development Administration)
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
            className="dark:text-white"
          >
            Apr 2011 - Apr 2015
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <AutoStoriesIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              - Bachelor of Business Administration -
            </Typography>
            <Typography>Japanese Business Administration</Typography>
            <Typography>(Thai-Nichi Institute of Technology)</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default EducationTimeline;

