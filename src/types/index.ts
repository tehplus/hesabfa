import { SvgIconComponent } from '@mui/icons-material';

// User Types
export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export interface User {
    id: number;
    username: string;
    fullName: string;
    email: string;
    role: UserRole;
    avatar?: string;
}

// UI Types
export interface MenuItem {
    id: string;
    title: string;
    path?: string;
    icon?: SvgIconComponent;
    children?: MenuItem[];
}

// Theme Types
export interface ThemeMode {
    darkMode: boolean;
}

// Layout Types
export interface LayoutState {
    sidebarOpen: boolean;
    isMobile: boolean;
}

// Store Types
export interface RootState {
    ui: {
        sidebarOpen: boolean;
        darkMode: boolean;
        isMobile: boolean;
    };
}

// Sidebar Types
export interface SidebarProps {
    open: boolean;
    onClose?: () => void;
}

// Header Types
export interface HeaderProps {
    onSidebarOpen?: () => void;
}