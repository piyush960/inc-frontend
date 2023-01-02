import axios from "axios";
import React from "react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

function AdminData() {
  const [data, setData] = useState([]);

  const getData = async (data) => {
    try {
      const res = await axios.get("https://restcountries.com/v2/all");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Flag",
      selector: (row) => (
        <img src={row.flag} alt="" className="w-16 h-16 object-cover" />
      ),
    },
  ];

  return (
    <div className="" >
      <DataTable columns={columns} data={data} pagination fixedHeader fixedHeaderScrollHeight="400px" highlightOnHover title="Student Data" />
    </div>
  );
}

export default AdminData;
