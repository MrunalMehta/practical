import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDebouncedValue } from './useDebouncedValue';
import { useDataContext } from '../contexts/DataContext';
import { useTheme } from '../contexts/ThemeContext';
import { useIntl } from 'react-intl';

export const useClientTable = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const intl = useIntl();
  const { isDark } = useTheme();
  const debouncedQuery = useDebouncedValue(searchQuery, 500);
  const {
    tableData,
    setTableData,
    setFormData,
    setIsModalShow,
    setIsEditMode,
    originalData,
  } = useDataContext();

  useEffect(() => {
    if (debouncedQuery) {
      const filteredData = originalData.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(debouncedQuery.toLowerCase())
        )
      );
      setTableData(filteredData);
    } else {
      setTableData(originalData);
    }
  }, [debouncedQuery, originalData, setTableData]);

  const handleEdit = useCallback(
    (id) => {
      const editData = tableData.find((item) => item.id === id);
      setFormData(editData);
      setIsModalShow(true);
      setIsEditMode(true);
    },
    [tableData, setFormData, setIsModalShow, setIsEditMode]
  );

  const columns = useMemo(
    () => [
      {
        key: 'clientName',
        label: intl.formatMessage({
          id: 'multiStepForm.step1.lable.clientName',
        }),
      },
      {
        key: 'region',
        label: intl.formatMessage({ id: 'multiStepForm.step1.lable.region' }),
      },
      {
        key: 'email',
        label: intl.formatMessage({ id: 'multiStepForm.step1.lable.email' }),
      },
      {
        key: 'orgName',
        label: intl.formatMessage({
          id: 'multiStepForm.step2.lable.orgDetail',
        }),
      },
      {
        key: 'registerNo',
        label: intl.formatMessage({
          id: 'multiStepForm.step2.lable.registeredNumber',
        }),
      },
      {
        key: 'address',
        label: intl.formatMessage({ id: 'multiStepForm.step2.lable.address' }),
      },
      {
        key: 'projectName',
        label: intl.formatMessage({
          id: 'multiStepForm.step3.lable.projectName',
        }),
      },
      { key: 'details', label: intl.formatMessage({ id: 'details' }) },
      {
        key: 'techStack',
        label: intl.formatMessage({
          id: 'multiStepForm.step3.lable.techStack',
        }),
      },
      {
        key: 'resources',
        label: intl.formatMessage({
          id: 'multiStepForm.step3.lable.resources',
        }),
      },
      {
        key: 'hours',
        label: intl.formatMessage({ id: 'multiStepForm.step3.lable.hours' }),
      },
    ],
    [intl]
  );
  return {
    columns,
    searchQuery,
    setSearchQuery,
    isDark,
    tableData,
    handleEdit,
    intl,
  };
};
