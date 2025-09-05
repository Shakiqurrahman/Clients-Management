import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";
import { Button } from "./ui/button";

interface IEmployee {
    id?: number;
    name?: string;
    position?: string;
    department?: string;
    email?: string;
    phone?: string;
    username?: string;
    role?: string;
    password?: string;
}

const EmployeeCard = ({ employee }: { employee: IEmployee }) => {
    return (
        <div className="flex justify-center items-center py-2 group overflow-hidden">
            <div className="w-full max-w-md bg-white/10 border border-stone-700 rounded-xl shadow-lg p-6 relative transition hover:shadow-xl">
                <div className="absolute top-4 right-4 flex-col gap-2 flex transition-all duration-300 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <Button
                        variant="outline"
                        className="size-8 bg-stone-600 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/30 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                        aria-label="View"
                    >
                        <FaEye className="size-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="size-8 bg-stone-600 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/30 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                        aria-label="Edit"
                    >
                        <FaEdit className="size-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="size-8 bg-stone-600 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/30 transition duration-200 cursor-pointer p-1 rounded-sm flex items-center justify-center"
                        aria-label="Delete"
                    >
                        <FaRegTrashAlt className="size-4" />
                    </Button>
                </div>
                <div className="space-y-1 mt-2 text-gray-100">
                    <div>
                        <span className="font-semibold text-stone-200">
                            Full Name:
                        </span>
                        <span className="ml-2">{employee.name || "N/A"}</span>
                    </div>
                    <div>
                        <span className="font-semibold text-stone-200">
                            Username:
                        </span>
                        <span className="ml-2">
                            {employee.username || "N/A"}
                        </span>
                    </div>
                    <div></div>
                    <span className="font-semibold text-stone-200">Email:</span>
                    <span className="ml-2">{employee.email || "N/A"}</span>
                </div>
                <div>
                    <span className="font-semibold text-stone-200">
                        Password:
                    </span>
                    <span className="ml-2">{employee.password || "N/A"}</span>
                </div>
                <div>
                    <span className="font-semibold text-stone-200">Role:</span>
                    <span className="ml-2">{employee.role || "N/A"}</span>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
