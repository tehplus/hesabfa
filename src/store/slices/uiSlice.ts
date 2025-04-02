import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutState } from '../../types';

const initialState: LayoutState = {
    sidebarOpen: window.innerWidth >= 1200,
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
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
            // Close sidebar on mobile by default
            if (action.payload) {
                state.sidebarOpen = false;
            }
        }
    }
});

export const { toggleSidebar, setSidebarOpen, setIsMobile } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;