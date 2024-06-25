import React, { useState, useEffect } from "react";

const DataTable = ({ title, data, columns }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(
      data.filter((row) =>
        columns.some((column) => {
          const value = row[column.accessor];
          return value ? value.toString().toLowerCase().includes(searchQuery.toLowerCase()) : false;
        })
      )
    );
  }, [searchQuery, data, columns]);

  return (
    <div className="max-w-screen-xl min-w-96 mx-auto px-4 md:px-8 mt-10">
      <div className="max-w-lg m-auto text-center flex justify-between">
        <h3 className="text-white text-xl font-bold sm:text-2xl">{title}</h3>
        <div className="relative">
          <input
            placeholder="Search by any detail..."
            className="input shadow-lg focus:border-2 border-gray-300 px-5 py-1 rounded-xl w-56 transition-all focus:w-64 outline-none"
            name="search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr className="divide-x">
              {columns.map((column, index) => (
                <th key={index} className="py-3 px-6">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white divide-y">
            {filteredData.map((row, idx) => (
              <tr key={idx} className="divide-x">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                    {column.accessor === "name" ? (
                      <div className="flex items-center gap-x-6">
                        <span>{idx + 1}</span>
                        {row[column.accessor]}
                      </div>
                    ) : (
                      <a href={row[column.accessor]}>{row[column.accessor]}</a>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
