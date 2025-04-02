import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Tooltip,
    Typography,
    styled
} from '@mui/material';
import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Settings as SettingsIcon,
    PersonOutline as PersonOutlineIcon,
    ExitToApp as ExitToAppIcon,
    DarkMode as DarkModeIcon,
    LightMode as LightModeIcon
} from '@mui/icons-material';
import { toggleSidebar } from '../../store/slices/uiSlice';
import { RootState } from '../../store';
import type { User } from '../../types';

const HEADER_HEIGHT = 64;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    right: 0,
    width: `calc(100% - ${280}px)`,
    zIndex: theme.zIndex.drawer + 1,
}));

const StyledToolbar = styled(Toolbar)({
    minHeight: HEADER_HEIGHT,
    paddingLeft: 24,
    paddingRight: 24,
});

const HeaderIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.text.secondary,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
    width: 40,
    height: 40,
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
}));

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [notificationsAnchor, setNotificationsAnchor] = useState<null | HTMLElement>(null);

    // TODO: Get these from Redux store once auth is implemented
    const user: User = {
        id: 1,
        username: 'admin',
        fullName: 'مدیر سیستم',
        email: 'admin@example.com',
        role: 'ADMIN'
    };

    const isDarkMode = useSelector((state: RootState) => state.ui.darkMode);
    const notificationCount = 5; // TODO: Get from notifications state

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
        setNotificationsAnchor(event.currentTarget);
    };

    const handleCloseNotifications = () => {
        setNotificationsAnchor(null);
    };

    const handleLogout = () => {
        handleCloseUserMenu();
        // TODO: Implement logout logic
        navigate('/login');
    };

    const handleProfileClick = () => {
        handleCloseUserMenu();
        navigate('/profile');
    };

    const handleSettingsClick = () => {
        handleCloseUserMenu();
        navigate('/settings');
    };

    return (
        <StyledAppBar position="fixed">
            <StyledToolbar>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: '100%' }}
                >
                    <HeaderIconButton
                        edge="start"
                        color="inherit"
                        onClick={() => dispatch(toggleSidebar())}
                    >
                        <MenuIcon />
                    </HeaderIconButton>

                    {/* Spacer */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Right side icons */}
                    <Stack direction="row" spacing={1} alignItems="center">
                        <HeaderIconButton onClick={() => {}}>
                            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                        </HeaderIconButton>

                        <Tooltip title="اعلان‌ها">
                            <HeaderIconButton onClick={handleOpenNotifications}>
                                <Badge badgeContent={notificationCount} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </HeaderIconButton>
                        </Tooltip>

                        <Box sx={{ ml: 2 }}>
                            <Tooltip title="تنظیمات کاربری">
                                <Box display="flex" alignItems="center" onClick={handleOpenUserMenu} sx={{ cursor: 'pointer' }}>
                                    <UserAvatar alt={user.fullName}>
                                        {user.fullName.charAt(0)}
                                    </UserAvatar>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            mr: 1,
                                            display: { xs: 'none', sm: 'block' }
                                        }}
                                    >
                                        {user.fullName}
                                    </Typography>
                                </Box>
                            </Tooltip>
                        </Box>
                    </Stack>
                </Stack>
            </StyledToolbar>

            {/* User Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseUserMenu}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleProfileClick}>
                    <PersonOutlineIcon sx={{ ml: 1 }} />
                    پروفایل
                </MenuItem>
                <MenuItem onClick={handleSettingsClick}>
                    <SettingsIcon sx={{ ml: 1 }} />
                    تنظیمات
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon sx={{ ml: 1 }} />
                    خروج
                </MenuItem>
            </Menu>

            {/* Notifications Menu */}
            <Menu
                anchorEl={notificationsAnchor}
                open={Boolean(notificationsAnchor)}
                onClose={handleCloseNotifications}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <Box sx={{ width: 320, maxHeight: 400, overflow: 'auto', p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        اعلان‌ها
                    </Typography>
                    {/* TODO: Add actual notifications */}
                    <Typography variant="body2" color="text.secondary">
                        اعلان جدیدی وجود ندارد
                    </Typography>
                </Box>
            </Menu>
        </StyledAppBar>
    );
};

export default Header;