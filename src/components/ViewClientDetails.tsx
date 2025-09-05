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

export interface Iclient {
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
        training?: boolean;
        manPowerFingerDate?: string;
        mofaDate?: string;
        visaFingerDate?: string;
        curierDate?: string;
        visaStatus?: boolean;
        manPower?: boolean;
        passportDelivery?: string;
        ticketDate?: string;
        scanCopyLink?: string;
    };
}

const ViewClientDetails = ({ client }: Iclient) => {
    return (
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

                <DialogContent className="sm:max-w-[520px] md:max-w-[625px] lg:max-w-[850px] bg-gray-800 backdrop-blur-xl text-white border-0">
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
                                                            : value || "N/A"}
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
        </Dialog>
    );
};

export default ViewClientDetails;
