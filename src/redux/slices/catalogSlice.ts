import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogItem } from '../../types';

type CatalogState = {
  catalog: CatalogItem[];
};

const initialState: CatalogState = {
  catalog: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalog(state, action: PayloadAction<CatalogItem[]>) {
      state.catalog = action.payload;
    }
  }
});

export const { setCatalog } = catalogSlice.actions;
export const catalogReducer =  catalogSlice.reducer;
