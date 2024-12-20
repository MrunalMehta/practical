import PropTypes from 'prop-types';

function TableHeader({ columns, isDark }) {
  return (
    <thead
      className={`${
        isDark ? 'bg-gray-800 border-white' : 'bg-gray-50 border-gray-100'
      } border-b`}
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
  );
}

TableHeader.propTypes = {
  columns: PropTypes.array,
  isDark: PropTypes.bool,
};

export default TableHeader;
