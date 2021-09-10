import React from 'react';
import DashboardHOC from '../dashboardHOC';
import DataTable, { createTheme } from 'react-data-table-component-with-filter';


const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' },
{ id: 2, title: 'Bonan the Barbarian', year: '1983' }];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
		filterable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: false,
  },
];

function Customers() {
    return (
        <div>
              <DataTable
                    title="Arnold Movies"
                    columns ={columns}
                    data ={data}
                    pagination
                />
        </div>
    )
}


export default DashboardHOC(Customers);