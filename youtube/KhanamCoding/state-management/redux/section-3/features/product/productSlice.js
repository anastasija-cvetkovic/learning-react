const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  products: [],
  error: false,
};

const fetchProducts = createAsyncThunk("product/fetchProducts", () => {});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});
