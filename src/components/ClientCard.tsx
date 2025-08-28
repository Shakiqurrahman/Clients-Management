import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

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
    };
}

const ClientCard = ({ client }: Iclient) => {
    return (
        <div className="flex justify-center items-center py-2 group">
            <div className="w-full max-w-md bg-white/10 border border-stone-700 rounded-xl shadow-lg p-6 relative transition hover:shadow-xl">
                <div className="absolute top-4 right-4 flex-col gap-2 flex transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <Dialog>
                        <form>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="size-8 bg-white/20 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/30 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                                    aria-label="View"
                                >
                                    <FaEye className="size-4" />
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-[425px] bg-gray-800 backdrop-blur-xl text-white border-0">
                                <DialogHeader>
                                    <DialogTitle>Profile Details</DialogTitle>
                                    <DialogDescription>
                                        <ScrollArea className="rounded-sm border h-[60vh] sm:h-[70vh] border-gray-500">
                                            <table className="w-full text-left border-collapse mt-4 text-xs sm:text-base text-gray-100">
                                                <thead>
                                                    <tr>
                                                        <th className="border-b border-stone-700 px-2 py-1">
                                                            Field
                                                        </th>
                                                        <th className="border-b border-stone-700 px-2 py-1">
                                                            Value
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-200">
                                                    {Object.entries(client).map(
                                                        ([key, value]) => (
                                                            <tr key={key}>
                                                                <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                                    {key.replace(
                                                                        /([A-Z])/g,
                                                                        " $1"
                                                                    )}
                                                                </td>
                                                                <td className="border-b border-stone-700 px-2 py-1">
                                                                    {typeof value ===
                                                                    "boolean"
                                                                        ? value
                                                                            ? "Yes"
                                                                            : "No"
                                                                        : value ||
                                                                          "N/A"}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </ScrollArea>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </form>
                    </Dialog>{" "}
                    <Button
                        variant="outline"
                        className="size-8 bg-white/20 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/30 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                        aria-label="Edit"
                    >
                        <FaEdit className="size-4" />
                    </Button>
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
            </div>
        </div>
    );
};

export default ClientCard;
