import React from 'react';
import { useState } from 'react';
import './app.css';

const ClientSalary = () => {
	const [totalSalary, setTotalSalary] = useState(0);
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const tax = 25;
	const [selectedClient, setSelectedClient] = useState('period');
	const [hideTable, setHideTable] = useState(true);
	let [netoSalaryM, setNetoSalaryM] = useState();
	let [totalSalaryM, setTotalSalaryM] = useState();
	let [taxValueM, setTaxValueM] = useState();
	let [netoSalaryY, setNetoSalaryY] = useState();
	let [totalSalaryY, setTotalSalaryY] = useState();
	let [taxValueY, setTaxValueY] = useState();
	let [netoSalaryW, setNetoSalaryW] = useState();
	let [totalSalaryW, setTotalSalaryW] = useState();
	let [taxValueW, setTaxValueW] = useState();
	let nameisSet;
	let surnameisSet;
	let salaryIsSet;
	let periodIsSet;

	const HandleSelectChange = (event) => {
		setSelectedClient(event.target.value);
	};
	const Calculation = () => {
		if (typeof name === 'string' && name.length === 0) {
			window.alert('Please fill out the name');
			nameisSet = 1;
		} else {
			nameisSet = 0;
		}

		if (typeof surname === 'string' && surname.length === 0) {
			window.alert('Please fill out the surname');
			surnameisSet = 1;
		} else {
			surnameisSet = 0;
		}

		if (totalSalary == 0) {
			window.alert('Salary is not entered');
			salaryIsSet = 1;
		} else salaryIsSet = 0;

		if (selectedClient === 'period') {
			periodIsSet = 1;
			window.alert('Period is not selected');
		} else {
			periodIsSet = 0;
		}

		if (
			nameisSet === 1 ||
			surnameisSet === 1 ||
			salaryIsSet === 1 ||
			periodIsSet === 1
		) {
			setHideTable(true);
		} else {
			setHideTable(false);
		}

		if (selectedClient === 'monthly') {
			totalSalaryM = totalSalary;
			netoSalaryM = totalSalaryM - (totalSalaryM * tax) / 100;
			taxValueM = totalSalaryM - netoSalaryM;

			totalSalaryY = totalSalaryM * 12;
			netoSalaryY = netoSalaryM * 12;
			taxValueY = totalSalaryY - netoSalaryY;

			totalSalaryW = totalSalaryM / 4;
			netoSalaryW = netoSalaryM / 4;
			taxValueW = totalSalaryW - netoSalaryW;
		} else if (selectedClient === 'weekly') {
			totalSalaryW = totalSalary;
			netoSalaryW = totalSalaryW - (totalSalaryW * tax) / 100;
			taxValueW = totalSalaryW - netoSalaryW;

			totalSalaryM = totalSalaryW * 4;
			netoSalaryM = netoSalaryW * 4;
			taxValueM = totalSalaryM - netoSalaryM;

			totalSalaryY = totalSalaryW * 4 * 12;
			netoSalaryY = netoSalaryW * 4 * 12;
			taxValueY = totalSalaryY - netoSalaryY;
		} else if (selectedClient === 'yearly') {
			totalSalaryY = totalSalary;
			netoSalaryY = totalSalaryY - (totalSalaryY * tax) / 100;
			taxValueY = totalSalaryY - netoSalaryY;

			totalSalaryM = totalSalaryY / 12;
			netoSalaryM = netoSalaryY / 12;
			taxValueM = totalSalaryM - netoSalaryM;

			totalSalaryW = totalSalaryY / 12 / 4;
			netoSalaryW = netoSalaryY / 12 / 4;
			taxValueW = totalSalaryW - netoSalaryW;
		}

		setNetoSalaryM(netoSalaryM);
		setTotalSalaryM(totalSalaryM);
		setTaxValueM(taxValueM);

		setNetoSalaryY(netoSalaryY);
		setTotalSalaryY(totalSalaryY);
		setTaxValueY(taxValueY);

		setNetoSalaryW(netoSalaryW);
		setTotalSalaryW(totalSalaryW);
		setTaxValueW(taxValueW);
	};

	return (
		<div
			className=" h-screen bg-gradient-to-b
		from-gray-100 to-gray-500 font-medium pt-5 pl-5 "
		>
			<h2 className="pl-20 italic font-bold text-xl">Income Calculator</h2>

			<div className="flex flex-col space-y-4 pt-6 ">
				<form>
					<div className="w-80">
						<label className="">
							Enter your name:
							<input
								type="text"
								className="bg-gray-300 border border-indigo-600 border-gray-400  w-80"
								onChange={(event) => {
									setName(event.target.value);
								}}
							/>
						</label>
					</div>
					<div className="w-80">
						<label>
							Enter your surname:
							<input
								type="text"
								className="bg-gray-300 border border-indigo-600 border-gray-400  w-80"
								onChange={(event) => {
									setSurname(event.target.value);
								}}
							/>
						</label>
					</div>
					<div className="w-40">
						<label>
							Enter total income:
							<input
								type="number"
								className="bg-gray-300 border border-indigo-600 border-gray-400"
								min={0}
								onChange={(event) => {
									setTotalSalary(event.target.value);
								}}
							/>
							<select
								className="bg-gray-100 border border-indigo-600 border-gray-400  mt-3"
								onChange={HandleSelectChange}
							>
								<option value="period">Period</option>
								<option value="weekly">Weekly</option>
								<option value="monthly">Monthly</option>
								<option value="yearly">Yearly</option>
							</select>
						</label>
					</div>
					<div className="px-10 mt-2 pt-4 ">
						<button
							className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
							type="button"
							onClick={Calculation}
						>
							Submit
						</button>
					</div>
				</form>
			</div>

			<div className={`${hideTable ? 'invisible' : 'visible'}`}>
				<h2 className="italic font-bold text-lg pt-4">Client name:</h2>
				<div className="flex space-x-4">
					<h1>{name}</h1>
					<h1>{surname}</h1>
				</div>

				<div className="pt-4">
					<table>
						<thead>
							<tr>
								<th className="p-2 border-b text-left border-black">Period</th>
								<th className="p-2 border-b text-left border-black">
									Gross Income
								</th>
								<th className="p-2 border-b text-left border-black">Tax</th>
								<th className="p-2 border-b text-left border-black">
									Net Income
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="p-2 border-b text-left border-black">Weekly</td>
								<td className="p-2 border-b text-left border-black">
									{totalSalaryW} RSD
								</td>
								<td className="p-2 border-b text-left border-black">
									{taxValueW} RSD
								</td>
								<td className="p-2 border-b text-left border-black">
									{netoSalaryW} RSD
								</td>
							</tr>
							<tr>
								<td className="p-2 border-b text-left border-black">Monthy</td>
								<td className="p-2 border-b text-left border-black">
									{totalSalaryM} RSD
								</td>
								<td className="p-2 border-b text-left border-black">
									{taxValueM} RSD
								</td>
								<td className="p-2 border-b text-left border-black">
									{netoSalaryM} RSD
								</td>
							</tr>
							<tr>
								<td className="p-2 border-b text-left border-black"> Yearly</td>
								<td className="p-2 border-b text-left border-black">
									{totalSalaryY} RSD
								</td>
								<td className="p-2 border-b text-left border-black">
									{taxValueY} RSD
								</td>
								<td className="p-2 border-b text-left border-black">
									{netoSalaryY} RSD
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ClientSalary;
