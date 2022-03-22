import React, { Fragment } from "react";
import {EducationComponentProp} from "./types";

const EducationHistory:React.FC<EducationComponentProp> = (
	{
		setTab,
		educationLevel,
		setEducationLevel,
		nameOfSchool,
		setNameOfSchool,
		yearOfCompletion,
		setYearOfCompletion,
	}
) => {

	const handleGoToNext = (e: React.FormEvent<HTMLFormElement>) => {
		setTab("experience")
	}

	return (
		<Fragment>
			<form
				onSubmit={handleGoToNext}
				className="divide-y divide-gray-200 lg:col-span-9"
			>
				<div className="py-6 px-4 sm:p-6 lg:pb-8">
					<div className="mt-0 grid grid-cols-12 gap-6">
						<div className="col-span-12 sm:col-span-6">
							<label
								htmlFor="company"
								className="block text-sm font-medium text-gray-700"
							>
								What is your highest level of education?
							</label>
							<select
								id="location"
								name="location"
								value={educationLevel}
								required={true}
								onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
									setEducationLevel(e.target.value)
								}
								className="mt-1.5 block w-full pl-3 pr-10 py-2 text-xs border-none bg-gray-100 focus:outline-none focus:ring-white focus:border-white sm:text-sm rounded-none"
							>
								<option value={""}>Please Choose</option>
								<option value={"PRIMARY"}>Primary</option>
								<option value={"MIDDLE"}>Junior High</option>
								<option value={"SECONDARY"}>Senior High</option>
								<option value={"TERTIARY"}>Tertiary</option>
							</select>
						</div>
						<div className="col-span-12 sm:col-span-6" />
						<div className="col-span-12 sm:col-span-12">
							<label
								htmlFor="url"
								className="block text-sm font-medium text-gray-700"
							>
								Name of School Attended
							</label>
							<input
								type="text"
								name="url"
								id="url"
								required
								placeholder={"Eg. Achimota School"}
								value={nameOfSchool}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setNameOfSchool(e.target.value)
								}
								className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
							/>
						</div>
						<div className="col-span-12 sm:col-span-6">
							<label
								htmlFor="url"
								className="block text-sm font-medium text-gray-700"
							>
								Year of Completion
							</label>
							<input
								type="text"
								name="url"
								id="url"
								required
								placeholder={"Eg. 2016"}
								value={yearOfCompletion}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setYearOfCompletion(e.target.value)
								}
								className="mt-1.5 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm"
							/>
						</div>
					</div>
				</div>
				<div className="pt-6 divide-y divide-gray-200">
					<div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
						<button
							onClick={() => setTab("personal")}
							type="button"
							className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
						>
							Back
						</button>
						<button
							type="submit"
							className="ml-5 bg-gold-1 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gold-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
						>
							Next
						</button>
					</div>
				</div>
			</form>
		</Fragment>
	)
}

export default EducationHistory;