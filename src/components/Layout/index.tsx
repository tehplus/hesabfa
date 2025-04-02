import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, useMediaQuery, useTheme, styled } from '@mui/material';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { RootState } from '../../store';
import { setIsMobile, setSidebarOpen } from '../../store/slices/uiSlice';

const DRAWER_WIDTH = 280;

const LayoutRoot = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    direction: 'rtl'
});

const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%'
});

const MainWrapper = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isMobile'
})<{
    open?: boolean;
    isMobile?: boolean;
}>(({ theme, open, isMobile }) => ({
    flexGrow: 1,
    paddingTop: 64,
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    transition: theme.transitions.create(['margin', 'padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isMobile
        ? {
            marginRight: 0,
            transition: theme.transitions.create(['margin', 'padding'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
        : {
            marginRight: open ? DRAWER_WIDTH : 0,
            transition: theme.transitions.create(['margin', 'padding'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
}));

const BackdropOverlay = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bgcolor: 'rgba(0, 0, 0, 0.5)',
    zIndex: theme.zIndex.drawer - 1,
    display: 'none',
    '&.visible': {
        display: 'block'
    }
}));

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isMobileDevice = useMediaQuery(theme.breakpoints.down('lg'));
    const { sidebarOpen, isMobile } = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        dispatch(setIsMobile(isMobileDevice));
    }, [isMobileDevice, dispatch]);

    const handleBackdropClick = () => {
        if (isMobile) {
            dispatch(setSidebarOpen(false));
        }
    };

    return (
        <LayoutRoot>
            <LayoutContainer>
                <Header />
                <Sidebar />
                {isMobile && (
                    <BackdropOverlay
                        className={sidebarOpen ? 'visible' : ''}
                        onClick={handleBackdropClick}
                    />
                )}
                <MainWrapper open={sidebarOpen} isMobile={isMobile}>
                    {children}
                </MainWrapper>
            </LayoutContainer>
        </LayoutRoot>
    );
};

export default Layout;