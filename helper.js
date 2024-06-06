const helperFunctions = {
    // Function to filter data by date
filterDataByDate : (data, filter) => {
    console.log(data);
    console.log(filter);
    const now = new Date();
    return data.filter((item) => {
      const date = new Date(item.date);
      switch (filter) {
        case 'All Time':
          return true;
        case 'Last 30 days':
          return now - date <= 30 * 24 * 60 * 60 * 1000;
        case 'This month':
          return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
        case 'Quarter':
          const currentQuarter = Math.floor(now.getMonth() / 3);
          const itemQuarter = Math.floor(date.getMonth() / 3);
          return currentQuarter === itemQuarter && date.getFullYear() === now.getFullYear();
        default:
          return true;
      }
    });
  },
  testing: "ojas",
  filterDataByColumns: (data, filteredCols) => data.map((row) =>
    filteredCols.reduce((acc, key) => {
      if (row[key] !== undefined) {
        acc[key] = row[key];
      }
      return acc;
    }, {})
  ),
}

export default helperFunctions