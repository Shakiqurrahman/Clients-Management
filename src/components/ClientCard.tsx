import { FaRegTrashAlt } from "react-icons/fa";

import EditClient from "./EditClientDetails";
import { Button } from "./ui/button";
import ViewClientDetails from "./ViewClientDetails";

interface Iclient {
    client: {
        referenenceName?: string;
        officeName?: string;
        clientName?: string;
        dateOfBirth?: string;
        passportNumber?: string;
        visaNumber?: string;
        idNumber?: string;
        koffileNumber?: string;
        medicalDate?: string;
        medicalFit?: boolean;
        clientNumber?: string;
        policeClearence?: boolean;
        mofaDate?: string;
        visaFingerDate?: string;
        manPowerFingerDate?: string;
    };
}

const ClientCard = ({ client }: Iclient) => {
    const status = true;
    return (
        <div className="flex justify-center items-center py-2 group overflow-hidden">
            <div className="w-full max-w-md bg-white/10 border border-stone-700 rounded-xl shadow-lg p-6 relative transition hover:shadow-xl">
                <div className="absolute top-4 right-4 flex-col gap-2 flex transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <ViewClientDetails client={client} />
                    <EditClient client={client} />
                    <Button
                        variant="outline"
                        className="size-8 bg-white/20 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/30 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                        aria-label="Delete"
                    >
                        <FaRegTrashAlt className="size-4" />
                    </Button>
                </div>
                <div className="space-y-1 mt-2 text-gray-100">
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
                <div>
                    <span className="font-semibold text-stone-200">
                        Status:
                    </span>
                    {!status ? (
                        <span className="ml-2 text-xs bg-green-100/20 text-green-500 p-1 rounded-sm">
                            Completed
                        </span>
                    ) : (
                        <span className="ml-2 text-xs bg-orange-100/20 text-orange-500 p-1 rounded-sm">
                            Pending
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientCard;
