/* eslint-disable react/prop-types */
import { Edit } from 'lucide-react';

function ClientTable({tableData, setTableData, setFormData, setIsOpen, setIsEditMode}) {
  const handleEdit = (id)=>{
    const editData = tableData.find((item) => item.id === id)
    setFormData(editData)
    setIsOpen(true)
    setIsEditMode(true)
  }
  return (
    <div className='bg-white rounded-lg shadow-sm'>
      <div className='flex justify-between items-center p-6 border-b border-gray-100'>
        <h2 className='text-gray-800 text-lg font-semibold'>Client Data</h2>
        <button className='text-blue-500 text-sm hover:text-blue-600'>
          View all Client
        </button>
      </div>

      {tableData?.length > 0 && (
        <div className='overflow-x-auto max-w-2xl'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b border-gray-100'>
              <tr>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Client Name
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Region
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Email
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Organization Name
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Registered No.
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Address
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Project Name
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Detail
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Tech Stack
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Resources
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Hours
                </th>
                <th className='text-left px-6 py-3 text-sm font-medium text-gray-500'>
                  Actions
                </th>
                <th className='px-6 py-3'></th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {tableData.map((item) => (
                <tr key={item.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>
                      {item.clientName}
                    </span>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>{item.region}</span>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>{item.email}</span>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>
                      {item.orgName}
                    </span>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>
                      {item.registerNo}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>
                      {item.address}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>
                      {item.projectName}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>
                      {item.details}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>
                      {item.techStack}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>
                      {item.resources}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-700'>{item.hours}</span>
                  </td>
                  <td className='px-6 py-4'>
                    <button className='text-gray-400 hover:text-gray-600' onClick={()=>handleEdit(item.id)}>
                      <Edit size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ClientTable;
