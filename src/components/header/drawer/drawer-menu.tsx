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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FaHome, FaServicestack } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { ImPriceTags } from "react-icons/im";
import { SiPhoton } from "react-icons/si";
import { Link } from "react-router-dom";
import flame from "../../../images/Flame.png";
import sdgastext from "../../../images/SDGasText.png";

const DrawerMenu = (): React.JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => handleDrawerOpen(false)}
    >
      <div
        style={{
          padding: "25px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div>
          <img src={flame} alt="Logo" style={{ height: 44 }} />
        </div>
        <div style={{ paddingTop: "10px" }}>
          <img src={sdgastext} alt="Logo" style={{ height: 30 }} />
        </div>
      </div>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FaHome size={25} />
            </ListItemIcon>
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "GrayText" }}
            >
              <span>HOME</span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FaServicestack size={25} />
            </ListItemIcon>
            <Link
              to="/service"
              style={{ textDecoration: "none", color: "GrayText" }}
            >
              <span>SERVICE</span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AiFillSafetyCertificate size={25} />
            </ListItemIcon>
            <Link
              to="/certificates"
              style={{ textDecoration: "none", color: "GrayText" }}
            >
              <span>CERTIFICATES</span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RiCalendarScheduleFill size={25} />
            </ListItemIcon>
            <Link
              to="/schedule"
              style={{ textDecoration: "none", color: "GrayText" }}
            >
              <span>SCHEDULE</span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ImPriceTags size={25} />
            </ListItemIcon>
            <Link
              to="/Price"
              style={{ textDecoration: "none", color: "GrayText" }}
            >
              <span>PRICE</span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SiPhoton size={25} />
            </ListItemIcon>
            <Link
              to="/gallery"
              style={{ textDecoration: "none", color: "GrayText" }}
            >
              <span>GALLERY</span>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
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
    </>
  );
};

export default DrawerMenu;
