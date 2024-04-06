import React from "react";
import style from "./style.module.css";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const MainMenu = (): React.JSX.Element => {
  const [open, setOpen] = React.useState(false);

  function _onMainMenuEvent(obj: string | undefined) {
    console.log("Rise event ... ", obj);
  }
  const handleDrawerOpen = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => handleDrawerOpen(false)}
    >
      <List>
        {["HOME", "SERVICE", "CERTIFICATES", "SCHEDULE"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["PRICE", "GALLERY"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <nav className={style.navbar}>
          <ul className={style.navbar__menu}>
            <li className={style.navbar__item}>
              <a
                href="#"
                className={style.navbar__link}
                onClick={() => _onMainMenuEvent("Home")}
              >
                <i data-feather="home"></i>
                <span>Home</span>
              </a>
            </li>
            <li className={style.navbar__item}>
              <a
                href="#"
                className={style.navbar__link}
                onClick={() => _onMainMenuEvent("Service")}
              >
                <i data-feather="service"></i>
                <span>Service</span>
              </a>
            </li>
            <li className={style.navbar__item}>
              <a
                href="#"
                className={style.navbar__link}
                onClick={() => _onMainMenuEvent("Certificates")}
              >
                <i data-feather="certificates"></i>
                <span>Certificates</span>
              </a>
            </li>
            <li className={style.navbar__item}>
              <a
                href="#"
                className={style.navbar__link}
                onClick={() => _onMainMenuEvent("Schedule")}
              >
                <i data-feather="schedule"></i>
                <span>Schedule</span>
              </a>
            </li>
            <li className={style.navbar__item}>
              <a
                href="#"
                className={style.navbar__link}
                onClick={() => _onMainMenuEvent("Price")}
              >
                <i data-feather="price"></i>
                <span>Price</span>
              </a>
            </li>

            <li className={style.navbar__item}>
              <a
                href="#"
                className={style.navbar__link}
                onClick={() => _onMainMenuEvent("Gallery")}
              >
                <i data-feather="gallery"></i>
                <span>Gallery</span>
              </a>
            </li>
          </ul>
        </nav>

        <nav className={style.navbar_drawer}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap component="div">
            Main menu
          </Typography>
        </nav>
        <Drawer open={open} onClose={() => handleDrawerOpen(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </div>
  );
};

export default MainMenu;
