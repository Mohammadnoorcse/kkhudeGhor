import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, deleteBlog } from "../redux/actions/adminAction";
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material'
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DataGrid } from '@mui/x-data-grid';

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, blog } = useSelector(state => state.AllBlog);
  const { error: deleteerror, isDelete } = useSelector(state => state.BlogDelete);

  

  const deleteUserHandler = (Id) => {
   
    if( dispatch(deleteBlog(Id))){
      alert("successfully delete your blog");
    }

  };

  const rows = [

  ];

  const columns = [
    { field: "id", headerName: "Blog ID", minWidth: 180, flex: 0.8 },

    {
      field: "title",
      headerName: "Title",
      minWidth: 200,
      flex: 1,
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

  blog &&
    blog.forEach((item) => {
      rows.push({
        id: item._id,
        title: item.title,

      });
    });


  return (
    <div className='blog-Container'>

      <div className="blogs-content">
        

        <div id='blogtable'>
          <DataGrid rows={rows} columns={columns}  />
        </div>

      </div>

    </div>
  )
}

export default Blog