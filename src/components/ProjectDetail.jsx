import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDataContext } from '../contexts/DataContext';
import FormField from './Generic/FormField';
import Button from './Generic/Button';
import { FormattedMessage, useIntl } from 'react-intl';

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
  const intl = useIntl();
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
        <h2 className='text-lg font-bold'>
          <FormattedMessage id='multiStepForm.step3.title' />
        </h2>
        <FormField
          name='projectName'
          placeholder={intl.formatMessage({
            id: 'multiStepForm.step3.lable.projectName',
          })}
          register={register}
          rules={{
            required: intl.formatMessage({
              id: 'multiStepForm.step3.lable.projectName.errorMsg',
            }),
          }}
          errors={errors}
          label={intl.formatMessage({
            id: 'multiStepForm.step3.lable.projectName',
          })}
        />

        <FormField
          name='details'
          placeholder={intl.formatMessage({
            id: 'multiStepForm.step3.lable.projectDetails',
          })}
          register={register}
          rules={{
            required: intl.formatMessage({
              id: 'multiStepForm.step3.lable.projectDetails.errorMsg',
            }),
          }}
          errors={errors}
          type='textarea'
          label={intl.formatMessage({
            id: 'multiStepForm.step3.lable.projectDetails',
          })}
        />

        <FormField
          name='techStack'
          placeholder={intl.formatMessage({
            id: 'multiStepForm.step3.lable.techStack',
          })}
          register={register}
          rules={{
            required: intl.formatMessage({
              id: 'multiStepForm.step3.lable.techStack.requiredErrorMsg',
            }),
            pattern: {
              value: /^[A-Za-z\s,.]+$/,
              message: intl.formatMessage({
                id: 'multiStepForm.step3.lable.techStack.errorMsg',
              }),
            },
          }}
          errors={errors}
          label={intl.formatMessage({
            id: 'multiStepForm.step3.lable.techStack',
          })}
        />
        <FormField
          name='resources'
          placeholder={intl.formatMessage({
            id: 'multiStepForm.step3.lable.resources',
          })}
          register={register}
          type='number'
          rules={{
            required: intl.formatMessage({
              id: 'multiStepForm.step3.lable.resources.requiredErrorMsg',
            }),
            min: {
              value: 1,
              message: intl.formatMessage({
                id: 'mutliStepForm.step3.lable.resources.errorMsg',
              }),
            },
          }}
          errors={errors}
          label={intl.formatMessage({
            id: 'multiStepForm.step3.lable.resources',
          })}
        />
        <FormField
          name='hours'
          placeholder={intl.formatMessage({
            id: 'multiStepForm.step3.lable.hours',
          })}
          type='number'
          register={register}
          rules={{
            required: intl.formatMessage({
              id: 'multiStepForm.step3.lable.hours.requiredErrorMsg',
            }),
            min: {
              value: 1,
              message: intl.formatMessage({
                id: 'multiStepForm.step3.lable.hours.errorMsg',
              }),
            },
          }}
          errors={errors}
          label={intl.formatMessage({ id: 'multiStepForm.step3.lable.hours' })}
        />
      </div>

      <div className='flex justify-between mt-6'>
        <Button
          btnLabel={intl.formatMessage({ id: 'multiStepForm.prevBtn' })}
          onClick={handlePrev}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
        />
        <Button
          btnLabel={intl.formatMessage({ id: 'multiStepForm.nextBtn' })}
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
