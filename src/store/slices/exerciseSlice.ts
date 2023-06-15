import { createSlice } from "@reduxjs/toolkit";
import { Exercise } from "../../data/interfaces/exercise";

interface ExerciseState {
	data: Exercise[];
}

const exerciseSlice = createSlice({
	name: "selectedExercises",
	initialState: {
		data: [
			{
				name: "Reverse Curl",
				muscleGroup: "Biceps",
				sets: "12-10-8",
			},
			{
				name: "Wide-Grip Curl",
				muscleGroup: "Biceps",
				sets: "10-10-10-10",
			},
			{
				name: "Conventional Barbell Curl",
				muscleGroup: "Biceps",
				sets: "12-10-8",
			},
			{
				name: "Dumbbell Curl",
				muscleGroup: "Biceps",
				sets: "12-10-8",
			},
		],
	} as ExerciseState,
	reducers: {
		addExercise: (state, action) => {
			return {
				...state,
				data: [...state.data, action.payload],
			};
		},
		removeExercise: (state, action) => {
			return {
				...state,
				data: state.data.filter(
					(exercise: Exercise) => exercise.name !== action.payload.name
				),
			};
		},
		removeAllExercises: (state) => {
			return {
				...state,
				data: [],
			};
		},
	},
});

export const { addExercise, removeExercise, removeAllExercises } =
	exerciseSlice.actions;

export const exerciseReducer = exerciseSlice.reducer;
