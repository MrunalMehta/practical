import PropTypes from 'prop-types';
import Button from './Button';
import { Edit } from 'lucide-react';
function TableBody({ tableData, columns, isDark, handleEdit }) {
  return (
    <tbody
      className={`divide-y ${isDark ? 'divide-white' : 'divide-gray-100'}`}
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
                isDark ? 'text-white' : 'text-gray-400 hover:text-gray-600'
              }
              onClick={() => handleEdit(item.id)}
              btnLabel={<Edit size={20} />}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  columns: PropTypes.array,
  handleEdit: PropTypes.func,
  isDark: PropTypes.bool,
  tableData: PropTypes.array,
};

export default TableBody;
