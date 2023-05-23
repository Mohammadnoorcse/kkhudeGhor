import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import{
    userLoginReducer,
    userRegisterReducer

} from "../redux/reducers/userReducers";
import {
allUsersReducer,
profileReducer,
blogReducer,
allBloggReducer,
BlogDeleteReducer,
allSchoolReducer,
schoolDeleteReducer,
schoolReducer,
storyReducer
} from "../redux/reducers/adminReducer";


 




const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


const reducer = combineReducers({
 userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  allUser :allUsersReducer,
  profile: profileReducer,
  Blog:blogReducer,
  AllBlog:allBloggReducer,
  BlogDelete:BlogDeleteReducer,
  School:schoolReducer,
  Allschool:allSchoolReducer,
  Deleteschool:schoolDeleteReducer,
  Story:storyReducer
 
});
const initialState = {
  // cart: { cartItems: "techinfo" },
 
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;