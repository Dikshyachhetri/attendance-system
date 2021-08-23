import React from "react";
import { useTable, useSortBy } from "react-table";
import "./bootstrap.min.css";
import "../css/listview.scss"
function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable(
            {
                columns,
                data,
            },
            useSortBy
        );
    return (
        <>/
            <div>
                <table className="table" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render("Header")}
                                        {/* Add a sort direction indicator */}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? <img src="/images/down.svg"></img> : <img src="/images/up.svg"></img>) : <img src="/images/up-down.svg"></img>}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <br />
            </div>
        </>
    );
}
function SortingTableComponent() {
    const columns = React.useMemo(
        () => [
            {
                Header: "S.N ",
                accessor: "sn",
            },
            {
                Header: "Name ",
                accessor: "name",
            },
            {
                Header: "Department ",
                accessor: "department",
            },
            {
                Header: "Email ",
                accessor: "email",
            },
            {
                Header: "Status ",
                accessor: "status",
            },
            {
                Header: "Mobile Number ",
                accessor: "mobnumber",
            },
        ],
        []
    );
    const data = [
        {
            sn: 1,
            name: "Shankhar Shrestha",
            department: "UI/UX Design",
            email: "Shankar@gmail.com",
            status: "Active",
            mobnumber: 9841105578,
        },
        {
            sn: 2,
            name: "Shreejan Bista",
            department: "UI/UX Design",
            email: "Shreejan@gmail.com",
            status: "Active",
            mobnumber: 9841105578,
        },
        {
            sn: 3,
            name: "Dikshya BC",
            department: "Frontend Developer",
            email: "Dikshya@gmail.com",
            status: "Offline",
            mobnumber: 9841105578,
        },
        {
            sn: 4,
            name: "Simron Shrestha",
            department: "Frontend Developer",
            email: "Simron@gmail.com",
            status: "Offline",
            mobnumber: 9841105578,
        },
    ];
    console.log(JSON.stringify(data));
    return <Table columns={columns} data={data} />;
}
export default SortingTableComponent;