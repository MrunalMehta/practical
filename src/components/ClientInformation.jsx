import { useForm } from 'react-hook-form';
import { useDataContext } from '../contexts/DataContext';
import FormField from './Generic/FormField';
import PropTypes from 'prop-types';
import Button from './Generic/Button';
import { useTheme } from '../contexts/ThemeContext';
import { FormattedMessage, useIntl } from 'react-intl';

function ClientInformation({ handleNext }) {
  const intl = useIntl();
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
      <h2 className='text-lg font-bold'>
        <FormattedMessage id='multiStepForm.step1.title' />
      </h2>

      <FormField
        name='clientName'
        placeholder={intl.formatMessage({
          id: 'multiStepForm.step1.lable.clientName',
        })}
        register={register}
        rules={{
          required: intl.formatMessage({
            id: 'multiStepForm.step1.lable.clientName.requiredErrorMsg',
          }),
        }}
        errors={errors}
        label={intl.formatMessage({
          id: 'multiStepForm.step1.lable.clientName',
        })}
      />
      <FormField
        name='email'
        placeholder={intl.formatMessage({
          id: 'multiStepForm.step1.lable.email',
        })}
        register={register}
        rules={{
          required: intl.formatMessage({
            id: 'multiStepForm.step1.lable.email.requiredErrorMsg',
          }),
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: intl.formatMessage({
              id: 'multiStepForm.step1.lable.email.errorMsg',
            }),
          },
        }}
        errors={errors}
        label={intl.formatMessage({ id: 'multiStepForm.step1.lable.email' })}
      />

      <div className={isDark ? 'text-white' : 'text-gray-800'}>
        <label htmlFor='region' className='block text-sm font-medium'>
          {intl.formatMessage({ id: 'multiStepForm.step1.lable.region' })}
        </label>
        <select
          id='region'
          {...register('region', {
            required: intl.formatMessage({
              id: 'multiStepForm.step1.lable.region.requiredErrorMsg',
            }),
          })}
          className={`w-full p-2 mt-1 border rounded ${
            errors.region ? 'border-red-500' : ''
          } ${isDark ? 'text-white bg-gray-800' : 'text-gray-800'}`}
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
