import { useForm } from 'react-hook-form';

/* eslint-disable react/prop-types */
function ProjectDetail({ handleClose, setFormData, formData, handlePrev, isEditMode, setIsEditMode, tableData, setTableData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      projectName: formData.projectName || "",
      details: formData.details || "",
      techStack: formData.techStack || "",
      resources: formData.resources || "",
      hours: formData.hours || '',
    }
  });

  const onSubmit = (data) => {
    if(isEditMode){
      const data = tableData.filter(item=> item.id !== formData.id)
      console.log('data', [...data, formData])
      setTableData([...data, formData])
    }else{
      console.log('formData123',{...formData, ...data})
      setFormData({...formData, ...data});
      setTableData((prev)=> [...prev, {...formData,...data}])
    }
    handleClose({submittedFromLastStep: true});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='text-gray-800'>
      <div>
        <h2 className='text-lg font-bold'>Step 3: Project Info</h2>

        <div>
          <input
            type='text'
            placeholder='Project Name'
            className='w-full p-2 mt-4 border rounded'
            {...register('projectName', {
              required: 'Project Name is required',
            })}
          />
          {errors.projectName && (
            <p className='text-red-500 text-xs'>{errors.projectName.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder='Details'
            className='w-full p-2 mt-2 border rounded'
            {...register('details', { required: 'Details are required' })}
          />
          {errors.details && (
            <p className='text-red-500 text-xs'>{errors.details.message}</p>
          )}
        </div>

        <div>
          <input
            type='text'
            placeholder='Tech Stack'
            className='w-full p-2 mt-2 border rounded'
            {...register('techStack', { required: 'Tech Stack is required' })}
          />
          {errors.techStack && (
            <p className='text-red-500 text-xs'>{errors.techStack.message}</p>
          )}
        </div>

        <div>
          <input
            type='text'
            placeholder='Required Resources'
            className='w-full p-2 mt-2 border rounded'
            {...register('resources', {
              required: 'Required Resources are required',
            })}
          />
          {errors.resources && (
            <p className='text-red-500 text-xs'>{errors.resources.message}</p>
          )}
        </div>

        <div>
          <input
            type='number'
            placeholder='Hours'
            className='w-full p-2 mt-2 border rounded'
            {...register('hours', {
              required: 'Hours are required',
              min: { value: 1, message: 'Hours must be greater than 0' },
            })}
          />
          {errors.hours && (
            <p className='text-red-500 text-xs'>{errors.hours.message}</p>
          )}
        </div>
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

export default ProjectDetail;
