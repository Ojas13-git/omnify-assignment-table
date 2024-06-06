import React, { useState } from "react";
import ServicesFilter from "./ServicesFilter";

const DateFilter = ({ startDate, setStartDate, endDate, setEndDate, dateStatus, setDateStatus }) => {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span>Show orders for</span>
        <select
          id="countries"
          onChange={(e)=> setDateStatus(e.target.value)}
          className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="All">
            All Time
          </option>
          <option value="Last 30 days">Last 30 days</option>
          <option value="This month">This month</option>
          <option value="Last Month">Last Month</option>
          <option value="Quater">Quater</option>
        </select>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span>From</span>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <span>To</span>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const PeopleFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mt-2">
      <div className="relative w-full ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
              stroke="#A1A1AA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14.0001L11.1 11.1001"
              stroke="#A1A1AA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[380px] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Payer or attendee name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

const Filters = ({handleDateFilterChange}) => {
  const [filterType, setFilterType] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [typeService, setTypeService] = useState("");
  const [serviceStatus, setServiceStatus] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [dateStatus, setDateStatus] = useState("")

  function applyFilter() {
    if(filterType == 1){
      // console.log(dateStatus)
      handleDateFilterChange(dateStatus)
    }
  }
  return (
    <div className="flex-col flex justify-between absolute mt-12 z-10 h-[400px] w-[612px] bg-gray-200 gap-10 ">
      <div className="flex p-4 gap-2 divide-x-8">
        {/* Sidebar */}
        <div className="flex-col gap-4">
          <div
            className={`p-2 ${filterType == 1 ? "bg-gray-300" : ""}`}
            onClick={() => setFilterType(1)}
          >
            Scheduled Date
          </div>
          <div
            className={`p-2 ${filterType == 2 ? "bg-gray-300" : ""}`}
            onClick={() => setFilterType(2)}
          >
            People
          </div>
          <div
            className={`p-2 ${filterType == 3 ? "bg-gray-300" : ""}`}
            onClick={() => setFilterType(3)}
          >
            Services/Products
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-200">
          {filterType === 1 && (
            <DateFilter
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setDateStatus={setDateStatus}
              dateStatus={dateStatus}
            />
          )}
          {filterType === 2 && (
            <PeopleFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          )}
          {filterType === 3 && (
            <ServicesFilter
              setTypeService={setTypeService}
              serviceName={serviceName}
              typeService={typeService}
              setServiceName={setServiceName}
              serviceStatus={serviceStatus}
              setServiceStatus={setServiceStatus}
            />
          )}
        </div>
      </div>

      {/* buttons */}
      <div className="flex flex-end justify-end mb-4">
        <button
          type="button"
          class="text-gray bg-gray-300  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Reset to Default
        </button>
        <button
          type="button"
          onClick={applyFilter}
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-gray-900 rounded-lg  border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filters;
