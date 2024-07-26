import { Container, Typography } from '@mui/material';
import ExtensionsTable from '../components/extensions/ExtensionsTable';
import { extensionsApi } from '../lib/queries/extensionsApi';
import { useState } from 'react';
import DeleteExtensionModal from '../components/ui/DeleteExtensionModal';

const useGetAllExtensions = extensionsApi.endpoints.getAllExtensions.useQuery;

const ExtensionsPage = () => {
  const { data: extensions } = useGetAllExtensions();
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleClick = (n: number) => {
    setShow(true);
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
          handleClick={handleClick}
          extensions={extensions}
        />
      </Container>
      <DeleteExtensionModal
        currentId={currentId}
        setShow={setShow}
        show={show}
      />
    </>
  );
};

export default ExtensionsPage;
