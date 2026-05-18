import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI, registerUserAPI, verifyOtpAPI } from "@/services/authService";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await registerUserAPI(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
export const loginUser = createAsyncThunk(
    "auth/login",
    async (email, thunkAPI) => {
      try {
        return await loginUserAPI(email);
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || error.message
        );
      }
    }
  );
  export const verifyOtp = createAsyncThunk('auth/verifyOtp', async ({ email, otp }, thunkAPI) => {
    try {
      return await verifyOtpAPI({ email, otp });
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Invalid OTP');
    }
  });

const initialState = {
  user:
    typeof window !== "undefined"
      ?JSON.parse(localStorage.getItem("userInfo"))
      : null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
    updateUser: (state,action) => {
        console.log("action",action)
        state.user = {
            ...state.user,
            ...action.payload,
          };
        // state.user = null;
        localStorage.setItem("userInfo", JSON.stringify({
            ...state.user,
            ...action.payload,
          }));
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        // localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        // localStorage.setItem("userInfo", JSON.stringify(action.payload.data));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        localStorage.setItem("userInfo", JSON.stringify(action.payload.data));
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout,updateUser } = authSlice.actions;
export default authSlice.reducer;