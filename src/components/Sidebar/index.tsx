import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Typography,
    styled,
    useTheme
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem } from '../../types';
import { menuItems } from './menuItems';
import { RootState } from '../../store';
import logo from '../../assets/images/logo.svg';

const DRAWER_WIDTH = 280;

interface StyledDrawerProps {
    open: boolean;
    isMobile: boolean;
}

const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile',
})<StyledDrawerProps>(({ theme, open, isMobile }) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH,
        boxSizing: 'border-box',
        backgroundColor: theme.palette.sidebar.background,
        color: theme.palette.sidebar.text,
        borderLeft: 'none',
        borderRight: `1px solid ${theme.palette.sidebar.border}`,
        right: isMobile ? (open ? 0 : -DRAWER_WIDTH) : 0,
        left: 'auto',
        transition: theme.transitions.create('right', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.sidebar.menuBackground,
    borderBottom: `1px solid ${theme.palette.sidebar.border}`,
    '& img': {
        height: 40,
        width: 'auto'
    }
}));

const StyledMenuBox = styled(Box)(({ theme }) => ({
    overflowY: 'auto',
    overflowX: 'hidden',
    height: 'calc(100% - 64px)',
    '&::-webkit-scrollbar': {
        width: '6px'
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.sidebar.border,
        borderRadius: '3px'
    }
}));

const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'level'
})<{ isActive?: boolean; level?: number }>(({ theme, isActive, level = 0 }) => ({
    padding: theme.spacing(1, 2),
    paddingRight: theme.spacing(2 + level * 2),
    color: isActive ? theme.palette.sidebar.activeText : theme.palette.sidebar.text,
    backgroundColor: isActive ? theme.palette.sidebar.activeBackground : 'transparent',
    borderRadius: '8px',
    margin: '2px 8px',
    '&:hover': {
        backgroundColor: theme.palette.sidebar.hoverBackground,
        color: theme.palette.sidebar.activeText,
        '& .MuiListItemIcon-root': {
            color: theme.palette.sidebar.activeIconColor
        }
    },
    '& .MuiListItemIcon-root': {
        color: isActive ? theme.palette.sidebar.activeIconColor : theme.palette.sidebar.iconColor,
        minWidth: 40,
        transition: 'color 0.2s ease-in-out'
    },
    '& .menu-arrow': {
        transform: 'rotate(0deg)',
        transition: 'transform 0.3s ease-in-out'
    },
    '& .menu-arrow.rotated': {
        transform: 'rotate(-180deg)'
    },
    transition: theme.transitions.create(
        ['background-color', 'color', 'padding-right', 'margin'],
        { duration: theme.transitions.duration.shorter }
    )
}));

interface MenuItemComponentProps {
    item: MenuItem;
    level: number;
    openMenus: Set<string>;
    setOpenMenus: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ 
    item, 
    level, 
    openMenus, 
    setOpenMenus 
}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const isActive = location.pathname === item.path;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenus.has(item.id);

    const handleClick = () => {
        if (hasChildren) {
            setOpenMenus(prev => {
                const newOpenMenus = new Set(prev);
                if (level === 0) {
                    menuItems.forEach(menuItem => {
                        if (menuItem.id !== item.id) {
                            newOpenMenus.delete(menuItem.id);
                            // Safely check for children before mapping
                            if (menuItem.children) {
                                menuItem.children.forEach(child => {
                                    newOpenMenus.delete(child.id);
                                });
                            }
                        }
                    });
                }
                
                if (isOpen) {
                    newOpenMenus.delete(item.id);
                    // Safely check for children before mapping
                    if (item.children) {
                        item.children.forEach(child => {
                            newOpenMenus.delete(child.id);
                        });
                    }
                } else {
                    newOpenMenus.add(item.id);
                }
                return newOpenMenus;
            });
        } else if (item.path) {
            navigate(item.path);
        }
    };

    return (
        <>
            <ListItem disablePadding>
                <StyledListItemButton
                    onClick={handleClick}
                    isActive={isActive}
                    level={level}
                >
                    {item.icon && (
                        <ListItemIcon>
                            {React.createElement(item.icon)}
                        </ListItemIcon>
                    )}
                    <ListItemText
                        primary={
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: isActive ? 600 : 400,
                                    color: isActive 
                                        ? theme.palette.sidebar.activeText 
                                        : theme.palette.sidebar.text
                                }}
                            >
                                {item.title}
                            </Typography>
                        }
                    />
                    {hasChildren && (
                        <KeyboardArrowDownIcon 
                            className={`menu-arrow ${isOpen ? 'rotated' : ''}`}
                            sx={{ fontSize: 20 }}
                        />
                    )}
                </StyledListItemButton>
            </ListItem>
            {hasChildren && item.children && ( // Added safety check for item.children
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.children.map((child) => (
                            <MenuItemComponent
                                key={child.id}
                                item={child}
                                level={level + 1}
                                openMenus={openMenus}
                                setOpenMenus={setOpenMenus}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

const Sidebar: React.FC = () => {
    const location = useLocation();
    const { sidebarOpen: open, isMobile } = useSelector((state: RootState) => state.ui);
    const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (isMobile) {
            setOpenMenus(new Set());
        }
        
        const findAndOpenParentMenu = () => {
            for (const item of menuItems) {
                if (item.children) {
                    for (const child of item.children) {
                        if (child.path === location.pathname) {
                            setOpenMenus(new Set([item.id]));
                            return;
                        }
                    }
                }
            }
        };
        
        findAndOpenParentMenu();
    }, [location.pathname, isMobile]);

    const variant = isMobile ? 'temporary' : 'permanent';

    return (
        <StyledDrawer 
            variant={variant}
            open={open}
            isMobile={isMobile}
            ModalProps={{
                keepMounted: true
            }}
        >
            <LogoWrapper>
                <img src={logo} alt="حسابفا" />
            </LogoWrapper>
            <StyledMenuBox>
                <List>
                    {menuItems.map((item) => (
                        <MenuItemComponent
                            key={item.id}
                            item={item}
                            level={0}
                            openMenus={openMenus}
                            setOpenMenus={setOpenMenus}
                        />
                    ))}
                </List>
            </StyledMenuBox>
        </StyledDrawer>
    );
};

export default Sidebar;