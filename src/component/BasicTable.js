import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';

import './table.css';
import { date } from './date';

const BasicTable = ({ schedule, tableHeader }) => {
	const [COLUMNS, setCOLUMNS] = useState([
		{
			Header: `${tableHeader}`,
			columns: [
				{
					Header: 'Ramadan',
					accessor: 'id',
				},
				{
					Header: 'Date',
					accessor: 'date',
				},
				{
					Header: 'Day',
					accessor: 'day',
				},
				{
					Header: 'Sahri',
					accessor: 'sahri_time',
				},
				{
					Header: 'Fajar',
					accessor: 'fajar_suru',
				},
				{
					Header: 'Iftar',
					accessor: 'iftar_time',
				},
			],
		},
	]);
	// console.log(date);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => schedule, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	});

	return (
		<table {...getTableProps()}>
			<thead className="xyz">
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr
							{...row.getRowProps()}
							className={row.allCells[1].value == date ? 'active' : 'none'}
						>
							{/* {console.log(row.allCells[1].value)} */}
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default BasicTable;
