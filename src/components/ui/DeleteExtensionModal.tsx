import { Box, Button, Modal, Typography } from '@mui/material';
import { indigo, red } from '@mui/material/colors';
import { extensionsApi } from '../../lib/queries/extensionsApi';

const useDeleteExtension = extensionsApi.endpoints.deleteExtension.useMutation;

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  currentId: number;
}

const DeleteExtensionModal = ({ show, setShow, currentId }: Props) => {
  const [deleteExtension] = useDeleteExtension();
  const approve = (id: number) => {
    deleteExtension(id);

    setShow(false);
  };
  return (
    <Modal
      open={show}
      onClose={() => setShow(false)}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: indigo[50],
          py: 4,
          px: 8,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{ mb: 4 }}
        >
          Are you sure?
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: 1 }}>
          <Button
            onClick={() => approve(currentId)}
            variant="contained"
            sx={{ bgcolor: red[500], ':hover': { bgcolor: red[700] } }}
          >
            Yes
          </Button>
          <Button
            onClick={() => setShow(false)}
            variant="outlined"
          >
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteExtensionModal;
