import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { useSelector } from 'react-redux';
// .......... 

import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListIcon from '@mui/icons-material/List';
// .......... 

const TeacherSideBar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const sclassName = currentUser.teachSclass

    const location = useLocation();
    return (
        <>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon color={location.pathname === ("/" || "/Teacher/dashboard") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={Link} to="/Teacher/class">
                    <ListItemIcon>
                        <ClassOutlinedIcon color={location.pathname.startsWith("/Teacher/class") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary={`Class ${sclassName.sclassName}`} />
                </ListItemButton>
                {/* <ListItemButton component={Link} to="/Teacher/complain">
                    <ListItemIcon>
                        <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Teacher/complain") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Complain" />
                </ListItemButton> */}

                {/* ........................ */}

                {/* for adding company  */}
                <ListItemButton component={Link} to="/Teacher/company">
                    <ListItemIcon>
                        <StoreIcon color={location.pathname.startsWith("/Teacher/company") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="AddCompany" />
                </ListItemButton>

                {/* to show company list  */}
                <ListItemButton component={Link} to="/Teacher/company/List">
                    <ListItemIcon>
                        <ListIcon color={location.pathname.startsWith("/Teacher/company/List") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="CompanyList" />
                </ListItemButton>

                {/* to show student List  */}
                <ListItemButton component={Link} to="/Teacher/student/List">
                    <ListItemIcon>
                        <PersonIcon color={location.pathname.startsWith("/Teacher/student/List") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Applied Student" />
                </ListItemButton>

                {/* <ListItemButton component={Link} to="/Teacher/notice">
                    <ListItemIcon>
                        <NotificationsIcon color={location.pathname.startsWith("/Teacher/notice") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Notice" />
                </ListItemButton> */}
                {/* ........................ */}

            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>
                <ListItemButton component={Link} to="/Teacher/profile">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Teacher/profile") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton component={Link} to="/logout">
                    <ListItemIcon>
                        <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </>
    )
}

export default TeacherSideBar