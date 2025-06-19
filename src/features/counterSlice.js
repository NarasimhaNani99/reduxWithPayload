import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0, err: "" },

    reducers: {
        increment: (state) => {
            state.count++;
        },

        decrement: (state) => {
            state.count--;
        },

        customIncrease: (state, action) => {
            const { num, operation } = action.payload;
            console.log("working", num, operation, action);

            switch (operation) {
                case "Add":
                    state.count += num;
                    break;
                case "Sub":
                    state.count -= num;
                    break;
                default:
                    state.err = "Invalid operation";
                    break;
            }
        },
    }
});

export const { increment, decrement, customIncrease } = counterSlice.actions;
export default counterSlice.reducer;
