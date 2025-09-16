import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { z } from "zod";
import { useUpdateEmployeeMutation } from "../redux/features/employee/employeeApi";
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
    const [updateEmployee, { isLoading }] = useUpdateEmployeeMutation();
    const [showDialog, setShowDialog] = useState(false);

    const employeeSchema = z.object({
        fullName: z.string().min(1, "Name is required"),
        username: z.string().min(1, "Username is required"),
        email: z.string().email("Email must be a valid email address"),
        role: z.enum(["ADMIN", "STAFF", "VIEWER"]),
    });

    type EmployeeFormValues = z.infer<typeof employeeSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EmployeeFormValues>({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
            fullName: employee.fullName ?? "",
            username: employee.username ?? "",
            email: employee.email ?? "",
            role:
                employee.role === "ADMIN"
                    ? "ADMIN"
                    : employee.role === "VIEWER"
                    ? "VIEWER"
                    : employee.role === "STAFF"
                    ? "STAFF"
                    : "STAFF",
        },
    });

    const onSubmit = async (data: EmployeeFormValues) => {
        try {
            const payload = { ...data, id: employee.id };
            await updateEmployee(payload);
            toast.success("Employee updated successfully");
            setShowDialog(false);
            reset();
        } catch (error) {
            console.error("Failed to update employee:", error);
            toast.error("Failed to create an employee");
        }
    };
    return (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
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
                                            {...register("username")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.username && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.username.message}
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
                                        <label>Role</label>
                                        <select
                                            {...register("role")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2 bg-gray-700"
                                        >
                                            <option value="">Select</option>
                                            <option value="ADMIN">Admin</option>
                                            <option value="STAFF">Staff</option>
                                            <option value="VIEWER">
                                                Viewer
                                            </option>
                                        </select>
                                        {errors.role && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.role.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="border border-gray-500 bg-gray-600 text-white cursor-pointer hover:bg-gray-700 rounded-md p-2 mt-4 duration-300 "
                                >
                                    {isLoading ? (
                                        <CgSpinnerTwoAlt className="animate-spin duration-300 text-xl" />
                                    ) : (
                                        <span>Update</span>
                                    )}
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
