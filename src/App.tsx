import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import { updateWindowTitle } from 'lib/updateWindowTitle';

import Layout from 'layout/base';
import InputMarkdown from 'components/InputMarkdown';
import Preview from 'components/Preview';
import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  const title = useSelector<RootState>(
    (state) => state.mainState.title
  ) as string;
  useEffect(() => {
    updateWindowTitle(title);
  }, [title]);

  return (
    <Layout>
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2, 1fr)',
        }}
        templateRows={{
          base: 'repeat(2,1fr)',
          md: 'repeat(1,1fr)',
        }}
        gap={{ base: 2, md: 6 }}
        h="100%"
      >
        <GridItem p={4} h="100%">
          <InputMarkdown />
        </GridItem>
        <GridItem h="100%" p={4} overflow="hidden">
          <Preview />
        </GridItem>
      </Grid>
    </Layout>
  );
}

export default App;
