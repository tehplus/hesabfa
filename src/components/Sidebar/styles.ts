import { styled } from '@mui/material/styles';
import { Box, Drawer, ListItemButton } from '@mui/material';

export const DRAWER_WIDTH = 280;

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  position: 'fixed',
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.sidebar.background,
    borderRight: 'none',
    boxShadow: theme.palette.sidebar.boxShadow,
    overflowX: 'hidden',
  },
}));

export const StyledLogoBox = styled(Box)(({ theme }) => ({
  height: 70,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.sidebar.menuBackground,
  borderBottom: `1px solid ${theme.palette.sidebar.border}`,
  '& img': {
    height: 35,
  },
}));

export const StyledMenuBox = styled(Box)(({ theme }) => ({
  height: 'calc(100vh - 70px)',
  padding: theme.spacing(2, 1),
  overflowY: 'auto',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.sidebar.border,
    borderRadius: '3px',
  },
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'level',
})<{ isActive?: boolean; level?: number }>(({ theme, isActive, level = 0 }) => ({
  borderRadius: '8px',
  marginBottom: '4px',
  padding: theme.spacing(1, 2),
  paddingRight: theme.spacing(2 + level * 2),
  color: isActive ? theme.palette.sidebar.activeText : theme.palette.sidebar.text,
  backgroundColor: isActive ? theme.palette.sidebar.activeBackground : 'transparent',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',

  '&::before': isActive ? {
    content: '""',
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '4px',
    height: '20px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 4px 4px 0',
  } : {},

  '&:hover': {
    backgroundColor: isActive ? theme.palette.sidebar.activeBackground : theme.palette.sidebar.hoverBackground,
    color: isActive ? theme.palette.sidebar.activeText : theme.palette.primary.light,
    '& .MuiListItemIcon-root': {
      color: isActive ? theme.palette.sidebar.activeIconColor : theme.palette.primary.light,
    },
  },

  '& .MuiListItemIcon-root': {
    color: isActive ? theme.palette.sidebar.activeIconColor : theme.palette.sidebar.iconColor,
    minWidth: '40px',
    transition: 'color 0.2s ease-in-out',
  },

  '& .MuiListItemText-primary': {
    fontSize: '0.875rem',
    fontWeight: isActive ? 500 : 400,
  },

  '& .menu-expand-icon': {
    transition: 'transform 0.2s ease-in-out',
  },

  '&.menu-expanded .menu-expand-icon': {
    transform: 'rotate(180deg)',
  },
}));

export const StyledSubMenuBox = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  transition: 'height 0.3s ease-in-out',
  background: theme.palette.sidebar.subMenuBackground,
  borderRadius: '8px',
  margin: theme.spacing(0.5, 0),
}));