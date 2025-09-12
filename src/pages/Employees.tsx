import { GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from "react-router";
import CreateEmployee from "../components/CreateEmployee";
import EmployeeCard from "../components/EmployeeCard";
import { Button } from "../components/ui/button";
import { employeeFields } from "../constants/AnalyticsCardData";

const Employees = () => {
    const navigate = useNavigate();
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
                {employeeFields.map((employee, index) => (
                    <EmployeeCard key={index} employee={employee} />
                ))}
            </div>
        </div>
    );
};

export default Employees;
