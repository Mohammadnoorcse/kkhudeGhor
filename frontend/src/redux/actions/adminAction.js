import{
ALL_USERS_FAIL,
ALL_USERS_REQUEST,
ALL_USERS_SUCCESS,
DELETE_USER_FAIL,
DELETE_USER_REQUEST,
DELETE_USER_RESET,
DELETE_USER_SUCCESS,
CREATE_BLOG_FAIL,
CREATE_BLOG_REQUEST,
CREATE_BLOG_SUCCESS,
ALL_BLOG_FAIL,
ALL_BLOG_REQUEST,
ALL_BLOG_SUCCESS,
DELETE_BLOG_FAIL,
DELETE_BLOG_REQUEST,
DELETE_BLOG_RESET,
DELETE_BLOG_SUCCESS,
ALL_SCHOOL_FAIL,
ALL_SCHOOL_REQUEST,
ALL_SCHOOL_SUCCESS,
CREATE_SCHOOL_FAIL,
CREATE_SCHOOL_REQUEST,
CREATE_SCHOOL_SUCCESS,
DELETE_SCHOOL_FAIL,
DELETE_SCHOOL_REQUEST,
DELETE_SCHOOL_RESET,
DELETE_SCHOOL_SUCCESS,
CREATE_STORY_FAIL,
CREATE_STORY_REQUEST,
CREATE_STORY_SUCCESS

} from "../constants/adminConstant"
import axios from "axios"

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`http://localhost:8080/api/users/all`);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, 
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
    const { data } = await axios.delete(`http://localhost:8080/api/users/${id}`);

    dispatch({ type:DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, 
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    
    });
  }
};


export const BlogAction = (title, description,user) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BLOG_REQUEST });
    const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:8080/api/blogs/create",
      { title, description,user},
      config
    );
    dispatch({
      type: CREATE_BLOG_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type:CREATE_BLOG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BLOG_REQUEST });
    const { data } = await axios.get(`http://localhost:8080/api/blogs/all`);

    dispatch({ type: ALL_BLOG_SUCCESS, payload: data.blog });
  } catch (error) {
    dispatch({ type: ALL_BLOG_FAIL, 
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    
    });
  }
};


export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });
    const { data } = await axios.delete(`http://localhost:8080/api/blogs/${id}`);

    dispatch({ type:DELETE_BLOG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_BLOG_FAIL, 
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    
    });
  }
};
export const schoolAction = (name, address, description,user,image) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_SCHOOL_REQUEST });
    const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:8080/api/where/",
      { name, address, description,user,image},
      config
    );
    dispatch({
      type: CREATE_SCHOOL_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type:CREATE_SCHOOL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getAllschool = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SCHOOL_REQUEST });
    const { data } = await axios.get(`http://localhost:8080/api/where/all`);

    dispatch({ type: ALL_SCHOOL_SUCCESS, payload: data.where });
  } catch (error) {
    dispatch({ type: ALL_SCHOOL_FAIL, 
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    
    });
  }
};





export const schoolDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SCHOOL_REQUEST });
    const { data } = await axios.delete(`http://localhost:8080/api/where/${id}`);

    dispatch({ type:DELETE_SCHOOL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_SCHOOL_FAIL, 
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    
    });
  }
};

export const storyAction = (storeData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_STORY_REQUEST });
    const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:8080/api/story/create",
      storeData,
      config
    );
    dispatch({
      type: CREATE_STORY_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type:CREATE_STORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
