import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDataContext } from '../contexts/DataContext';
import FormField from './Generic/FormField';
import Button from './Generic/Button';

function ProjectDetail({ handlePrev, handleClose }) {
  const {
    setTableData,
    setFormData,
    formData,
    isEditMode,
    setIsEditMode,
    tableData,
    setOriginalData,
  } = useDataContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projectName: formData.projectName || '',
      details: formData.details || '',
      techStack: formData.techStack || '',
      resources: formData.resources || '',
      hours: formData.hours || '',
    },
  });

  const onSubmit = (data) => {
    const updatedFormData = { ...formData, ...data };

    if (isEditMode) {
      const updatedTableData = tableData.filter(
        (item) => item.id !== formData.id
      );
      setTableData([...updatedTableData, updatedFormData]);
      setOriginalData([...updatedTableData, updatedFormData]);
      setIsEditMode(false);
    } else {
      setTableData((prev) => [...prev, updatedFormData]);
      setOriginalData((prev) => [...prev, updatedFormData]);
    }
    setFormData(updatedFormData);
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='text-gray-800'>
      <div>
        <h2 className='text-lg font-bold'>Step 3: Project Info</h2>
        <FormField
          name='projectName'
          placeholder='Project Name'
          register={register}
          rules={{ required: 'Project Name is required' }}
          errors={errors}
          label='Project Name'
        />

        <FormField
          name='details'
          placeholder='Details'
          register={register}
          rules={{ required: 'Details are required' }}
          errors={errors}
          type='textarea'
          label='Project Details'
        />

        <FormField
          name='techStack'
          placeholder='Tech Stack'
          register={register}
          rules={{
            required: 'Tech Stack is required',
            pattern: {
              value: /^[A-Za-z\s,.]+$/,
              message: 'Tech Stack must contain only letters and spaces',
            },
          }}
          errors={errors}
          label='Tech Stack'
        />
        <FormField
          name='resources'
          placeholder='Required Resources'
          register={register}
          type='number'
          rules={{
            required: 'Resources are required',
            min: { value: 1, message: 'Resources must be greater than 0' },
          }}
          errors={errors}
          label='Resources'
        />
        <FormField
          name='hours'
          placeholder='Hours'
          type='number'
          register={register}
          rules={{
            required: 'Hours are required',
            min: { value: 1, message: 'Hours must be greater than 0' },
          }}
          errors={errors}
          label='Hours'
        />
      </div>

      <div className='flex justify-between mt-6'>
        <Button
          btnLabel='Prev'
          onClick={handlePrev}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
        />
        <Button
          btnLabel='Next'
          onClick={handleSubmit(onSubmit)}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
        />
      </div>
    </form>
  );
}

ProjectDetail.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default ProjectDetail;
