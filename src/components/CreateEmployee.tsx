import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { z } from "zod";
import { useCreateEmployeeMutation } from "../redux/features/employee/employeeApi";
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

const CreateEmployee = () => {
    const employeeSchema = z.object({
        fullName: z.string().min(1, "Name is required"),
        username: z.string().min(1, "Username is required"),
        email: z.string().email("Email must be a valid email address"),
        role: z.enum(["ADMIN", "STAFF"]),
        password: z.string().min(1, "Password is required"),
    });

    type EmployeeFormValues = z.infer<typeof employeeSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EmployeeFormValues>({
        resolver: zodResolver(employeeSchema),
    });

    const [createEmployee, { isLoading }] = useCreateEmployeeMutation();

    const [showDialog, setShowDialog] = useState(false);

    const onSubmit = async (data: EmployeeFormValues) => {
        try {
            await createEmployee(data);
            toast.success("Employee created successfully");
            // ✅ optionally reset form or close dialog here
            setShowDialog(false);
            reset();
        } catch (error) {
            console.error("Failed to create employee:", error);
        }
    };

    return (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-white/5 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/10 transition duration-300 cursor-pointer flex gap-2 items-center"
                >
                    <FaUserPlus />
                    Add Employee
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[800px] bg-gray-900 backdrop-blur-xl text-white border-0">
                <DialogHeader>
                    <DialogTitle>Create Employee</DialogTitle>
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
                                        <label>Password</label>
                                        <input
                                            {...register("password")}
                                            className="border border-gray-500 w-full outline-0 rounded-md px-2 py-1 text-gray-200 mt-2"
                                        />
                                        {errors.password && (
                                            <span className="text-red-500 block mt-2">
                                                {errors.password.message}
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
                                        <span>Create Employee</span>
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

export default CreateEmployee;
