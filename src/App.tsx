import { useEffect, Suspense, type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';
import { updateWindowTitle } from 'lib/updateWindowTitle';

import Layout from 'layout/base';
import {
  Grid,
  GridItem,
  Center,
  Spinner,
} from '@chakra-ui/react';

import { lazy } from '@loadable/component';
const InputMarkdown = lazy(
  () => import('components/InputMarkdown')
);
const Preview = lazy(() => import('components/Preview'));

const MySuspense = (props: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={
        <Center h="100%">
          <Spinner />
        </Center>
      }
    >
      {props.children}
    </Suspense>
  );
};

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
          <MySuspense>
            <InputMarkdown />
          </MySuspense>
        </GridItem>
        <GridItem h="100%" p={4} overflow="hidden">
          <MySuspense>
            <Preview />
          </MySuspense>
        </GridItem>
      </Grid>
    </Layout>
  );
}

export default App;
