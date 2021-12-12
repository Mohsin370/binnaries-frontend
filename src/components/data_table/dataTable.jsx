import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component-with-filter";

const columns = [
  {
    name: "Actions",
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
    filterable: true,
  },
  {
    name: "Company Name",
    selector: "companyName",
    sortable: true,
    filterable: true,
  },
  {
    name: "Location",
    selector: "location",
    sortable: true,
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Created at",
    selector: "createdAt",
    sortable: true,
  },
  {
    name: "Updated At",
    selector: "createdAt",
    sortable: true,
  },
];

const Add = (onAdd)=>{
  return(
    <Button onClick={onAdd}>Add</Button>
  )
}
const ReactDataTable = (props) => (
  <DataTable
    title={props.title}
    columns={columns}
    data={props.data}
    pagination
    actions={props.actions.add && Add(props.onAdd)}
  />
);

export default ReactDataTable;
