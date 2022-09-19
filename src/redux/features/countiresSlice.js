import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  countries: [],
  error: '',
  search: '',
  filteredCountries: [],
  region: '',
  filteredRegion: [],
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  () => {
    return axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => response.data);
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  reducers: {
    search: (state, action) => {
      state.search = action.payload;
      state.filteredCountries = state.countries.filter((country) =>
        country.name.common.toLowerCase().includes(state.search.toLowerCase())
      );
    },
    regionFilter: (state, action) => {
      state.region = action.payload;
      state.filteredRegion = state.countries.filter(
        (country) => country.region === state.region
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
      state.error = '';
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false;
      state.countries = [];
      state.error = action.error.message;
    });
  },
});

export default countriesSlice.reducer;
export const { search, regionFilter } = countriesSlice.actions;
