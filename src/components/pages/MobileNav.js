import { List } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "70%",
    borderRadius: 15,

    backgroundColor: "rgba(122, 111, 92, 0.2)",
    backdropFilter: "blur(10px)",
  },

  navItemsSelectedDark: {
    color: "#e65100",
    "&.active": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "& .MuiListItemIcon-root": {
      color: "#e65100",
    },
    "&:hover": {
      color: "white",
    },
  },
}));

const MobileProfile = ({
  executeScroll,
  aboutRef,
  bioRef,
  portfolioRef,
  contactRef,
  open,
  handleOpenMenu,
  isMobile,
}) => {
  const classes = useStyles();
  const location = useLocation();

  const menuItems = [
    {
      text: "About Me",
      icon: <InfoIcon />,
      color: "secondary",
      path: "/",
      ref: aboutRef,
    },
    {
      text: "Resume",
      icon: <SchoolIcon />,
      color: "secondary",
      path: "/resume",
      ref: bioRef,
    },
    {
      text: "Projects",
      icon: <BusinessCenterIcon />,
      color: "secondary",
      path: "/portfolio",
      ref: portfolioRef,
    },
    {
      text: "Contact",
      icon: <BusinessCenterIcon />,
      color: "secondary",
      path: "/ContactMe",
      ref: contactRef,
    },
  ];
  return (
    <>
      <Drawer
        variant="temporary"
        anchor="right"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        open={open}
        onClose={handleOpenMenu}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              onClick={() => {
                handleOpenMenu();
                setTimeout(() => {
                  executeScroll(item.ref);
                }, 10);
              }}
              button
              component={NavLink}
              to={item.path}
              // onClick={handleOpenMenu}
              key={item.text}
              selected={item.path === location.pathname}
              classes={{ selected: classes.navItemsSelectedDark }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                <Typography style={{ fontWeight: 700 }}>{item.text}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default MobileProfile;
