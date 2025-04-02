import { SvgIconComponent } from '@mui/icons-material';

// User related types
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
    createdAt: string;
    updatedAt: string;
}

// UI related types
export interface MenuItem {
    id: string;
    title: string;
    path?: string;
    icon?: SvgIconComponent;
    children?: MenuItem[];
}

export interface UIState {
    sidebarOpen: boolean;
    darkMode: boolean;
    isMobile: boolean;
}

// Account related types
export enum AccountType {
    BANK = 'BANK',
    CASH = 'CASH',
    OTHER = 'OTHER'
}

export interface Account {
    id: number;
    name: string;
    type: AccountType;
    balance: number;
    accountNumber?: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}