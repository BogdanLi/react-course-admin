import { Container, Typography } from '@mui/material';
import ExtensionsTable from '../components/extensions/ExtensionsTable';
import { extensionsApi } from '../lib/queries/extensionsApi';
import { useState } from 'react';
import DeleteExtensionModal from '../components/ui/DeleteExtensionModal';
import EditExtensionModal from '../components/ui/EditExtensionModal';

const useGetAllExtensions = extensionsApi.endpoints.getAllExtensions.useQuery;

const ExtensionsPage = () => {
  const { data: extensions } = useGetAllExtensions();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const deleteClickHandler = (n: number) => {
    setShowDeleteModal(true);
    setCurrentId(n);
  };
  const editClickHandler = (n: number) => {
    setShowEditModal(true);
    setCurrentId(n);
  };

  return (
    <>
      <Container>
        <Typography
          variant="h3"
          sx={{ my: 4 }}
        >
          Extensions
        </Typography>
        <ExtensionsTable
          editClickHandler={editClickHandler}
          deleteClickHandler={deleteClickHandler}
          extensions={extensions}
        />
      </Container>
      <DeleteExtensionModal
        currentId={currentId}
        setShow={setShowDeleteModal}
        show={showDeleteModal}
      />
      <EditExtensionModal
        currentId={currentId}
        setShow={setShowEditModal}
        show={showEditModal}
      />
    </>
  );
};

export default ExtensionsPage;
