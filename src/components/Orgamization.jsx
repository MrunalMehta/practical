import { useForm } from 'react-hook-form';

/* eslint-disable react/prop-types */
function Orgamization({ handlePrev, handleNext, setFormData, formData, isEditMode, setIsEditMode, tableData }) {
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
      <div>
        <input
          type='text'
          placeholder='Organization Details'
          className='w-full p-2 mt-4 border rounded'
          {...register('orgName', {
            required: 'Organization Details are required',
          })}
        />
        {errors.orgName && (
          <p className='text-red-500 text-xs'>{errors.orgName.message}</p>
        )}
      </div>

      <div>
        <input
          type='text'
          placeholder='Registered Number'
          className='w-full p-2 mt-2 border rounded'
          {...register('registerNo', {
            required: 'Registered Number is required',
          })}
        />
        {errors.registerNo && (
          <p className='text-red-500 text-xs'>{errors.registerNo.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder='Address'
          className='w-full p-2 mt-2 border rounded'
          {...register('address', { required: 'Address is required' })}
        />
        {errors.address && (
          <p className='text-red-500 text-xs'>{errors.address.message}</p>
        )}
      </div>
      <div className='flex justify-between mt-6'>
        <button
          onClick={handlePrev}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
        >
          Prev
        </button>
        <button
          onClick={handleSubmit(onSubmit)}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default Orgamization;
