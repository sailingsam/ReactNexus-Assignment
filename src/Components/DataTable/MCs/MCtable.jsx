export default () => {
  const tableItems = [
    {
      name: "Sweta Tanwar",
      position: "Senior Software Engineer, Rippling",
      twitter: "https://twitter.com/SwetaTanwar",
      linkedin: "https://www.linkedin.com/in/swetatanwar/",
    },
    {
      name: "Shrilakshmi Shastry",
      position: "SDE-1, smallcase",
      twitter: "https://twitter.com/shrilakshmihg",
      linkedin: "https://www.linkedin.com/in/shrilakshmi-shastry-29737516a",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-10">
      <div className="max-w-lg m-auto text-center">
        <h3 className="text-white text-xl font-bold sm:text-2xl">MC's</h3>
      </div>
      <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr className="divide-x">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Twitter</th>
              <th className="py-3 px-6">LinkedIn</th>
            </tr>
          </thead>
          <tbody className="text-white divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx} className="divide-x">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                  <span>{idx + 1}</span>
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={item.twitter}>{item.twitter}</a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={item.linkedin}>{item.linkedin}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
