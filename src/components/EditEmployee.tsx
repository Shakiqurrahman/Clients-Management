import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { z } from "zod";
import type { IEmployee } from "./EmployeeCard";
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

const EditEmployee = ({ employee }: { employee: IEmployee }) => {
    const employeeSchema = z.object({
        fullName: z.string().min(1, "Name is required"),
        userName: z.string().min(1, "Username is required"),
        email: z.string().email("Email must be a valid email address"),
        phone: z.string().min(1, "Phone is required"),
        role: z.enum(["Admin", "User"]),
        status: z.enum(["Active", "Inactive"]),
        joiningDate: z.string().min(1, "Joining Date is required"),
        Office: z.string().min(1, "Office is required"),
        address: z.string().min(1, "Address is required"),
        emergencyContact: z.string().min(1, "Emergency Contact is required"),
        // password: z.string().min(6, "Password must be at least 6 characters"),
        dateOfBirth: z.string().min(1, "Date of Birth is required"),
    });

    type EmployeeFormValues = z.infer<typeof employeeSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EmployeeFormValues>({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
            fullName: employee.fullName ?? "",
            userName: employee.username ?? "",
            email: employee.email ?? "",
            phone: employee.phone ?? "",
            role:
                employee.role === "Admin" || employee.role === "User"
                    ? employee.role
                    : "User",
            status: "Inactive",
            joiningDate: "",
            Office: employee.Office || "",
            address: employee.address || "",
            emergencyContact: employee.emergencyContact,
            dateOfBirth: "",
        },
    });

    const onSubmit = (data: EmployeeFormValues) => {
        // handle form submission
        console.log(data);
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="size-8 bg-stone-600 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/30 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                    aria-label="Edit"
                >
                    <FaEdit className="size-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[800px] bg-gray-900 backdrop-blur-xl text-white border-0">
                <DialogHeader>
                    <DialogTitle>Edit Employee</DialogTitle>
                    <DialogDescription>
                        <ScrollArea className="rounded-sm border h-[60vh] sm:h-[70vh] border-gray-500">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4 p-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8 text-gray-300">
                                    <div>
                                        <label>Full Name</label>
                                        <input
                                            {...register("fullName")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.fullName && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.fullName.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Username</label>
                                        <input
                                            {...register("userName")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.userName && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.userName.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <input
                                            {...register("email")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.email && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Phone</label>
                                        <input
                                            {...register("phone")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.phone && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.phone.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Role</label>
                                        <select
                                            {...register("role")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-700"
                                        >
                                            <option value="">Select</option>
                                            <option value="Admin">Admin</option>
                                            <option value="User">User</option>
                                        </select>
                                        {errors.role && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.role.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Status</label>
                                        <select
                                            {...register("status")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-700"
                                        >
                                            <option value="">Select</option>
                                            <option value="Active">
                                                Active
                                            </option>
                                            <option value="Inactive">
                                                Inactive
                                            </option>
                                        </select>
                                        {errors.status && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.status.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Joining Date</label>
                                        <input
                                            type="date"
                                            {...register("joiningDate")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.joiningDate && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.joiningDate.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Office</label>
                                        <input
                                            {...register("Office")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.Office && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.Office.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Address</label>
                                        <input
                                            {...register("address")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.address && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.address.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label>Emergenty Contact</label>
                                        <input
                                            {...register("emergencyContact")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.emergencyContact && (
                                            <span className="text-red-500 block mt-2">
                                                {
                                                    errors.emergencyContact
                                                        .message
                                                }
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
                                </div>

                                <button
                                    type="submit"
                                    className="border border-gray-500 bg-gray-600 text-white cursor-pointer hover:bg-gray-700 rounded-md p-2 mt-4 duration-300 "
                                >
                                    Create Client
                                </button>
                            </form>
                        </ScrollArea>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default EditEmployee;
