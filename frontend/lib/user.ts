import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { JwtPayload } from 'jwt-decode';

// ✅ API base configuration
export const UserApi = createApi({
  reducerPath: 'userapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/',
    credentials: "include",
    
    // 👈 apni API base URL yahan daalo
  }),
  tagTypes:["user"],
  endpoints: (builder) => ({
    // ✅ Example: GET request
    Register: builder.mutation({
      query: (data:FormData) => ({
        url:"register",
        method:"POST",
        body:data
      }),
      invalidatesTags:["user"]
    }),
    Login: builder.mutation({
      query: (data:FormData) => ({
        url:"login",
        method:"POST",
        body:data
      }),
      invalidatesTags:["user"]
    }),
    Googlelogin: builder.mutation({
      query: (data:JwtPayload) => ({
        url:"googlelogin",
        method:"POST",
        body:data
      }),
      invalidatesTags:["user"]
    }),
    SingleUserGet: builder.query({
      query: () => ({
        url:"singleuser",
        method:"GET",
      
      }),
      providesTags:["user"]
    }),
    Logout: builder.mutation({
      query: () => ({
        url:"logout",
        method:"POST",
      
      }),
      invalidatesTags:["user"]
    }),

    
  }),
});

// Hooks auto-generate hotay hain 👇
export const { useRegisterMutation,useLoginMutation,useGoogleloginMutation,useSingleUserGetQuery,useLogoutMutation } = UserApi;
