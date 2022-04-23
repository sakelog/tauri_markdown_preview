import { useEffect, Suspense, type ReactNode } from 'react';

// lib
import { updateWindowTitle } from 'lib/updateWindowTitle';

// redux
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';

// component
import Layout from 'layout/base';
import {
  Grid,
  GridItem,
  Center,
  Spinner,
} from '@chakra-ui/react';
import InputTitle from 'components/InputTitle';
import PreviewHeader from 'components/PreviewHeader';

import { lazy } from '@loadable/component';

const InputMarkdown = lazy(
  () => import('components/InputMarkdown')
);
const Preview = lazy(() => import('components/Preview'));

const MySuspense = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Suspense
    fallback={
      <Center h="100%">
        <Spinner />
      </Center>
    }
  >
    {children}
  </Suspense>
);

const RootGridItem = ({
  children: [header, body],
}: {
  children: [header: ReactNode, body: ReactNode];
}) => (
  <GridItem h="inherit" overflow="hidden">
    <Grid
      h="inherit"
      templateRows="repeat(12 , 1fr)"
      overflow="hidden"
    >
      <GridItem
        overflow="hidden"
        minH="12"
        rowSpan={{ base: 2, md: 1 }}
      >
        {header}
      </GridItem>
      <GridItem
        overflow="hidden"
        rowSpan={{ base: 10, md: 11 }}
      >
        {body}
      </GridItem>
    </Grid>
  </GridItem>
);

// Main
const App = () => {
  // redux__state
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
        gap="0"
        h="100%"
      >
        <RootGridItem>
          {/* header */}
          <InputTitle />
          {/* body */}
          <MySuspense>
            <InputMarkdown />
          </MySuspense>
        </RootGridItem>

        <RootGridItem>
          {/* header */}
          <PreviewHeader />
          {/* body */}
          <MySuspense>
            <Preview />
          </MySuspense>
        </RootGridItem>
      </Grid>
    </Layout>
  );
};

export default App;
