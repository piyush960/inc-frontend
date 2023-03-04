import axios from "axios";
import React from "react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

function AdminData() {
  // const [data, setData] = useState([]);
  const [value,setValue]= useState([]);
  const [dummy,setDummy]= useState('');
  const [changes,setChanges] = useState([]);
  const getData = async (data) => {
    try {
      const res = await axios.get("https://restcountries.com/v2/all");
      res.data=res.data.map((val,indx)=>({ ...val, id:indx }))
      // setData(res.data);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const handleChange = (e, id,target) => {
    e.preventDefault();
    const temp=value;
    // console.log(e.target.value,target,"Row Id", id,temp[id][target]);
    temp[id][target]=e.target.value;
    // console.log(e.target.value,target,"Row Id", id,temp[id][target]);
    setValue(temp);
    let obj = changes.findIndex(o => o.id===id);
    if(obj===-1) {const temp=changes;temp.push({id,[target]:e.target.value});setChanges(temp)}
    else {const temp=changes;temp[obj]={...temp[obj],[target]:e.target.value};setChanges(temp)}
    // console.log(obj);
    // setData(temp);
    setDummy(e.target.value)
};
  const handleButtonClick=(e, id)=>{
    e.preventDefault();
    let obj = changes.findIndex(o => o.id===id);
    if(obj===-1) window.alert('No changes to Update');
    else{
      window.alert(`Value updated to ${changes[obj].name} ${changes[obj].nativeName} ${changes[obj].capital}`);
      console.log(changes[obj]);
    }
  }
  const columns = [
    {
      name: "Actions",
      button: true,
      input: true,
      cell: (row) => (
        <div>

          <button
              className="btn btn-outline btn-xs"
              onClick={(e) => {console.log(row);handleButtonClick(e, row.id)}}
          >
              Update
          </button>
          {/* <input
                      type="text"
                      style={{
                        width: '100%',
                        border: 'none',
                        fontSize: '1rem',
                        padding: 0,
                        margin: 0,
                      }}
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                    /> */}
        </div>
      ),
  },
  {
      name: "Country Name",
      selector: (row) => row.name,
      cell: (row) => (
        <div>
          <input
                      type="text"
                      style={{
                        width: '100%',
                        border: 'none',
                        fontSize: '1rem',
                        padding: 0,
                        margin: 0,
                      }}
                      value={row.name}
                      onChange={(event) => handleChange(event,row.id,'name')}
                      // disabled
                    />
        </div>
      ),
      sortable: true,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
      cell: (row) => (
        <div>
          <input
                      type="text"
                      style={{
                        width: '100%',
                        border: 'none',
                        fontSize: '1rem',
                        padding: 0,
                        margin: 0,
                      }}
                      value={row.capital}
                      onChange={(event) => handleChange(event,row.id,'capital')}
                    />
        </div>
      ),
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
      cell: (row) => (
        <div>
          <input
                      type="text"
                      style={{
                        width: '100%',
                        border: 'none',
                        fontSize: '1rem',
                        padding: 0,
                        margin: 0,
                      }}
                      value={row.nativeName}
                      onChange={(event) => handleChange(event,row.id,'nativeName')}
                    />
        </div>
      ),
    },
    {
      name: "Country Flag",
      selector: (row) => (
        <img src={row.flag} alt="" className="w-16 h-16 object-cover" />
      ),
    },
  ];

  return (
    <div>
    
    <div>
    {dummy}
      <DataTable columns={columns} data={value} pagination fixedHeader fixedHeaderScrollHeight="400px" highlightOnHover title="Student Data" />
      </div>
      {/* <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={(e) => {e.preventDefault();console.log('chages are: ',changes)}}
          >
              Update
          </button> */}
          
    </div>
  );
}

export default AdminData;
