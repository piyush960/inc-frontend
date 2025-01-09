import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = (import.meta.env.VITE_BACKEND_URL || "http://localhost:3001") + "/events";


export const formAPI = createApi({
    reducerPath: "forms",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        stepOne: builder.mutation({
            query: ({event_name, ticket, data}) => ({
                url: `/step_1?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        }),
        getMembers: builder.query({
            query: (ticket) => ({
                url: `/getmemberdetails?ticket=${ticket}`,
                method: 'GET',
                credentials: 'include',
            })
        }),
        getTicket: builder.query({
            query: (ticket) => ({
                url: `/ticket?ticket=${ticket}`,
                method: 'GET',
                credentials: 'include',
            })
        }),
        addMember: builder.mutation({
            query: ({event_name, ticket, data}) => ({
                url: `/step_2?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                credentials: 'include',
                body: data
            })
        }),
        removeMember: builder.mutation({
            query: ({ index, ticket }) => ({
                url: `/deletememberdetails?index=${index}&ticket=${ticket}`,
                method: 'DELETE',
                credentials: 'include',
            })
        }),
        stepThree: builder.mutation({
            query: ({ event_name, ticket, data }) => ({
                url: `/step_3?event_name=${event_name}&ticket=${ticket}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        }),
        stepFour: builder.mutation({
            query: ({ ticket, data }) => ({
                url: `/step_4?&ticket=${ticket}`,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: data
            })
        }),
    })
})


export const { useStepOneMutation, useAddMemberMutation, useStepThreeMutation, useStepFourMutation, useRemoveMemberMutation, useLazyGetMembersQuery, useLazyGetTicketQuery } = formAPI