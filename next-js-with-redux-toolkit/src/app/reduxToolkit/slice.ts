import { createSlice, nanoid } from "@reduxjs/toolkit";
interface Employee {
  id: string;
  name: string;
}

interface EmployeeState {
  employee: Employee[];
}
const startingState: EmployeeState = {
  employee: [],
};

const Slice = createSlice({
  initialState: startingState,
  name: "employee",
  reducers: {
    addEmployee: (state, action) => {
      const data: Employee = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.employee.push(data);
    },
  },
});

export const { addEmployee } = Slice.actions;
export default Slice.reducer;
