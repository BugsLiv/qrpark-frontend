import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVehicleAPI } from "@/services/vehicleServices";

export const fetchVehicles = createAsyncThunk(
  "vehicles",
  async (data, thunkAPI) => {
    try {
      return await fetchVehicleAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


const initialState = {
  vehicles: null,
  loading: false,
  error: null,
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       localStorage.removeItem("userInfo");
//     },
//   },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
        // localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { logout } = vehicleSlice.actions;
export default vehicleSlice.reducer;