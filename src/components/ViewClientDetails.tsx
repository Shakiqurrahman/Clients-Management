import { FaEye } from "react-icons/fa6";

import type { IClient } from "../types/clients";
import {
    formatDateTime,
    formatDateToLongDate,
} from "../utils/timeFormatHandler";
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

const ViewClientDetails = ({ client }: { client: IClient }) => {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="size-8 bg-gray-700/90 border border-stone-500 text-white hover:text-gray-300 hover:bg-gray-600 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
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
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Client Name
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.clientName || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Reference Name
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.referenceName || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Office Name
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.officeName || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Date of Birth
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {formatDateToLongDate(
                                                    client.dateOfBirth
                                                ) || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Passport Number
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.passportNumber ||
                                                    "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Police Clearance
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.policeClearance
                                                    ? "Yes"
                                                    : "No"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Visa Number
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.visaNumber || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Id Number
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.idNumber || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Koffile Number
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.kofeelNumber || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Medical Date
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {formatDateToLongDate(
                                                    client?.medicalDate
                                                ) || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Medical Expire Date
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {formatDateToLongDate(
                                                    client?.medicalExpireDate
                                                ) || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Medical Status
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.medicalStatus
                                                    ? "Fit"
                                                    : "Unfit"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Client Number
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.clientNumber || "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Mofa Status
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.MofaStatus
                                                    ? "Yes"
                                                    : "No"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Mofa Date
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.mofaDate
                                                    ? formatDateToLongDate(
                                                          client.mofaDate
                                                      )
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Visa Finger Date
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.visaFingerDate
                                                    ? formatDateToLongDate(
                                                          client.visaFingerDate
                                                      )
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Man Power Finger Date
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.manPowerFingerDate
                                                    ? formatDateToLongDate(
                                                          client.manPowerFingerDate
                                                      )
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Training Status
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.trainingStatus
                                                    ? "Completed"
                                                    : "Pending"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Couriar Date
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.courierDate
                                                    ? formatDateToLongDate(
                                                          client.courierDate
                                                      )
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Takammol Certificate
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.TakammolCertificate
                                                    ? "Yes"
                                                    : "No"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                visa Status
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.visaStatus
                                                    ? "Yes"
                                                    : "No"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Man Power Status
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.manPowerStatus
                                                    ? "Yes"
                                                    : "No"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Passport Delivery
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.passportDelivery
                                                    ? formatDateToLongDate(
                                                          client.passportDelivery
                                                      )
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Ticket Date
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.ticketDate
                                                    ? formatDateToLongDate(
                                                          client.ticketDate
                                                      )
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Scan Copy
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.scanCopy
                                                    ? client.scanCopy
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Notes
                                            </td>
                                            <td className="whitespace-pre-wrap border-b border-stone-700 px-2 py-1">
                                                {client?.notes
                                                    ? client.notes
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                status
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.status
                                                    ? client.status
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Record Created
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.createdAt
                                                    ? formatDateTime(
                                                          client.createdAt
                                                      )
                                                    : "N/A"}
                                            </td>
                                        </tr>
                                        {client?.updatedBy && (
                                            <tr>
                                                <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                    Last Updated By
                                                </td>
                                                <td className="border-b border-stone-700 px-2 py-1">
                                                    {client?.updatedBy}
                                                </td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td className="border-b border-stone-700 px-2 py-1 font-semibold capitalize">
                                                Last Updated
                                            </td>
                                            <td className="border-b border-stone-700 px-2 py-1">
                                                {client?.createdAt
                                                    ? formatDateTime(
                                                          client.updatedAt
                                                      )
                                                    : "N/A"}
                                            </td>
                                        </tr>
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
