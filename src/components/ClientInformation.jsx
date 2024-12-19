import { useForm } from 'react-hook-form';
import { useDataContext } from '../contexts/DataContext';
import FormField from './Generic/FormField';
import PropTypes from 'prop-types';
import Button from './Generic/Button';
import { useTheme } from '../contexts/ThemeContext';

function ClientInformation({ handleNext }) {
  const { isDark } = useTheme();
  const { setFormData, formData } = useDataContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clientName: formData.clientName || '',
      email: formData.email || '',
      region: formData.region || '',
    },
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    handleNext();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${isDark ? 'text-white' : 'text-gray-800'}`}
    >
      <h2 className='text-lg font-bold'>Step 1: Personal Info</h2>

      <FormField
        name='clientName'
        placeholder='Name'
        register={register}
        rules={{ required: 'Client Name is required' }}
        errors={errors}
        label='Client Name'
      />
      <FormField
        name='email'
        placeholder='Email'
        register={register}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: 'Invalid email address',
          },
        }}
        errors={errors}
        label='Email'
      />

      <div className={isDark ? 'text-white' : 'text-gray-800'}>
        <label htmlFor='region' className='block text-sm font-medium'>
          Region
        </label>
        <select
          id='region'
          {...register('region', { required: 'Region is required' })}
          className={`w-full p-2 mt-1 border rounded bg-inherit ${
            isDark ? 'text-white bg-gray-800' : 'text-gray-800'
          }`}
        >
          <option value=''>Select Region</option>
          <option value='North America'>North America</option>
          <option value='Europe'>Europe</option>
          <option value='Asia'>Asia</option>
        </select>
        {errors.region && (
          <p className='text-red-500 text-xs'>{errors.region.message}</p>
        )}
      </div>

      <div className='flex justify-end mt-6'>
        <Button
          type='submit'
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
          btnLabel='Next'
        />
      </div>
    </form>
  );
}

ClientInformation.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default ClientInformation;
