import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CatalogItem } from '../../types';

type CatalogState = {
  catalog: CatalogItem[];
  loading: boolean;
  error: string | null;
};

const initialState: CatalogState = {
  catalog: [],
  loading: false,
  error: null,
};

export const fetchCatalog = createAsyncThunk<CatalogItem[], undefined, { rejectValue: string }>(
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
  reducers: {},
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

export const catalogReducer =  catalogSlice.reducer;
