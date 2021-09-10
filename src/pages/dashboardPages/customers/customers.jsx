import React from 'react';
import DashboardHOC from '../dashboardHOC';
import ReactDataTable from '../../../components/data_table/dataTable'

function Customers() {
    return (
        <div>
            customers
            <ReactDataTable></ReactDataTable>
        </div>
    )
}


export default DashboardHOC(Customers);