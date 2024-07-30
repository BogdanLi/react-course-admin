import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { IExtension } from '../../lib/types/extensions';
import { indigo, red } from '@mui/material/colors';

interface Props {
  extensions: IExtension[] | undefined;
  deleteClickHandler: (n: number) => void;
  editClickHandler: (n: number) => void;
}

const ExtensionsTable = ({
  extensions,
  deleteClickHandler,
  editClickHandler,
}: Props) => {
  return (
    <TableContainer>
      <Table border={1}>
        <TableHead sx={{ bgcolor: indigo[100] }}>
          <TableRow>
            <TableCell>
              <Typography>Name</Typography>
            </TableCell>
            <TableCell>
              <Typography>Description Ru</Typography>
            </TableCell>
            <TableCell>
              <Typography>Description En</Typography>
            </TableCell>
            <TableCell>
              <Typography>Link</Typography>
            </TableCell>
            <TableCell>
              <Typography>Action</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {extensions
            ? extensions.map((extension) => (
                <TableRow>
                  <TableCell>
                    <Typography sx={{ fontWeight: 600 }}>
                      {extension.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{extension.description_ru}</TableCell>
                  <TableCell>{extension.description_en}</TableCell>
                  <TableCell>
                    <a
                      href={extension.link}
                      className="hover:text-indigo-700"
                      target="_blank"
                    >
                      {extension.link}
                    </a>
                  </TableCell>
                  <TableCell>
                    <Button
                      sx={{ width: '100%', fontWeight: 600, color: red[500] }}
                      onClick={() => deleteClickHandler(extension.id)}
                    >
                      Del
                    </Button>
                    <Button
                      sx={{ width: '100%', fontWeight: 600 }}
                      onClick={() => editClickHandler(extension.id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExtensionsTable;
