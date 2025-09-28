import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { TbRestore } from "react-icons/tb";
import {
    useGetDeletedClientsQuery,
    useRestoreClientMutation,
} from "../redux/features/client/clientApi";
import type { IClient } from "../types/clients";
import { formatDateToLongDate } from "../utils/timeFormatHandler";

const DeletedHistory = () => {
    const { data, isLoading } = useGetDeletedClientsQuery({});
    const [restoreClient, { isLoading: restoring }] =
        useRestoreClientMutation();
    console.log(data);

    const handleRestore = async (id: string) => {
        const loadingToast = toast.loading("Deleting client...");
        try {
            await restoreClient(id).unwrap();
            toast.success("Client restored successfully", { id: loadingToast });
        } catch {
            toast.error("Failed to restore client", { id: loadingToast });
        }
    };

    return (
        <div className="bg-gray-800 rounded-md p-2 sm:p-4 sm:px-6 max-width mt-20">
            <h1 className="font-medium text-lg mb-4 dark:text-gray-300">
                Sale History
            </h1>

            <div className="mt-10 overflow-x-auto text-nowrap">
                <table className="w-full border-collapse rounded-md text-gray-300">
                    <thead>
                        <tr className="bg-stone-600 dark:text-gray-300 text-left *:font-semibold text-sm">
                            <th className="p-3">ID</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Deleted By</th>
                            <th className="p-3">Client Name</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {isLoading ? (
                            <tr className="text-sm">
                                <td
                                    colSpan={9}
                                    className="p-4 text-center text-gray-500 dark:text-gray-300"
                                >
                                    Loading...
                                </td>
                            </tr>
                        ) : data.length > 0 ? (
                            data.map((client: IClient, index: number) => (
                                <tr
                                    key={index}
                                    onClick={() => {
                                        //   setSaleHistoryDetails(sale?.id);
                                        //   setShowModal(true);
                                    }}
                                    // key={index}
                                    className=" hover:bg-gray-600 border-b border-gray-600 cursor-pointer"
                                >
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">
                                        {formatDateToLongDate(client.createdAt)}
                                    </td>
                                    <td className="p-3">{client.deletedBy}</td>
                                    <td className="p-3">{client.clientName}</td>
                                    <td className="p-3">
                                        <div
                                            className={`${
                                                client?.status === "COMPLETED"
                                                    ? "bg-green-100 text-green-500"
                                                    : "bg-red-100 text-red-500"
                                            } capitalize text-center text-xs p-1.5 w-[80px] rounded-md`}
                                        >
                                            {client.status}
                                        </div>
                                    </td>
                                    <td className="flex items-center gap-1 p-3">
                                        <button
                                            className="bg-blue-400 text-white p-1.5 rounded-sm cursor-pointer shrink-0"
                                            onClick={() =>
                                                handleRestore(client.id)
                                            }
                                        >
                                            {restoring ? (
                                                <AiOutlineLoading3Quarters className="text-md animate-spin duration-300" />
                                            ) : (
                                                <TbRestore className="text-md" />
                                            )}
                                        </button>
                                        <button
                                            className="bg-red-400 text-white p-1.5 rounded-sm cursor-pointer shrink-0"
                                            // onClick={() =>
                                            //     // handleDelete(value.id)
                                            // }
                                        >
                                            {/* {isLoading &&
                                            value.id === deletingId ? (
                                                <AiOutlineLoading3Quarters className="text-md animate-spin duration-300" />
                                            ) : ( */}
                                            <FiTrash className="text-md" />
                                            {/* )} */}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={9}
                                    className="text-center py-3 text-gray-500 dark:text-gray-300"
                                >
                                    No sales history found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeletedHistory;
