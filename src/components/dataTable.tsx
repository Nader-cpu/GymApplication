import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import {
	removeExercise,
	removeAllExercises,
	addExercise,
} from "../store/store";

function GenericTable() {
	const dispatch = useDispatch();
	const selectedExercises = useSelector(
		(state: any) => state.exerciseReducer.data
	);

	const actionTemplate = (rowData: any) => {
		const icon = "pi pi-trash";

		const handleDelete = () => {
			console.log("Exercise to delete ", rowData);
			dispatch(removeExercise(rowData));
		};

		return (
			<Button
				type="button"
				style={{ fontSize: "2rem", color: "red" }}
				icon={icon}
				className="p-button-sm p-button-text p-button-danger"
				onClick={handleDelete}
			/>
		);
	};

	const handleDeleteAll = () => {
		console.log("Deleting all exercises");
		dispatch(removeAllExercises());
	};

	const cols = [
		{ field: "name", header: "Name" },
		{ field: "muscleGroup", header: "MuscleGroup" },
		{ field: "sets", header: "Sets" },
	];

	const exportColumns = cols.map((col) => ({
		title: col.header,
		dataKey: col.field,
	}));

	const exportPdf = () => {
		import("jspdf").then((jsPDF: any) => {
			import("jspdf-autotable").then(() => {
				const doc = new jsPDF.default("p", "pt", "letter");

				// Set background color
				doc.setFillColor(255, 255, 255); // Replace with the desired background color
				doc.rect(
					0,
					0,
					doc.internal.pageSize.getWidth(),
					doc.internal.pageSize.getHeight(),
					"F"
				);

				const tableConfig = {
					styles: {
						font: "helvetica",
						fontSize: 16,
						cellPadding: 10,
						fillColor: [255, 255, 255], // White background color for the table
						textColor: [33, 33, 33], // Dark gray text color
						boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
						rowHeight: 50, // Increase the row height as desired
					},
					headerStyles: {
						fillColor: [52, 73, 94], // Dark blue background color for the header
						textColor: [255, 255, 255], // White text color for the header
					},
					alternateRowStyles: {
						fillColor: [223, 230, 238], // Light blue background color for alternating rows
					},
					footerStyles: {
						lineWidth: { border: 8 },
					},
				};

				doc.autoTable(exportColumns, selectedExercises, tableConfig);
				doc.save("exercises.pdf");
			});
		});
	};
	const header = (
		<div className="flex align-items-center justify-content-end">
			<Button
				type="button"
				icon="pi pi-trash"
				severity="danger"
				onClick={handleDeleteAll}
				data-pr-tooltip="Delete All"
			/>
			<span style={{ marginRight: "16px" }}></span> {/* Add a spacer */}
			<Button
				type="button"
				icon="pi pi-file-pdf"
				style={{ backgroundColor: "#4169e1" }}
				onClick={exportPdf}
				data-pr-tooltip="PDF"
			/>
		</div>
	);

	return (
		<div className="card">
			<DataTable
				value={selectedExercises}
				showGridlines
				tableStyle={{
					margin: "auto",
					width: "75vw",
					marginTop: "50px",
				}}>
				<Column field="name" header="Name"></Column>
				<Column field="muscleGroup" header="MuscleGroup"></Column>
				<Column field="sets" header="Sets"></Column>
				<Column
					header={header}
					style={{ flex: "0 0 4rem" }}
					body={actionTemplate}></Column>
			</DataTable>
		</div>
	);
}

export default GenericTable;
/*const exportPdf = () => {
		import("jspdf").then((jsPDF: any) => {
			import("jspdf-autotable").then(() => {
				const doc = new jsPDF.default("p", "pt", "letter");

				// Set background color
				doc.setFillColor(255, 255, 255); // Replace with the desired background color
				doc.rect(
					0,
					0,
					doc.internal.pageSize.getWidth(),
					doc.internal.pageSize.getHeight(),
					"F"
				);

				const tableConfig = {
					styles: {
						font: "helvetica",
						fontSize: 16,
						cellPadding: 10,
						fillColor: [240, 240, 240], // Replace with the desired table background color
						textColor: [164, 29, 29], // Replace with the desired table text color
						boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
						rowHeight: 50, // Increase the row height as desired
					},
					headerStyles: {
						fillColor: [127, 29, 29], // Replace with the desired header background color
						textColor: [255, 255, 255], // Replace with the desired header text color
					},
					alternateRowStyles: {
						fillColor: [220, 220, 220], // Replace with the desired alternating row background color
					},
					footerStyles: {
						lineWidth: { border: 8 },
					},
				};

				doc.autoTable(exportColumns, selectedExercises, tableConfig);
				doc.save("exercises.pdf");
			});
		});
	};
	*/

// const header = (
// 	<div className="flex align-items-center justify-content-end">
// 		<div className="flex gap-2">
// 			<Button
// 				type="button"
// 				icon="pi pi-file-pdf"
// 				severity="danger"
// 				onClick={exportPdf}
// 				data-pr-tooltip="PDF"
// 			/>
// 			<div style={{ height: "16px" }} /> {/* Add vertical space */}
// 			<Button
// 				type="button"
// 				icon="pi pi-trash"
// 				severity="danger"
// 				onClick={handleDeleteAll}
// 				data-pr-tooltip="Delete All"
// 			/>
// 		</div>
// 	</div>
// );
