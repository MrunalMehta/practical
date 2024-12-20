import { Search } from 'lucide-react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
function SearchInput({ searchQuery, setSearchQuery, isDark }) {
  const intl = useIntl();
  return (
    <div className='relative mb-4 lg:mb-0'>
      <input
        type='text'
        placeholder={intl.formatMessage({ id: 'table.search.searchClient' })}
        className={`${
          isDark
            ? 'text-white bg-gray-800 border-white'
            : 'text-gray-800 bg-white border-gray-300'
        } p-2 border rounded w-36 lg:w-60 pl-10`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search
        size={20}
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
          isDark ? 'text-white' : 'text-gray-400'
        }`}
      />
    </div>
  );
}

SearchInput.propTypes = {
  isDark: PropTypes.bool,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};

export default SearchInput;
