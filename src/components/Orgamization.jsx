import { useForm } from 'react-hook-form';
import { useDataContext } from '../contexts/DataContext';
import FormField from './Generic/FormField';
import PropTypes from 'prop-types';
import Button from './Generic/Button';

function Orgamization({ handleNext, handlePrev }) {
  const { setFormData, formData } = useDataContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      orgName: formData.orgName || '',
      registerNo: formData.registerNo || '',
      address: formData.address || '',
    },
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    handleNext();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='text-gray-800'>
      <h2 className='text-lg font-bold'>Step 2: Organization Details</h2>

      <FormField
        name='orgName'
        placeholder='Organization Details'
        register={register}
        rules={{ required: 'Organization Details are required' }}
        errors={errors}
        label='Organization Name'
      />

      <FormField
        name='registerNo'
        placeholder='Registered Number'
        register={register}
        rules={{
          required: 'Registered Number is required',
          minLength: {
            value: 5,
            message: 'Registered Number must be 5 digits',
          },
          maxLength: {
            value: 5,
            message: 'Registered Number must be 5 digits',
          },
        }}
        errors={errors}
        type='number'
        label='Registered Number'
      />

      <FormField
        name='address'
        placeholder='Address'
        register={register}
        rules={{ required: 'Address is required' }}
        errors={errors}
        type='textarea'
        label='Address'
      />
      <div className='flex justify-between mt-6'>
        <Button
          onClick={handlePrev}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
          btnLabel='Prev'
        />
        <Button
          onClick={handleSubmit(onSubmit)}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
          btnLabel='Next'
        />
      </div>
    </form>
  );
}

Orgamization.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default Orgamization;
