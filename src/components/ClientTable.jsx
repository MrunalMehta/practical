import { Edit } from 'lucide-react';
import { useDataContext } from '../contexts/DataContext';
import { useEffect, useState } from 'react';
import Button from './Generic/Button';
import { useTheme } from '../contexts/ThemeContext';

const columns = [
  { key: 'clientName', label: 'Client Name' },
  { key: 'region', label: 'Region' },
  { key: 'email', label: 'Email' },
  { key: 'orgName', label: 'Organization Name' },
  { key: 'registerNo', label: 'Registered No.' },
  { key: 'address', label: 'Address' },
  { key: 'projectName', label: 'Project Name' },
  { key: 'details', label: 'Detail' },
  { key: 'techStack', label: 'Tech Stack' },
  { key: 'resources', label: 'Resources' },
  { key: 'hours', label: 'Hours' },
];

function ClientTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { isDark } = useTheme();
  const {
    tableData,
    setTableData,
    setFormData,
    setIsModalShow,
    setIsEditMode,
    originalData,
  } = useDataContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      const filteredData = originalData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(debouncedQuery.toLowerCase())
        )
      );
      setTableData(filteredData);
    } else {
      setTableData(originalData); // Reset to original data
    }
  }, [debouncedQuery, originalData, setTableData]);

  const handleEdit = (id) => {
    const editData = tableData.find((item) => item.id === id);
    setFormData(editData);
    setIsModalShow(true);
    setIsEditMode(true);
  };

  return (
    <div
      className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm`}
    >
      <div
        className={`flex justify-between items-center p-6 border-b ${
          isDark ? 'border-white' : 'border-gray-100'
        }`}
      >
        <h2
          className={`${
            isDark ? 'text-white' : 'text-gray-800'
          } text-lg font-semibold`}
        >
          Client Data
        </h2>
        <input
          type='text'
          placeholder='Search Client'
          className={`${
            isDark ? 'text-white bg-gray-800' : 'text-gray-800'
          } p-2 border rounded w-60`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          className='text-blue-500 text-sm hover:text-blue-600'
          btnLabel='View all Clients'
        />
      </div>

      {tableData?.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead
              className={`${
                isDark
                  ? 'bg-gray-800 border-white'
                  : 'bg-gray-50  border-gray-100'
              }  border-b`}
            >
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`text-left px-6 py-3 text-sm font-medium ${
                      isDark ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody
              className={`divide-y ${
                isDark ? 'divide-white' : 'divide-gray-100'
              }`}
            >
              {tableData.map((item) => (
                <tr
                  key={item.id}
                  className={isDark ? 'hover:bg-gray-900' : 'hover:bg-gray-50'}
                >
                  {columns.map(({ key }) => (
                    <td
                      key={key}
                      className={`px-6 py-4 text-sm ${
                        isDark ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {item[key]}
                    </td>
                  ))}
                  <td className='px-6 py-4'>
                    <Button
                      className={
                        isDark
                          ? 'text-white'
                          : 'text-gray-400 hover:text-gray-600'
                      }
                      onClick={() => handleEdit(item.id)}
                      btnLabel={<Edit size={20} />}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='p-6 text-gray-500 text-center'>No clients found.</div>
      )}
    </div>
  );
}

export default ClientTable;
