import { baseApi } from "../../api/baseApi";

const employeeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => ({
                url: "/employees",
                method: "GET",
            }),
            providesTags: ["employee"],
            transformResponse: (response) => response?.data,
        }),
        createEmployee: builder.mutation({
            query: (body) => ({
                url: "/employees",
                method: "POST",
                body: body,
                invalidatesTags: ["employee"],
            }),
        }),
    }),
});

export const { useGetEmployeesQuery, useCreateEmployeeMutation } = employeeApi;
