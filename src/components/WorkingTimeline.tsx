// Working timeline component.
// Render in MyTabs component.

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import { useMediaQuery } from "@mui/material";

// Icons
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import TranslateIcon from "@mui/icons-material/Translate";
import BusinessIcon from "@mui/icons-material/Business";

function WorkingTimeline() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      <Timeline position={isSmallScreen ? "right" : "alternate"}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align={isSmallScreen ? "left" : "right"}
            variant="body2"
            color="text.secondary"
            className="dark:text-white"
          >
            May 2023 - Oct 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" variant="outlined">
              <CastForEducationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              - Japanese Teacher -
            </Typography>
            <Typography>(Triamudomsuksanomklao School)</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align={isSmallScreen ? "left" : "right"}
            variant="body2"
            color="text.secondary"
            className="dark:text-white"
          >
            Apr 2015 - Jul 2015
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" variant="outlined">
              <BusinessIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              - Marketing Officer -
            </Typography>
            <Typography>(Colliers International Thailand)</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align={isSmallScreen ? "left" : "right"}
            variant="body2"
            color="text.secondary"
            className="dark:text-white"
          >
            2013 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <TranslateIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              - Japanese Tutor -
            </Typography>
            <Typography>(Freelance)</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
            className="dark:text-white"
          >
            2013 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <TranslateIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              - Japanese Interpreter and Translator -
            </Typography>
            <Typography>(Freelance)</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default WorkingTimeline;

