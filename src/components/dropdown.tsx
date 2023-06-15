import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "../styles/dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../store/store";

interface Props {
	placeHolder: string;
	exercises: any;
}

export default function GenericDropdown({ placeHolder, exercises }: Props) {
	const [flattenedExercises, setFlattenedExercises] = useState<any[]>([]);

	useEffect(() => {
		const flattenedArray: any[] = [];

		for (let i = 0; i < exercises.length; i++) {
			const categoryObject = {
				name: Object.keys(exercises[i])[0].toUpperCase(),
				muscleGroup: "Biceps",
				sets: "12-10-8",
				disabled: true,
			};

			flattenedArray.push(categoryObject);

			const exerciseArray = Object.values(exercises[i])[0] as any[];
			for (let index = 0; index < exerciseArray.length; index++) {
				const element = exerciseArray[index];
				const exerciseObject = {
					name: element.name,
					muscleGroup: element.muscleGroup,
					sets: element.sets,
					disabled: false,
				};

				flattenedArray.push(exerciseObject);
			}
		}

		setFlattenedExercises(flattenedArray);
	}, [exercises]);

	const dispatch = useDispatch();
	const selectedExercises = useSelector(
		(state: any) => state.exerciseReducer.data
	);
	const handleSelectChange = (value: any) => {
		console.log("I'm in handleSelectChange");
		dispatch(addExercise(value));
	};

	const customItemTemplate = (option: any) => {
		if (option.disabled) {
			// Category styling
			return (
				<div className="category-option">
					<strong>{option.name}</strong>
				</div>
			);
		} else {
			// Exercise styling
			return <div>{option.name}</div>;
		}
	};

	return (
		<div
			className="card flex justify-content-center align-items-center gap-4"
			style={{
				marginLeft: "20vw",
				margin: "15px 15px",
				display: "inline-Block",
			}}>
			<Dropdown
				value={selectedExercises}
				onChange={(e) => handleSelectChange(e.value)}
				options={flattenedExercises}
				optionLabel="name"
				placeholder={placeHolder}
				filter
				optionDisabled={(option: any) =>
					option.disabled ||
					selectedExercises.find((e: any) => e.name === option.name)
				}
				className="w-full m-4"
				style={{ width: "150px" }}
				itemTemplate={customItemTemplate}
			/>
		</div>
	);
}

//First code without disable peak and width
/*import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "../styles/dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../store/store";

interface Props {
	placeHolder: string;
	exercises: any;
}

export default function GenericDropdown({ placeHolder, exercises }: Props) {
	const [flattenedExercises, setFlattenedExercises] = useState<any[]>([]);

	useEffect(() => {
		const flattenedArray: any[] = [];

		for (let i = 0; i < exercises.length; i++) {
			const categoryObject = {
				name: Object.keys(exercises[i])[0],
				muscleGroup: "Biceps",
				sets: "12-10-8",
				disabled: true,
			};

			flattenedArray.push(categoryObject);

			const exerciseArray = Object.values(exercises[i])[0] as any[];
			for (let index = 0; index < exerciseArray.length; index++) {
				const element = exerciseArray[index];
				const exerciseObject = {
					name: element.name,
					muscleGroup: element.muscleGroup,
					sets: element.sets,
					disabled: false,
				};

				flattenedArray.push(exerciseObject);
			}
		}

		setFlattenedExercises(flattenedArray);
	}, [exercises]);

	const dispatch = useDispatch();
	const selectedExercises = useSelector(
		(state: any) => state.exerciseReducer.data
	);
	const handleSelectChange = (value: any) => {
		console.log("I'm in handleSelectChange");
		dispatch(addExercise(value));
	};

	return (
		<div
			className="card flex justify-content-center align-items-center gap-4"
			style={{
				marginLeft: "20vw",
				margin: "15px 15px",
				display: "inline-Block",
			}}>
			<Dropdown
				value={selectedExercises}
				onChange={(e) => handleSelectChange(e.value)}
				options={flattenedExercises}
				optionLabel="name"
				placeholder={placeHolder}
				filter
				optionDisabled={(option: any) =>
					selectedExercises.find((e: any) => e.name === option.name)
				}
				className="w-full m-4"
				style={{ width: "150px" }}
			/>
		</div>
	);
}
*/

// disable peak and width
/*import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "../styles/dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../store/store";

interface Props {
	placeHolder: string;
	exercises: any;
}

export default function GenericDropdown({ placeHolder, exercises }: Props) {
	const [flattenedExercises, setFlattenedExercises] = useState<any[]>([]);

	useEffect(() => {
		const flattenedArray: any[] = [];

		for (let i = 0; i < exercises.length; i++) {
			const categoryObject = {
				name: Object.keys(exercises[i])[0],
				muscleGroup: "Biceps",
				sets: "12-10-8",
				disabled: true,
			};

			flattenedArray.push(categoryObject);

			const exerciseArray = Object.values(exercises[i])[0] as any[];
			for (let index = 0; index < exerciseArray.length; index++) {
				const element = exerciseArray[index];
				const exerciseObject = {
					name: element.name,
					muscleGroup: element.muscleGroup,
					sets: element.sets,
					disabled: element.name === "Peak" || element.name === "Width",
				};

				flattenedArray.push(exerciseObject);
			}
		}

		setFlattenedExercises(flattenedArray);
	}, [exercises]);

	const dispatch = useDispatch();
	const selectedExercises = useSelector(
		(state: any) => state.exerciseReducer.data
	);
	const handleSelectChange = (value: any) => {
		console.log("I'm in handleSelectChange");
		dispatch(addExercise(value));
	};

	return (
		<div
			className="card flex justify-content-center align-items-center gap-4"
			style={{
				marginLeft: "20vw",
				margin: "15px 15px",
				display: "inline-Block",
			}}>
			<Dropdown
				value={selectedExercises}
				onChange={(e) => handleSelectChange(e.value)}
				options={flattenedExercises}
				optionLabel="name"
				placeholder={placeHolder}
				filter
				optionDisabled={(option: any) =>
					option.disabled ||
					selectedExercises.find((e: any) => e.name === option.name)
				}
				className="w-full m-4"
				style={{ width: "150px" }}
			/>
		</div>
	);
}
*/
