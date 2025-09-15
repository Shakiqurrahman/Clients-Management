import { FaRegTrashAlt } from "react-icons/fa";

import { GoDotFill } from "react-icons/go";
import type { IClient } from "../types/clients";
import EditClient from "./EditClientDetails";
import { Button } from "./ui/button";
import ViewClientDetails from "./ViewClientDetails";

// interface Iclient {
//     client: {
//         referenenceName?: string;
//         officeName?: string;
//         clientName?: string;
//         dateOfBirth?: string;
//         passportNumber?: string;
//         visaNumber?: string;
//         idNumber?: string;
//         koffileNumber?: string;
//         medicalDate?: string;
//         medicalFit?: boolean;
//         clientNumber?: string;
//         policeClearence?: boolean;
//         mofaDate?: string;
//         visaFingerDate?: string;
//         manPowerFingerDate?: string;
//         status?: "ACTIVE" | "PENDING" | "CANCELLED" | "COMPLETED";
//     };
// }

const ClientCard = ({ client }: IClient) => {
    return (
        <div className="flex justify-center items-center py-2 group overflow-hidden relative">
            <div className="w-full max-w-md bg-white/10 border border-stone-700 rounded-xl shadow-lg p-6 relative transition hover:shadow-xl">
                <div className="absolute top-4 right-4 flex-col gap-2 flex transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 z-20">
                    <ViewClientDetails client={client} />
                    <EditClient client={client} />
                    <Button
                        variant="outline"
                        className="size-8 bg-gray-700/90 border border-stone-500 text-white hover:text-gray-300 hover:bg-gray-600 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                        aria-label="Delete"
                    >
                        <FaRegTrashAlt className="size-4" />
                    </Button>
                </div>
                <div className="space-y-1 mt-3 text-gray-100">
                    <div>
                        <span className="font-semibold text-stone-200">
                            Name:
                        </span>
                        <span className="ml-2">
                            {client.clientName || "N/A"}
                        </span>
                    </div>
                    <div>
                        <span className="font-semibold text-stone-200">
                            Passport:
                        </span>
                        <span className="ml-2">
                            {client.passportNumber || "N/A"}
                        </span>
                    </div>
                    <div></div>
                    <span className="font-semibold text-stone-200">ID:</span>
                    <span className="ml-2">{client.idNumber || "N/A"}</span>
                </div>
                <div>
                    <span className="font-semibold text-stone-200">
                        Visa Number:
                    </span>
                    <span className="ml-2">{client.visaNumber || "N/A"}</span>
                </div>
                <div className="absolute top-3 right-3">
                    {client?.status === "CANCELLED" ? (
                        <div className="border border-rose-600 text-rose-600 flex items-center bg-[#ffe0e0] px-1.5 py-[1px] rounded-[10px] text-[12px]">
                            <GoDotFill className="text-xs" />
                            <span>{client?.status}</span>
                        </div>
                    ) : client?.status === "PENDING" ? (
                        <div className="border border-blue-500 text-blue-500 flex items-center bg-[#edfff4] px-1.5 py-[1px] rounded-[10px] text-[12px]">
                            <GoDotFill className="text-xs" />
                            <span>{client?.status}</span>
                        </div>
                    ) : client?.status === "ACTIVE" ? (
                        <div className="border border-yellow-500 text-yellow-500 flex items-center bg-[#edfff4] px-1.5 py-[1px] rounded-[10px] text-[12px]">
                            <GoDotFill className="text-xs" />
                            <span>{client?.status}</span>
                        </div>
                    ) : client?.status === "COMPLETED" ? (
                        <div className="border border-[#09cc57] text-[#09cc57] flex items-center bg-[#edfff4] px-1.5 py-[1px] rounded-[10px] text-[12px]">
                            <GoDotFill className="text-xs" />
                            <span>{client?.status}</span>
                        </div>
                    ) : (
                        <div className="border border-[#000000] text-[#032611] flex items-center bg-[#edfff4] px-1.5 py-[1px] rounded-[10px] text-[12px]">
                            <GoDotFill className="text-xs" />
                            <span>{client?.status}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientCard;
