import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseURL = ("https://api.pictinc.org") + "/judge";
const baseURL = "http://localhost:3001/judge";


export const judgeAPI = createApi({
    reducerPath: "judges",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        processJudgeRegister: builder.mutation({
          query: (data) => ({
            url: `/register`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: data,
          })
        }),
        getJudge: builder.query({
          query: (jid) => ({
              url: `/${jid}`,
              method: 'GET',
              credentials: 'include',
          })
        }),
        getAllocatedProjects: builder.query({
          query: (jid) => ({
              url: `/allocations/${jid}`,
              method: 'GET',
              credentials: 'include',
          })
        }),
        evaluateProject: builder.mutation({
          query: ({data, event_name}) => ({
            url: `/${event_name}/evaluate`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: data,
          })
        }),
        getJudgeRegistrations: builder.query({
          query: (eventName) => ({
              url: `/registration/view/${eventName}`,
              method: 'GET',
              credentials: 'include',
          })
        }),
    })
})


export const { useProcessJudgeRegisterMutation, useGetJudgeQuery, useLazyGetAllocatedProjectsQuery, useEvaluateProjectMutation, useGetJudgeRegistrationsQuery, } = judgeAPI
