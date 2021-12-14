import {
  Box,
  CardHeader,
  Container,
  Grid,
  Typography,
  Zoom,
  Button,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
//import { useMediaQuery } from "@material-ui/core";
import GitHub from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import React, { useEffect, useState } from "react";
import { personalInfo } from "../../../assets/data/personalInfo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Chip } from "@mui/material";
const useStyles = makeStyles({
  root: {
    // height: "100vh",
    justifyContent: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
  },

  cardRoot: {
    width: 300,
    minHeight: 200,
    margin: "20px",
  },
  cardActionBtn: {
    display: "flex",
    justifyContent: "space-between",
  },

  media: {
    height: 250,
    "&:hover": {
      transition: "all 0.5s ease-in-out",
      transform: "scale3d(1.1, 1.1, 0.3)",
    },
  },

  titleHeader: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 700,
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const Portfolio = () => {
  const [despState, setDespState] = useState(personalInfo.projects);
  useEffect(() => {}, [despState]);
  const handleStateChange = (incoming) => {
    let new_array = despState.map((element) =>
      element.id === incoming
        ? { ...element, isOpen: !element.isOpen }
        : element
    );
    setDespState(new_array);
  };

  const classes = useStyles();
  return (
    <>
      <Zoom in timeout={{ enter: 500, exit: 500 }}>
        <Container p={20}>
          {" "}
          <Grid container className={classes.root}>
            <Typography variant="h4" className={classes.titleHeader}>
              Projects
            </Typography>{" "}
            <Box className={classes.cardContainer}>
              {personalInfo.projects.map((project) => (
                <div>
                  <Card
                    className={classes.cardRoot}
                    elevation={3}
                    key={project.title}
                  >
                    <CardHeader title={project.title} />
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={project.image}
                        title={project.title}
                      />
                    </CardActionArea>
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Button
                        style={{
                          maxWidth: "60px",
                          maxHeight: "15px",
                          minWidth: "30px",
                          minHeight: "15px",
                          display: despState[project.id].isOpen
                            ? "none"
                            : "flex",
                        }}
                        size="small"
                        variant="contained"
                        rounded="true"
                        color="secondary"
                        onClick={() => handleStateChange(project.id)}
                      >
                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                      </Button>
                      <Button
                        style={{
                          maxWidth: "60px",
                          maxHeight: "15px",
                          minWidth: "30px",
                          minHeight: "15px",
                          display: despState[project.id].isOpen
                            ? "flex"
                            : "none",
                        }}
                        size="small"
                        variant="contained"
                        rounded="true"
                        color="secondary"
                        onClick={() => handleStateChange(project.id)}
                      >
                        <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                      </Button>
                    </Grid>{" "}
                    <Grid
                      component={Box}
                      display={despState[project.id].isOpen ? "block" : "none"}
                    >
                      <Paper elevation={3}>
                        <Typography style={{ margin: "10px" }}>
                          {" "}
                          {project.description}
                        </Typography>
                      </Paper>
                      {personalInfo.skills.codingSkills.map((skill) => (
                        <Box key={skill.id} className={classes.items}>
                          <Paper>
                            <Typography
                              variant="h6"
                              style={{ marginLeft: "10px" }}
                            >
                              {" "}
                              Tech Stack
                            </Typography>
                            {project.toolsUsed.map((lang) => (
                              <Chip
                                key={Math.random()}
                                label={lang}
                                variant="outlined"
                                // color="secondary"
                                style={{ margin: "5px", color: "#F18865" }}
                                classes={{ root: classes.chip }}
                              />
                            ))}
                          </Paper>
                        </Box>
                      ))}
                    </Grid>
                    <CardActions className={classes.cardActionBtn}>
                      <IconButton
                        size="small"
                        color="primary"
                        href={project.url}
                        target="_blank"
                      >
                        <OpenInNewIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        href={project.githubUrl}
                        target="_blank"
                      >
                        <GitHub />
                      </IconButton>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </Box>
          </Grid>
        </Container>
      </Zoom>
    </>
  );
};

export default Portfolio;
