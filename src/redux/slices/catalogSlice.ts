import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ItemProps } from '../../types';

type CatalogState = {
  catalog: ItemProps[];
  loading: boolean;
  error: string | null;
  filter: string;
  sortBy: string;
};

const initialState: CatalogState = {
  catalog: [],
  loading: false,
  error: null,
  filter: 'All',
  sortBy: 'popular',
};

export const fetchCatalog = createAsyncThunk<ItemProps[], undefined, { rejectValue: string }>(
  'catalog/fetchCatalog',
  async (_, { rejectWithValue }) => {
      const response = await fetch('http://localhost:3000/data.json');

      if (!response.ok) rejectWithValue("Something somewhere went terribly wrong... Check server");

      const data = await response.json();
      return data.catalog;
  }
)

const catalogSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>){
      state.filter = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>){
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchCatalog.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: null,
        catalog: action.payload,
      }))
  }
});

export const { setFilter, setSortBy } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
