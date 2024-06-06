import React, { useState } from "react";

const ServicesFilter = ({typeService, setTypeService, serviceStatus, setServiceStatus, serviceName, setServiceName}) => {
  const [serviceType, setServiceType] = useState(true);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div class="flex items-center">
          <input
            id="default-radio-1"
            onClick={(e) => {setServiceType(true)}}
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-800 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Default radio
          </label>
        </div>
        <div class="flex items-center">
          <input
            checked
            onClick={()=>setServiceType(false)}
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-800 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Checked state
          </label>
        </div>
      </div>
      {serviceType && (
        <div className="flex flex-col gap-2">
          <span>Service Type</span>
          <select
            id="type"
            onChange={(e)=> setTypeService(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[380px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>All time</option>
            <option value="All">Show all service type</option>
            <option value="Class">Class</option>
            <option value="Appointment">Appointment</option>
            <option value="Facility">Facility</option>
            <option value="Class pack">Class Pack</option>
            <option value="Membership">Membership</option>
            <option value="General Items">General Items</option>

          </select>

          <span className="mt-2">Status</span>
          <select
            id="type"
            onChange={(e)=>setServiceStatus(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[380px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected value="All">Show All</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Disable">Disable</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      )}

      {!serviceType && (
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
          placeholder="Search Service name"
          value=""
          onChange={(e) => setSeviceName(e.target.value)}
          required
        />
      </div>
      )}
    </div>
  );
};

export default ServicesFilter;
