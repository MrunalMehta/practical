import PropTypes from 'prop-types';
import { useTheme } from '../../contexts/ThemeContext';
function FormField({
  label = '',
  name = '',
  register = () => {},
  rules = {},
  errors = {},
  type = 'text',
  placeholder = '',
  className = '',
}) {
  const { isDark } = useTheme();
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';
  return (
    <div className='my-4'>
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium ${
            isDark ? 'text-white' : 'text-gray-700 '
          } mb-1`}
        >
          {label}
        </label>
      )}

      <InputComponent
        id={name}
        type={type !== 'textarea' ? type : undefined}
        placeholder={placeholder}
        className={`bg-inherit w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
          ${isDark ? 'text-white bg-gray-800' : 'text-gray-800'}
          ${errors[name] ? 'border-red-500' : 'border-gray-300'}
          ${type === 'textarea' ? 'min-h-[100px]' : ''}
          ${className}`}
        {...register(name, rules)}
      />

      {errors[name] && (
        <p className='mt-1 text-xs text-red-500'>{errors[name].message}</p>
      )}
    </div>
  );
}

FormField.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rules: PropTypes.object,
  type: PropTypes.string,
};

export default FormField;
