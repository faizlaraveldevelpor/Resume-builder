import { User } from "@/types/slicetypes";
import { createSlice } from "@reduxjs/toolkit";

// ✅ Define the User type


const initialState:User={
name:"",
email:"",
_id:"",
picture:"",
pay:false
}

// ✅ Create slice
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    singleuserfnc:(state,actions)=>{
    state._id=actions.payload?.user._id
    state.pay=actions.payload?.user.pay
    state.email=actions.payload?.user.email
    state.name=actions.payload?.user.name
    state.picture=actions.payload?.user.image
    }
     },
});

// ✅ Export actions
export const { singleuserfnc } = userSlice.actions;

// ✅ Export reducer
export default userSlice.reducer;
