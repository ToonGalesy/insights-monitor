import React from 'react';

const mats = [
    {
      matName: 'MAT Name 1',
      dataRefresh: true,
      powerBiRefresh: true,
    },
    {
        matName: 'MAT Name 2',
        dataRefresh: false,
        powerBiRefresh: true,
    },
    {
        matName: 'MAT Name 3',
        dataRefresh: true,
        powerBiRefresh: false,
    }
  ];

const Dashboard: React.FC = () => {
    return (
        <div className='flex grow-into-flexbox mt-16' data-testid='dashboard'>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    MAT Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Data Refresh
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Power BI Refresh
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <span className="sr-only">Details</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mats.map(mat => (
                  <tr key={mat.matName}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{mat.matName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <span
                        className={mat.dataRefresh ? 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800' : 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'}
                      >
                        {mat.dataRefresh ? 'Refreshed' : 'Failed'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={mat.powerBiRefresh ? 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800' : 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'}
                      >
                        {mat.powerBiRefresh ? 'Refreshed' : 'Failed'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>        
        </div>
    )
}

export default Dashboard;