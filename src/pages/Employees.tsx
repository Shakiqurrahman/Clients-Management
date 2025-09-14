import { FaSpinner } from "react-icons/fa";
import { GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from "react-router";
import CreateEmployee from "../components/CreateEmployee";
import EmployeeCard, { type IEmployee } from "../components/EmployeeCard";
import { Button } from "../components/ui/button";
import { useGetEmployeesQuery } from "../redux/features/employee/employeeApi";

const Employees = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetEmployeesQuery(undefined);

    return (
        <div className="max-width">
            <div className="flex justify-between">
                <Button
                    variant="outline"
                    className="bg-white/5 border border-stone-500 text-white hover:text-gray-300 hover:bg-white/10 transition duration-300 cursor-pointer flex gap-1 items-center"
                    onClick={() => navigate(-1)}
                >
                    <GrFormPreviousLink /> <span>Back</span>
                </Button>
                <CreateEmployee />
            </div>
            <div className="mt-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4">
                {isLoading ? (
                    <h3 className="text-center w-full flex justify-center col-span-4 mt-10 text-2xl text-gray-500">
                        <FaSpinner className="animate-spin duration-300 text-4xl" />
                    </h3>
                ) : data.length === 0 ? (
                    <h3 className="text-center w-full flex justify-center col-span-4 mt-10 text-xl md:text-2xl text-gray-500">
                        No Employees Found
                    </h3>
                ) : (
                    data?.map((employee: IEmployee, index: number) => (
                        <EmployeeCard key={index} employee={employee} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Employees;
