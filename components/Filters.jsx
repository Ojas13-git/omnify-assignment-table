import React, { useState } from 'react'

const PeopleFilter = () => {
  return (
    <div>
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14.0001L11.1 11.1001" stroke="#A1A1AA" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
        <input
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Payer or attendee name"
          required
        />
      </div>
    </div>
  );
};

const ServicesFilter = () => {
  return (
    <div>ServicesFilter</div>
  )
}

const DateFilter = () => {
  return (
    <div className="flex-col gap-2">
      <div>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>All time</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="flex justify-between gap-4">
        <div class="">
          <input
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>

        <div class="">
          <input
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>
      </div>
    </div>
  );
};

const Filters = () => {
    const [filterType, setFilterType] = useState(1)
  return (
    <div className='flex'>
        <div>

            {filterType === 1 && <DateFilter/> }
           { filterType === 2 && <PeopleFilter/>}
            {filterType === 3 && <ServicesFilter/>}
        </div>
        <div className='flex-col '>
            <div className='p-2' onClick={()=>setFilterType(1)}>Scheduled Date</div>
            <div className='p-2' onClick={()=>setFilterType(2)}>People</div>
            <div className='p-2' onClick={()=>setFilterType(3)}>Services/Products</div>
        </div>
        
        
    </div>
  )
}

export default Filters