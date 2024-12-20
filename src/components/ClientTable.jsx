import Button from './Generic/Button';
import { FormattedMessage } from 'react-intl';
import TableHeader from './Generic/TableHeader';
import TableBody from './Generic/TableBody';
import SearchInput from './Generic/SearchInput';
import { useClientTable } from '../hooks/useClientTable';

function ClientTable() {
  const {
    columns,
    searchQuery,
    setSearchQuery,
    isDark,
    tableData,
    handleEdit,
    intl,
  } = useClientTable();

  return (
    <div
      className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm`}
    >
      <div
        className={`flex flex-wrap justify-between p-6 border-b ${
          isDark ? 'border-white' : 'border-gray-100'
        }`}
      >
        <h2
          className={`${
            isDark ? 'text-white' : 'text-gray-800'
          } text-lg font-semibold mb-4 lg:mb-0`}
        >
          {intl.formatMessage({ id: 'table.title.clientData' })}
        </h2>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isDark={isDark}
        />
        <Button
          className='text-blue-500 text-sm hover:text-blue-600'
          btnLabel={intl.formatMessage({ id: 'table.lable.viewAllClientBtn' })}
        />
      </div>

      {tableData?.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <TableHeader columns={columns} isDark={isDark} />
            <TableBody
              tableData={tableData}
              columns={columns}
              isDark={isDark}
              handleEdit={handleEdit}
            />
          </table>
        </div>
      ) : (
        <div
          className={`p-6 text-center ${
            isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-500'
          }`}
        >
          <FormattedMessage id='table.search.noData' />
        </div>
      )}
    </div>
  );
}

export default ClientTable;
