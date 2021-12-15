import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component-with-filter";

const ReactDataTable = (props) => {
  const columns = [
    {
      name: "Actions",
      cell: (row) => ActionButtons(row),
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
  const Add = (onAdd) => {
    return <Button onClick={onAdd}>Add</Button>;
  };

  const ActionButtons = (row) => {
    return (
      <div className="d-flex">
        {props.actions.edit && <Button className="mr-2" onClick={props.onEdit}>Edit</Button>}
        {props.actions.delete &&<Button onClick={()=>props.onDelete(row)}>Delete</Button>}
      </div>
    );
  };

  return (
    <DataTable
      title={props.title}
      columns={columns}
      data={props.data}
      pagination
      actions={props.actions.add && Add(props.onAdd)}
    />
  );
};

export default ReactDataTable;
