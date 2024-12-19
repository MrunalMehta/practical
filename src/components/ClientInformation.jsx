import { useForm } from 'react-hook-form';

/* eslint-disable react/prop-types */
function ClientInformation({ handleNext, setFormData, formData, isEditMode, setIsEditMode }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      clientName: formData.clientName || "",
      email: formData.email || "",
      region: formData.region || "",
    }
  });

  const onSubmit = (data) => {
      setFormData((prev) => ({ ...prev, ...data }));
      handleNext();
    
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-gray-800">
      <h2 className="text-lg font-bold">Step 1: Personal Info</h2>

      <div className="mt-4">
        <label htmlFor="clientName" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="clientName"
          type="text"
          placeholder="Name"
          className="w-full p-2 mt-1 border rounded"
          {...register('clientName', { required: 'Client Name is required' })}
        />
        {errors.clientName && (
          <p className="text-red-500 text-xs">{errors.clientName.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 mt-1 border rounded"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="region" className="block text-sm font-medium">
          Region
        </label>
        <select
          id="region"
          {...register('region', { required: 'Region is required' })}
          className="w-full p-2 mt-1 border rounded"
        >
          <option value="">Select Region</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
        </select>
        {errors.region && (
          <p className="text-red-500 text-xs">{errors.region.message}</p>
        )}
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default ClientInformation;
