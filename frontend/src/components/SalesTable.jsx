import { DataGrid } from "@mui/x-data-grid";

function SalesTable({ rows }) {
  const columns = [
    { field: "status", headerName: "Status", width: 120 },
    { field: "item", headerName: "Item", width: 120 },
    {
        field: "perks",
        headerName: "Perks",
        width: 150,
        renderCell: (params) => (
          <div style={{ whiteSpace: "pre-wrap" }}>
            {params.value.slice().sort().join("\n")}
          </div>
        ),
        sortable: true,
      }
      
    { field: "price", headerName: "Price", width: 120 },
    { field: "datePosted", headerName: "Date Posted", width: 120 },
    { field: "dateSold", headerName: "Date Sold", width: 120 },
  ];
  return (
    <>
      <div
        style={{
          height: 500,
          width: "100%",
        }}
      >
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
    </>
  );
}

export default SalesTable;
