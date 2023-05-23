import React,{useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch,useSelector} from "react-redux";
import {getAllUsers,deleteUser} from "../redux/actions/adminAction";
import {DELETE_USER_RESET} from "../redux/constants/adminConstant";
import{Link} from "react-router-dom";
import { Button } from '@mui/material'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { GridRowParams } from '@mui/x-data-grid'
import {useParams} from "react-router-dom";


function Userlist() {
  const {id} = useParams();
 
 const dispatch = useDispatch();
  const allUser = useSelector((state)=>state.allUser);
  const {loading,error,user} = allUser;

  const profile = useSelector((state)=>state.profile);
  const{error:deletedError,isDeleted} =profile;

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
    
  };
  
  
  
  const rows= [
    
  ];
  
  const columns= [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 150,
      flex: 0.3,
      
      // getCellClassName: (params) => {
      //   return params.role === true
      //     ? "greenColor"
      //     : "redColor";
      // },
      // valueGetter: (params) => {
      //   return params.getValue(params.id, "role") === true
      //     ? "greenColor"
      //     : "redColor";
      // },
      
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link> */}
          

 
             <Button
              onClick={() =>
                deleteUserHandler(params.id)
              }
            >
              <DeleteIcon />
            </Button> 
            
          </>
        );
      },
    },
  ];

  user &&
  user.forEach((item) => {
    rows.push({
      id: item._id,
      role: item.isAdmin,
      email: item.email,
      name: item.name,
    });
  });
 
  
  
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} disableSelectionOnClick pageSize={10}/>
    </div>
  )
}

export default Userlist