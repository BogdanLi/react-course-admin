import ExtensionsTable from './components/extensions/ExtensionsTable';
import { extensionsApi } from './lib/queries/extensionsApi';

const useGetAllExtensions = extensionsApi.endpoints.getAllExtensions.useQuery;

const App = () => {
  const { data } = useGetAllExtensions('ru');

  return (
    <main>
      <ExtensionsTable extensions={data} />
    </main>
  );
};

export default App;
