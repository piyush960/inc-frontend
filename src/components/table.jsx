import DataTable from 'react-data-table-component';

function Table({ data, columns, title }) {

  return (
    <DataTable columns={columns} data={data} pagination fixedHeader fixedHeaderScrollHeight='400px' highlightOnHover title={title} />
  );
}

export default Table;