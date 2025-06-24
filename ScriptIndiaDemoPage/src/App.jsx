import { useState } from "react";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAttendReportsOpen, setIsAttendReportsOpen] = useState(false);
  const [isSalaryReportsOpen, setIsSalaryReportsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="flex m-8 justify-between items-center">
          <h1 className="text-xl font-semibold tracking-widest">
            SCRIPT <span className="bg-blue-600 p-1 text-white">INDIA</span>
          </h1>
          <button className="text-white bg-blue-400 p-2 px-4 border-2 border-blue-400 rounded-xl">
            Logout
          </button>
        </header>

        <div className="flex flex-1">
          <div className="w-64 bg-white">
            <ul className="mx-8 space-y-6">
              <li>🧩Dashboard</li>
              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center w-full text-left"
                >
                  🏦Masters
                  <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
                </button>
              </li>
              <li>🙍‍♂️Employee Master</li>
              <li>✔️Punch Management</li>
              <li>
                <button
                  onClick={() => setIsAttendReportsOpen(!isAttendReportsOpen)}
                  className="flex items-center w-full text-left"
                >
                  🖨️Attend Reports
                  <span className="ml-2">
                    {isAttendReportsOpen ? "▲" : "▼"}
                  </span>
                </button>

                {isAttendReportsOpen && (
                  <ul className="mx-8 space-y-6 pt-4">
                    <li>In Out</li>
                    <li>Absent Present</li>
                    <li>Employee Punch</li>
                    <li>Geofence Report</li>
                    <li>Late Coming</li>
                    <li>Early Going</li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={() => setIsSalaryReportsOpen(!isSalaryReportsOpen)}
                  className="flex items-center w-full text-left"
                >
                  📄Salary Reports
                  <span className="ml-2">
                    {isSalaryReportsOpen ? "▲" : "▼"}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-8 bg-gray-200">
            <div>
              <form className="space-x-15 mx-18">
                <select
                  name=""
                  id=""
                  className="border-2 border-gray-400 p-2 pr-8 w-56 rounded"
                >
                  <option value="">Select Location</option>
                  <option value="vapi">VAPI</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="surat">Surat</option>
                  <option value="ahmedabad">Ahmedabad</option>
                </select>
                <input
                  type="date"
                  className="border-2 border-gray-400 p-2 w-56 rounded"
                />
                <button
                  type="submit"
                  className="bg-blue-300 border-2 border-blue-300 rounded px-3 py-2"
                >
                  View
                </button>
              </form>
              <div className="grid grid-cols-4 gap-6 m-8">
                <div className="text-white font-semibold bg-blue-500 py-5 rounded-2xl text-center">
                  10 <br /> Total Employees
                </div>
                <div className="text-white font-semibold bg-orange-500 py-5 rounded-2xl text-center">
                  4 <br /> Total Present
                </div>
                <div className="text-white font-semibold bg-sky-400 py-5 rounded-2xl text-center">
                  6 <br /> Total Absent
                </div>
                <div className="text-white font-semibold bg-red-500 py-5 rounded-2xl text-center">
                  4 <br /> Total Missed Punch
                </div>
                <div className="text-white font-semibold bg-purple-500 py-5 rounded-2xl text-center">
                  0 <br /> Total Visit
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="p-4 flex justify-end mt-auto">
          <h1>
            Designed and Developed by{" "}
            <a href="" className="text-blue-600 underline">
              SCRIPT INDIA
            </a>{" "}
            ©️2025
          </h1>
        </footer>
      </div>
    </>
  );
}

export default App;
