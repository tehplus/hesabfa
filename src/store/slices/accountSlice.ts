import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Account } from '../../types';

interface AccountState {
    items: Account[];
    selectedAccount: Account | null;
    loading: boolean;
    error: string | null;
}

const initialState: AccountState = {
    items: [],
    selectedAccount: null,
    loading: false,
    error: null
};

export const fetchAccounts = createAsyncThunk(
    'accounts/fetchAccounts',
    async () => {
        // TODO: Implement API call
        const response = await fetch('/api/accounts');
        const data = await response.json();
        return data;
    }
);

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setSelectedAccount: (state, action) => {
            state.selectedAccount = action.payload;
        },
        clearAccountError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccounts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAccounts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchAccounts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'خطا در دریافت اطلاعات';
            });
    }
});

export const { setSelectedAccount, clearAccountError } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;