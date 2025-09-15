import { baseApi } from "../../api/baseApi";

const clientApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getClients: builder.query({
            query: () => ({
                url: "/clients",
                method: "GET",
            }),
            providesTags: ["client"],
            transformResponse: (response) => response?.data,
        }),

        createClient: builder.mutation({
            query: (body) => ({
                url: "/clients",
                method: "POST",
                body: body,
            }),
            invalidatesTags: ["client"],
        }),

        updateClient: builder.mutation({
            query: (body) => ({
                url: `/clients/${body.id}`,
                method: "PUT",
                body: body,
            }),
            invalidatesTags: ["client"],
        }),

        deleteClient: builder.mutation({
            query: (id) => ({
                url: `/clients/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["client"],
        }),
    }),
});

export const {
    useGetClientsQuery,
    useCreateClientMutation,
    useUpdateClientMutation,
    useDeleteClientMutation,
} = clientApi;
