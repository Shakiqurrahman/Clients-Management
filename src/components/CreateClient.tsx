import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import { z } from "zod";
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
    const clientSchema = z.object({
        referenceName: z.string().min(1, "Reference Name is required"),
        officeName: z.string().min(1, "Office Name is required"),
        clientName: z.string().min(1, "Client Name is required"),
        dateOfBirth: z.string().min(1, "Date of Birth is required"),
        passportNumber: z.string().min(1, "Passport Number is required"),
        visaNumber: z.string().min(1, "Visa Number is required"),
        idNumber: z.string().min(1, "ID Number is required"),
        koffileNumber: z.string().min(1, "Koffile Number is required"),
        medicalDate: z.string().min(1, "Medical Date is required"),
        medicalFit: z.enum(["Yes", "No"]),
        clientNumber: z.string().min(1, "Client Number is required"),
        policeClearence: z.enum(["Yes", "No"]),
        mofaDate: z.string().min(1, "MOFA Date is required"),
        visaFingerDate: z.string().min(1, "Visa Finger Date is required"),
        manPowerFinger: z.enum(["Yes", "No"]),
        training: z.enum(["Yes", "No"]),
        curierDate: z.string().min(1, "Curier Date is required"),
        visaStatus: z.enum(["Yes", "No"]),
        manPower: z.enum(["Yes", "No"]),
        passportDelivery: z.string().min(1, "Passport Delivery is required"),
        ticketDate: z.string().min(1, "Ticket Date is required"),
        scanCopyLink: z.string().url("Scan Copy Link must be a valid URL"),
    });

    type ClientFormValues = z.infer<typeof clientSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ClientFormValues>({
        resolver: zodResolver(clientSchema),
    });

    const onSubmit = (data: ClientFormValues) => {
        // handle form submission
        console.log(data);
    };
    return (
        <Dialog>
            <form>
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
                            <ScrollArea className="rounded-sm border h-[60vh] sm:h-[70vh] border-gray-500">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-4 p-4"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8 text-gray-300">
                                        <div>
                                            <label>Reference Name</label>
                                            <input
                                                {...register("referenceName")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            />
                                            {errors.referenceName && (
                                                <span className="text-red-500 block mt-2">
                                                    {
                                                        errors.referenceName
                                                            .message
                                                    }
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Office Name</label>
                                            <input
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
                                                {...register("passportNumber")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            />
                                            {errors.passportNumber && (
                                                <span className="text-red-500 block mt-2">
                                                    {
                                                        errors.passportNumber
                                                            .message
                                                    }
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Visa Number</label>
                                            <input
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
                                            <label>Koffile Number</label>
                                            <input
                                                {...register("koffileNumber")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            />
                                            {errors.koffileNumber && (
                                                <span className="text-red-500 block mt-2">
                                                    {
                                                        errors.koffileNumber
                                                            .message
                                                    }
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
                                            {errors.medicalDate && (
                                                <span className="text-red-500 block mt-2">
                                                    {errors.medicalDate.message}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Medical Fit</label>
                                            <select
                                                {...register("medicalFit")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            >
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            {errors.medicalFit && (
                                                <span className="text-red-500 block mt-2">
                                                    {errors.medicalFit.message}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Client Number</label>
                                            <input
                                                {...register("clientNumber")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            />
                                            {errors.clientNumber && (
                                                <span className="text-red-500 block mt-2">
                                                    {
                                                        errors.clientNumber
                                                            .message
                                                    }
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Police Clearence</label>
                                            <select
                                                {...register("policeClearence")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            >
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            {errors.policeClearence && (
                                                <span className="text-red-500 block mt-2">
                                                    {
                                                        errors.policeClearence
                                                            .message
                                                    }
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
                                            {errors.mofaDate && (
                                                <span className="text-red-500 block mt-2">
                                                    {errors.mofaDate.message}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Visa Finger Date</label>
                                            <input
                                                type="date"
                                                {...register("visaFingerDate")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            />
                                            {errors.visaFingerDate && (
                                                <span className="text-red-500 block mt-2">
                                                    {
                                                        errors.visaFingerDate
                                                            .message
                                                    }
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Man Power Finger</label>
                                            <select
                                                {...register("manPowerFinger")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            >
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            {errors.manPowerFinger && (
                                                <span className="text-red-500 block mt-2">
                                                    {
                                                        errors.manPowerFinger
                                                            .message
                                                    }
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Training</label>
                                            <select
                                                {...register("training")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            >
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            {errors.training && (
                                                <span className="text-red-500 block mt-2">
                                                    {errors.training.message}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Curier Date</label>
                                            <input
                                                type="date"
                                                {...register("curierDate")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            />
                                            {errors.curierDate && (
                                                <span className="text-red-500 block mt-2">
                                                    {errors.curierDate.message}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Visa Status</label>
                                            <select
                                                {...register("visaStatus")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
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
                                            <label>Man Power</label>
                                            <select
                                                {...register("manPower")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            >
                                                <option value="">Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                            {errors.manPower && (
                                                <span className="text-red-500 block mt-2">
                                                    {errors.manPower.message}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label>Passport Delivery</label>
                                            <input
                                                type="date"
                                                {...register(
                                                    "passportDelivery"
                                                )}
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
                                            <label>Scan Copy Link</label>
                                            <input
                                                {...register("scanCopyLink")}
                                                className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                            />
                                            {errors.scanCopyLink && (
                                                <span className="text-red-500 block mt-2">
                                                    {
                                                        errors.scanCopyLink
                                                            .message
                                                    }
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="border border-gray-500 bg-gray-600 text-white cursor-pointer hover:bg-gray-700 rounded-md p-2 mt-4 duration-300"
                                    >
                                        Create Client
                                    </button>
                                </form>
                            </ScrollArea>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </form>
        </Dialog>
    );
};

export default CreateClient;
