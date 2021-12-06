import {
  Box,
  CssBaseline,
  makeStyles,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useRef, useState } from "react";

import NavBar from "./components/pages/NavBar";
//import PageNotFound from "./components/pages/PageNotFound";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import MobileProfile from "./components/pages/MobileNav";
import AboutMe from "./components/pages/Profile/AboutMe";
import Resume from "./components/pages/Resume/Resume";
import DarkModeSwitch from "./components/UI/DarkModeSwitch";
import MenuBtn from "./components/UI/MenuBtn";
//import Footer from "./components/pages/Footer";
import ContactMe from "./components/ContactMe";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    height: "100%",
  },
  rootPages: {
    height: "100vh",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },
  switchBtn: {
    position: "fixed",
    right: "10px",
    zIndex: 900,
  },
  switchBtnMobile: {
    position: "fixed",
    zIndex: 900,
  },
}));

const App = () => {
  const aboutRef = useRef(null);
  const bioRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const executeScroll = (data) =>
    data.current.scrollIntoView({ behavior: "smooth" });
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkmode] = useState(true);

  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand, sans-serif",
    },
    scrollBehavior: "smooth",
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        light: "#ff833a",
        main: "#e65100",
        dark: "#ac1900",
        contrastText: "#000",
      },

      secondary: {
        light: "#ffbb93",
        main: "#ff8a65",
        dark: "#c75b39",
        contrastText: "#000",
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();
  const handleOpenMenu = (e) => {
    setOpen(!open);
  };

  function visibilityFunction(caller) {
    history.push(caller);
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Grid container>
          {!isMobile ? (
            <NavBar
              aboutRef={aboutRef}
              bioRef={bioRef}
              portfolioRef={portfolioRef}
              contactRef={contactRef}
              executeScroll={executeScroll}
              isMobile={isMobile}
            />
          ) : (
            <MobileProfile
              open={open}
              handleOpenMenu={handleOpenMenu}
              isMobile={isMobile}
              aboutRef={aboutRef}
              bioRef={bioRef}
              portfolioRef={portfolioRef}
              contactRef={contactRef}
              executeScroll={executeScroll}
            />
          )}

          <Grid item className={classes.rootPages} xs>
            <Box
              className={
                !isMobile ? classes.switchBtn : classes.switchBtnMobile
              }
            >
              <DarkModeSwitch
                isMobile={isMobile}
                setDarkmode={setDarkmode}
                darkMode={darkMode}
              />
            </Box>{" "}
            <div ref={aboutRef}>
              <ReactVisibilitySensor
                onChange={(visibility) => {
                  visibility && visibilityFunction("/");
                }}
              >
                <AboutMe
                  visibilityFunction={visibilityFunction}
                  isMobile={isMobile}
                />
              </ReactVisibilitySensor>{" "}
            </div>
            <div style={{ marginTop: "100px" }} ref={bioRef}>
              <ReactVisibilitySensor
                onChange={(visibility) => {
                  visibility && visibilityFunction("/resume");
                }}
              >
                <Resume />
              </ReactVisibilitySensor>{" "}
            </div>
            <div style={{ marginTop: "100px" }} ref={portfolioRef}>
              <ReactVisibilitySensor
                onChange={(visibility) => {
                  visibility && visibilityFunction("/portfolio");
                }}
              >
                <Portfolio />
              </ReactVisibilitySensor>{" "}
            </div>
            <div
              style={{ marginTop: "100px", marginBottom: "30px" }}
              ref={contactRef}
            >
              {" "}
              <ReactVisibilitySensor
                onChange={(visibility) => {
                  visibility && visibilityFunction("/ContactMe");
                }}
              >
                <ContactMe></ContactMe>
              </ReactVisibilitySensor>{" "}
            </div>
            {/* <Footer></Footer> */}
          </Grid>
          <MenuBtn onClick={handleOpenMenu} isMobile={isMobile} open={open} />
        </Grid>
      </Paper>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
