import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaUserPlus } from "react-icons/fa";
import { z } from "zod";
import { useCreateClientMutation } from "../redux/features/client/clientApi";
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

const CreateClient = () => {
    const [open, setOpen] = useState(false);

    const [createClient, { isLoading }] = useCreateClientMutation();

    const clientSchema = z.object({
        referenceName: z.string().optional(),
        officeName: z.string().optional(),
        clientName: z.string().min(1, "Client Name is required"),
        dateOfBirth: z.string().optional(),
        passportNumber: z.string().optional(),
        visaNumber: z.string().optional(),
        idNumber: z.string().optional(),
        kofeelNumber: z.string().optional(),
        medicalDate: z.string().optional(),
        medicalExpireDate: z.string().optional(),
        medicalStatus: z.enum(["Yes", "No"]).optional(),
        clientNumber: z.string().optional(),
        policeClearance: z.enum(["Yes", "No"]).optional(),
        MofaStatus: z.enum(["Yes", "No"]).optional(),
        mofaDate: z.string().optional(),
        visaFingerDate: z.string().optional(),
        manPowerStatus: z.enum(["Yes", "No"]).optional(),
        manPowerFingerDate: z.string().optional(),
        trainingStatus: z.enum(["Yes", "No"]).optional(),
        TakammolCertificate: z.enum(["Yes", "No"]).optional(),
        courierDate: z.string().optional(),
        visaStatus: z.enum(["Yes", "No"]).optional(),
        passportDelivery: z.string().optional(),
        ticketDate: z.string().optional(),
        notes: z.string().optional(),
        scanCopy: z.string().optional(),
        status: z
            .enum(["ACTIVE", "PENDING", "CANCELLED", "COMPLETED"])
            .optional(),
        wakala: z.enum(["Yes", "No"]).optional(),
    });

    type ClientFormValues = z.infer<typeof clientSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ClientFormValues>({
        resolver: zodResolver(clientSchema),
    });

    const onSubmit = async (data: ClientFormValues) => {
        const transformedData = {
            ...data,
            medicalStatus: data.medicalStatus === "Yes",
            policeClearance: data.policeClearance === "Yes",
            trainingStatus: data.trainingStatus === "Yes",
            visaStatus: data.visaStatus === "Yes",
            TakammolCertificate: data.TakammolCertificate === "Yes",
            MofaStatus: data.MofaStatus === "Yes",
            manPowerStatus: data.manPowerStatus === "Yes",
        };
        try {
            await createClient(transformedData).unwrap();
            toast.success("Client created successfully!");
            reset();
        } catch {
            toast.error("Failed to create client. Please try again.");
        } finally {
            setOpen(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-white/5 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/10 transition duration-300 cursor-pointer flex gap-2 items-center"
                >
                    <FaUserPlus />
                    Add Client
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[800px] bg-gray-900 backdrop-blur-xl text-white border-0">
                <DialogHeader>
                    <DialogTitle>Create Profile</DialogTitle>
                    <DialogDescription>
                        {/* The form now contains the ScrollArea and the submit button */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-4 p-4"
                        >
                            <ScrollArea className="rounded-sm border h-[60vh] sm:h-[70vh] border-gray-500">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8 text-gray-300 p-4">
                                    <div>
                                        <label>Reference Name</label>
                                        <input
                                            type="text"
                                            {...register("referenceName")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.referenceName && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.referenceName.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Office Name</label>
                                        <input
                                            type="text"
                                            {...register("officeName")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.officeName && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.officeName.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Client Name</label>
                                        <input
                                            type="text"
                                            {...register("clientName")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.clientName && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.clientName.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Date Of Birth</label>
                                        <input
                                            type="date"
                                            {...register("dateOfBirth")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.dateOfBirth && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.dateOfBirth.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Passport Number</label>
                                        <input
                                            type="text"
                                            {...register("passportNumber")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.passportNumber && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.passportNumber.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Visa Number</label>
                                        <input
                                            type="text"
                                            {...register("visaNumber")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.visaNumber && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.visaNumber.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>ID Number</label>
                                        <input
                                            type="text"
                                            {...register("idNumber")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.idNumber && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.idNumber.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Kofeel Number</label>
                                        <input
                                            type="text"
                                            {...register("kofeelNumber")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.kofeelNumber && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.kofeelNumber.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Medical Date</label>
                                        <input
                                            type="date"
                                            {...register("medicalDate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label>Medical Expiry Date</label>
                                        <input
                                            type="date"
                                            {...register("medicalExpireDate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.medicalExpireDate && (
                                            <span className="text-red-500 block mt-2">
                                                {
                                                    errors.medicalExpireDate
                                                        .message
                                                }
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Medical Fit</label>
                                        <select
                                            {...register("medicalStatus")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {errors.medicalStatus && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.medicalStatus.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Client Number</label>
                                        <input
                                            type="text"
                                            {...register("clientNumber")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.clientNumber && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.clientNumber.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Police Clearance</label>
                                        <select
                                            {...register("policeClearance")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {errors.policeClearance && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.policeClearance.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Mofa Status</label>
                                        <select
                                            {...register("MofaStatus")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {errors.MofaStatus && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.MofaStatus.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>MOFA Date</label>
                                        <input
                                            type="date"
                                            {...register("mofaDate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                    </div>

                                    <div>
                                        <label>Visa Finger Date</label>
                                        <input
                                            type="date"
                                            {...register("visaFingerDate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                    </div>

                                    <div>
                                        <label>Man Power Status</label>
                                        <select
                                            {...register("manPowerStatus")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {errors.manPowerStatus && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.manPowerStatus.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Man Power Finger</label>
                                        <input
                                            type="date"
                                            {...register("manPowerFingerDate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.manPowerFingerDate && (
                                            <span className="text-red-500 block mt-2">
                                                {
                                                    errors.manPowerFingerDate
                                                        .message
                                                }
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Training</label>
                                        <select
                                            {...register("trainingStatus")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {errors.trainingStatus && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.trainingStatus.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Takammol Certificate</label>
                                        <select
                                            {...register("TakammolCertificate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {errors.TakammolCertificate && (
                                            <span className="text-red-500 block mt-2">
                                                {
                                                    errors.TakammolCertificate
                                                        .message
                                                }
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Courier Date</label>
                                        <input
                                            type="date"
                                            {...register("courierDate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.courierDate && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.courierDate.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Visa Status</label>
                                        <select
                                            {...register("visaStatus")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {errors.visaStatus && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.visaStatus.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Passport Delivery</label>
                                        <input
                                            type="date"
                                            {...register("passportDelivery")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.passportDelivery && (
                                            <span className="text-red-500 block mt-2">
                                                {
                                                    errors.passportDelivery
                                                        .message
                                                }
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Ticket Date</label>
                                        <input
                                            type="date"
                                            {...register("ticketDate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.ticketDate && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.ticketDate.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Wakala</label>
                                        <select
                                            {...register("wakala")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        {errors.visaStatus && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.visaStatus.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="col-span-full">
                                        <label>Notes</label>
                                        <textarea
                                            rows={5}
                                            {...register("notes")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                    </div>
                                    <div>
                                        <label>Scan Copy Link</label>
                                        <input
                                            type="text"
                                            {...register("scanCopy")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.scanCopy && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.scanCopy.message}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <label>Status</label>
                                        <select
                                            {...register("status")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-600"
                                        >
                                            <option value="ACTIVE">
                                                Active
                                            </option>
                                            <option value="PENDING">
                                                Pending
                                            </option>
                                            <option value="CANCELLED">
                                                Cancelled
                                            </option>
                                            <option value="COMPLETED">
                                                Completed
                                            </option>
                                        </select>
                                        {errors.status && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.status.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </ScrollArea>

                            <div className="flex justify-end mt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="border border-gray-500 bg-gray-600 text-white cursor-pointer hover:bg-gray-700 rounded-md px-4 py-2 duration-300"
                                >
                                    {isLoading
                                        ? "Creating..."
                                        : "Create Client"}
                                </button>
                            </div>
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CreateClient;
