import { Edit } from 'lucide-react';
import { useDataContext } from '../contexts/DataContext';
import { useEffect, useState } from 'react';
import Button from './Generic/Button';
import { useTheme } from '../contexts/ThemeContext';
import { useIntl } from 'react-intl';

function ClientTable() {
  const intl = useIntl();
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

  const columns = [
    {
      key: 'clientName',
      label: intl.formatMessage({ id: 'multiStepForm.step1.lable.clientName' }),
    },
    {
      key: 'region',
      label: intl.formatMessage({ id: 'multiStepForm.step1.lable.region' }),
    },
    {
      key: 'email',
      label: intl.formatMessage({ id: 'multiStepForm.step1.lable.email' }),
    },
    {
      key: 'orgName',
      label: intl.formatMessage({ id: 'multiStepForm.step2.lable.orgDetail' }),
    },
    {
      key: 'registerNo',
      label: intl.formatMessage({
        id: 'multiStepForm.step2.lable.registeredNumber',
      }),
    },
    {
      key: 'address',
      label: intl.formatMessage({ id: 'multiStepForm.step2.lable.address' }),
    },
    {
      key: 'projectName',
      label: intl.formatMessage({
        id: 'multiStepForm.step3.lable.projectName',
      }),
    },
    { key: 'details', label: intl.formatMessage({ id: 'details' }) },
    {
      key: 'techStack',
      label: intl.formatMessage({ id: 'multiStepForm.step3.lable.techStack' }),
    },
    {
      key: 'resources',
      label: intl.formatMessage({ id: 'multiStepForm.step3.lable.resources' }),
    },
    {
      key: 'hours',
      label: intl.formatMessage({ id: 'multiStepForm.step3.lable.hours' }),
    },
  ];
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
          {intl.formatMessage({ id: 'table.title.clientData' })}
        </h2>
        <input
          type='text'
          placeholder={intl.formatMessage({ id: 'table.search.searchClient' })}
          className={`${
            isDark ? 'text-white bg-gray-800' : 'text-gray-800'
          } p-2 border rounded w-60`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          className='text-blue-500 text-sm hover:text-blue-600'
          btnLabel={intl.formatMessage({ id: 'table.lable.viewAllClientBtn' })}
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
        <div className='p-6 text-gray-500 text-center'>
          <formatMessage id='table.search.noData' />.
        </div>
      )}
    </div>
  );
}

export default ClientTable;
