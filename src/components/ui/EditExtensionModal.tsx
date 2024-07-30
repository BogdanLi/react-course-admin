import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { extensionsApi } from '../../lib/queries/extensionsApi';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  currentId: number;
}

const useEditExtension = extensionsApi.endpoints.editExtension.useMutation;

const EditExtensionModal = ({ show, setShow, currentId }: Props) => {
  const [editExtension] = useEditExtension();

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
        <Typography variant="h4">Edit extension</Typography>
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Extension name" />
          <TextField label="Russian description" />
          <TextField label="English description" />
          <TextField label="Link" />
          <Button
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditExtensionModal;
