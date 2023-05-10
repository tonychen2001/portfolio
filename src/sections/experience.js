import React from "react";
import { Box, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

const workExperience = [
  {
    id: 0,
    company: "Amazon Web Services",
    companyLink: "https://aws.amazon.com/rds/",
    position: "Software Dev Engineer Intern",
    date: "May 2022 - August 2022",
    description: [
      "Led a project to automate software vulnerability scans eliminating four hours of manual work per release",
      "Architected solutions to perform vulnerability scans as part of the internal CI/CD release pipeline",
      "Designed the pass/fail criteria to determine if a release should be blocked due to security vulnerabilities",
      "Communicated with stakeholders to seamlessly handoff the project for future development",
    ],
  },
  {
    id: 1,
    company: "SequoiaDB",
    companyLink: "https://www.sequoiadb.com/en/",
    position: "Software Developer Intern",
    date: "January 2021 - September 2021",
    description: [
      "Developed a batch job service to manage Apache Spark batch jobs",
      "Conducted performance analysis of a data warehouse tech stack",
      "Implemented data corruption detection for a data warehouse platform by utilizing checksum files",
      "Maintained a database performance monitoring tool used in production by over 50 major financial institutions",
    ],
  },
];

function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",
        pt: "55px",
        mb: "5.0em",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: "1.0em",
        }}
      >
        Work Experience
      </Typography>
      <VerticalTimeline lineColor={"#1DB954"}>
        {workExperience.map((job) => {
          let descKey = 0;
          return (
            <VerticalTimelineElement
              key={job.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#000000",
                borderTop: "5px solid #1DB954",
              }}
              contentArrowStyle={{
                borderRight: "12px solid #fff",
              }}
              date={job.date}
              iconStyle={{
                background: "#1DB954",
                color: "#ffffff",
              }}
              icon={<WorkIcon />}
              style={{
                textAlign: "left",
              }}
            >
              <Typography
                variant="h3"
                component="a"
                href={job.companyLink}
                target="_blank"
                color="secondary"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                }}
              >
                {job.company}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
              >
                {job.position}
              </Typography>
              <Box
                sx={{
                  textAlign: "left",
                }}
              >
                <ul
                  style={{
                    paddingLeft: "1.0em",
                  }}
                >
                  {job.description.map((point) => {
                    return (
                      <li
                        key={descKey++}
                        style={{
                          textAlign: "left",
                          lineHeight: "1.3",
                        }}
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Box>
  );
}

export default Experience;
