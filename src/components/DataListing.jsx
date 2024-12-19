import Modal from './Modal';
import ClientTable from './ClientTable';
import QuickActions from './QuickActions';
import { useDataContext } from '../contexts/DataContext';
import { useEffect } from 'react';

function DataListing() {
  const { isModalShow } = useDataContext();

  useEffect(() => {
    if (isModalShow) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isModalShow]);

  return (
    <>
      <QuickActions />
      <ClientTable />
      {isModalShow && <Modal />}
    </>
  );
}

export default DataListing;
