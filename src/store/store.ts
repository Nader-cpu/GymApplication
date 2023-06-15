import { configureStore } from "@reduxjs/toolkit";
import {
	addExercise,
	exerciseReducer,
	removeExercise,
	removeAllExercises,
} from "./slices/exerciseSlice";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
const store: ToolkitStore = configureStore({ reducer: { exerciseReducer } });
export { store, addExercise, removeExercise, removeAllExercises };
