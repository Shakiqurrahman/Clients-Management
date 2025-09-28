import { toast } from "react-hot-toast";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDeleteEmployeeMutation } from "../redux/features/employee/employeeApi";
import EditEmployee from "./EditEmployee";
import EmployeeDetails from "./EmployeeDetails";
import { Button } from "./ui/button";

export interface IEmployee {
    id?: number;
    fullName?: string;
    position?: string;
    department?: string;
    email?: string;
    phone?: string;
    username?: string;
    role?: string;
    password?: string;
    address?: string;
    Office?: string;
    emergencyContact?: string;
}

const EmployeeCard = ({ employee }: { employee: IEmployee }) => {
    const [deleteEmployee, { isLoading: isDeleting }] =
        useDeleteEmployeeMutation();

    const handleDelete = async (id: number) => {
        try {
            if (
                window.confirm("Are you sure you want to delete this employee?")
            ) {
                await deleteEmployee(id);
                toast.success("Employee deleted successfully");
            }
        } catch (error) {
            console.error("Failed to delete employee:", error);
            toast.error("Failed to delete employee");
        }
    };

    return (
        <div className="flex justify-center items-center py-2 group overflow-hidden">
            <div className="w-full h-full max-w-md bg-white/10 border border-stone-700 rounded-xl shadow-lg p-6 relative transition hover:shadow-xl">
                <div className="absolute top-4 right-4 flex-col gap-2 flex transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <EmployeeDetails employee={employee} />
                    <EditEmployee employee={employee} />
                    <Button
                        onClick={() => employee.id && handleDelete(employee.id)}
                        variant="outline"
                        className="size-8 bg-stone-600 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/30 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                        aria-label="Delete"
                    >
                        {isDeleting ? (
                            <CgSpinnerTwoAlt className="size-4 animate-spin duration-300" />
                        ) : (
                            <FaRegTrashAlt className="size-4" />
                        )}
                    </Button>
                </div>
                <div className="space-y-1 mt-2 text-gray-100">
                    <div>
                        <span className="font-semibold text-stone-200">
                            Full Name:
                        </span>
                        <span className="ml-2">
                            {employee.fullName || "N/A"}
                        </span>
                    </div>
                    <div>
                        <span className="font-semibold text-stone-200">
                            Username:
                        </span>
                        <span className="ml-2">
                            {employee.username || "N/A"}
                        </span>
                    </div>
                    <div className="flex gap-1">
                        <span className="font-semibold text-stone-200">
                            Email:
                        </span>
                        <p className="ml-2 truncate block max-w-[200px] text-gray-300">
                            {employee.email || "N/A"}
                        </p>
                    </div>
                </div>

                <div>
                    <span className="font-semibold text-stone-200">Role:</span>
                    <span className="ml-2 capitalize">
                        {employee.role?.toLowerCase() || "N/A"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
