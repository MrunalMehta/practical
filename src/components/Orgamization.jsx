import { useForm } from 'react-hook-form';
import { useDataContext } from '../contexts/DataContext';
import FormField from './Generic/FormField';
import PropTypes from 'prop-types';
import Button from './Generic/Button';
import { FormattedMessage, useIntl } from 'react-intl';

function Orgamization({ handleNext, handlePrev }) {
  const { setFormData, formData } = useDataContext();
  const intl = useIntl();
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
      <h2 className='text-lg font-bold'>
        <FormattedMessage id='multiStepForm.step2.title' />
      </h2>

      <FormField
        name='orgName'
        placeholder={intl.formatMessage({
          id: 'multiStepForm.step2.lable.orgDetail',
        })}
        register={register}
        rules={{
          required: intl.formatMessage({
            id: 'multiStepForm.step2.lable.orgDetail.errorMsg',
          }),
        }}
        errors={errors}
        label={intl.formatMessage({
          id: 'multiStepForm.step2.lable.orgDetail',
        })}
      />

      <FormField
        name='registerNo'
        placeholder={intl.formatMessage({
          id: 'multiStepForm.step2.lable.registeredNumber',
        })}
        register={register}
        rules={{
          required: intl.formatMessage({
            id: 'multiStepForm.step2.lable.registeredNumber.requiredErrorMsg',
          }),
          minLength: {
            value: 5,
            message: intl.formatMessage({
              id: 'mutliStepForm.step2.lable.errorMsg',
            }),
          },
          maxLength: {
            value: 5,
            message: intl.formatMessage({
              id: 'mutliStepForm.step2.lable.errorMsg',
            }),
          },
        }}
        errors={errors}
        type='number'
        label={intl.formatMessage({
          id: 'multiStepForm.step2.lable.registeredNumber',
        })}
      />

      <FormField
        name='address'
        placeholder={intl.formatMessage({
          id: 'multiStepForm.step2.lable.address',
        })}
        register={register}
        rules={{
          required: intl.formatMessage({
            id: 'multiStepForm.step2.lable.address.requiredErrorMsg',
          }),
        }}
        errors={errors}
        type='textarea'
        label={intl.formatMessage({ id: 'multiStepForm.step2.lable.address' })}
      />
      <div className='flex justify-between mt-6'>
        <Button
          onClick={handlePrev}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
          btnLabel={intl.formatMessage({ id: 'multiStepForm.prevBtn' })}
        />
        <Button
          onClick={handleSubmit(onSubmit)}
          className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
          btnLabel={intl.formatMessage({ id: 'multiStepForm.nextBtn' })}
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
