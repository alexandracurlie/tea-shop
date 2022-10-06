import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CatalogItem } from '../../types';
import { filterItems, sortItems } from '../../helpers/helpers';

type CatalogState = {
  catalog: CatalogItem[];
  loading: boolean;
  error: string | null;
};

type Params = {
  filter: string,
  sortBy: string,
}

const initialState: CatalogState = {
  catalog: [],
  loading: false,
  error: null,
};

export const fetchCatalog = createAsyncThunk<CatalogItem[], Params, { rejectValue: string }>(
  'catalog/fetchCatalog',
  async (params, { rejectWithValue }) => {
      const response = await fetch('http://localhost:3000/data.json');

      if (!response.ok) rejectWithValue("Something somewhere went terribly wrong... Check server");

      const data = await response.json();
      return filterItems(sortItems(data.catalog, params.sortBy), params.filter);
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
