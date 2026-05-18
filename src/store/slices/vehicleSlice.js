import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMessagesAPI, fetchVehicleAPI } from "@/services/vehicleServices";

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
export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",

  async (data, thunkAPI) => {
    try {
      const response= await fetchMessagesAPI(data);
      return response;

    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message ||
          "Failed to fetch messages"
      );
    }
  }
);

const initialState = {
  vehicles: null,
  messages:null,
  loading: false,
  error: null,
  meta:{},
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
      })      
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload.data;
        state.meta = action.payload.meta;
        // localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { logout } = vehicleSlice.actions;
export default vehicleSlice.reducer;