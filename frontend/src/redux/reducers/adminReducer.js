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

export const allUsersReducer = (state = { user: [] }, action) => {
     switch (action.type) {
      case ALL_USERS_REQUEST:
        return { loading: true };
      case ALL_USERS_SUCCESS:
        return { loading: false, user: action.payload };
      case ALL_USERS_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  export const profileReducer = (state = {}, action) => {
    switch (action.type) {
     case DELETE_USER_REQUEST:
       return { loading: true };
     case DELETE_USER_SUCCESS:
       return { loading: false, isDeleted: action.payload };
     case DELETE_USER_FAIL:
       return { loading: false, error: action.payload };
     case DELETE_USER_RESET:
      return {
        
        isDeleted: false,
      };
 
     default:
       return state;
   }
 };

 export const blogReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BLOG_REQUEST:
      return { loading: true };
    case CREATE_BLOG_SUCCESS:
      return { loading: false, blogInfo: action.payload };
    case CREATE_BLOG_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const allBloggReducer = (state = { blog: [] }, action) => {
  switch (action.type) {
   case ALL_BLOG_REQUEST:
     return { loading: true };
   case ALL_BLOG_SUCCESS:
     return { loading: false, blog: action.payload };
   case ALL_BLOG_FAIL:
     return { loading: false, error: action.payload };

   default:
     return state;
 }
};


export const BlogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
   case DELETE_BLOG_REQUEST:
     return { loading: true };
   case DELETE_BLOG_SUCCESS:
     return { loading: false, isDeleted: action.payload };
   case DELETE_BLOG_FAIL:
     return { loading: false, error: action.payload };
   case DELETE_BLOG_RESET:
    return {
      
      isDeleted: false,
    };

   default:
     return state;
 }
};


 export const schoolReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SCHOOL_REQUEST:
      return { loading: true };
    case CREATE_SCHOOL_SUCCESS:
      return { loading: false, schoolInfo: action.payload };
    case CREATE_SCHOOL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const allSchoolReducer = (state = {where: [] }, action) => {
  switch (action.type) {
   case ALL_SCHOOL_REQUEST:
     return { loading: true };
   case ALL_SCHOOL_SUCCESS:
     return { loading: false, where: action.payload };
   case ALL_SCHOOL_FAIL:
     return { loading: false, error: action.payload };

   default:
     return state;
 }
};


export const schoolDeleteReducer = (state = {}, action) => {
  switch (action.type) {
   case DELETE_SCHOOL_REQUEST:
     return { loading: true };
   case DELETE_SCHOOL_SUCCESS:
     return { loading: false, isDeleted: action.payload };
   case DELETE_SCHOOL_FAIL:
     return { loading: false, error: action.payload };
   case DELETE_SCHOOL_RESET:
    return {
      
      isDeleted: false,
    };

   default:
     return state;
 }
};




export const storyReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STORY_REQUEST:
      return { loading: true };
    case CREATE_STORY_SUCCESS:
      return { loading: false, story: action.payload };
    case CREATE_STORY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};