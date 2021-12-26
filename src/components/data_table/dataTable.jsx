import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component-with-filter";

const ReactDataTable = (props) => {

  const Add = (onAdd) => {
    return <Button onClick={onAdd}>Add</Button>;
  };



  return (
    <DataTable
      title={props.title}
      columns={props.columns}
      data={props.data}
      pagination
      actions={props.actions.add && Add(props.onAdd)}
    />
  );
};

export default ReactDataTable;
