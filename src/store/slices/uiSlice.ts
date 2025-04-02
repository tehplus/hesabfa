import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from '../../types';

const initialState: UIState = {
    sidebarOpen: window.innerWidth >= 1200,
    darkMode: false,
    isMobile: window.innerWidth < 1200
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.sidebarOpen = action.payload;
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
            if (action.payload) {
                state.sidebarOpen = false;
            }
        }
    }
});

export const {
    toggleSidebar,
    setSidebarOpen,
    toggleDarkMode,
    setIsMobile
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;