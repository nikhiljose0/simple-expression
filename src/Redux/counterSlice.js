import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
    name: "expression",
    initialState: {
        expression: "",
        result: null,
    },
    reducers: {
        updateExpression(state, action) {
            state.expression = action.payload;
        },
        evaluateExpression(state) {
            try {
                state.result = eval(state.expression);
            } catch (error) {
                state.result = "Invalid expression";
            }
        },
        resetExpression(state) {
            state.expression = "";
            state.result = null;
        },
    },
});

export default calculateSlice.reducer;
export const { updateExpression, evaluateExpression, resetExpression } = calculateSlice.actions;