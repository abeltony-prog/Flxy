import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseCard from "../baseCard/BaseCard";

const activities = [
  {
    case: "0437383",
    color: "success.main",
    text: "fhjds@microfocus.com",
  },
  {
    case: "0437383",
    color: "secondary.main",
    text: "fhjds@microfocus.com",
  },
  {
    case: "0437383",
    color: "primary.main",
    text: "fhjds@microfocus.com",
  },
  {
    case: "0437383",
    color: "warning.main",
    text: "fhjds@microfocus.com",
  },
  {
    case: "0437383",
    color: "error.main",
    text: "fhjds@microfocus.com",
  },
];

const ElevationStatus = () => {
  return (
    <BaseCard title="Elevation Status">
      <Timeline
        sx={{
          p: 0,
        }}
      >
        {activities.map((activity) => (
          <TimelineItem key={activity.case}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {activity.case}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: activity.color,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              color="text.secondary"
              sx={{
                fontSize: "14px",
              }}
            >
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </BaseCard>
  );
};

export default ElevationStatus;
