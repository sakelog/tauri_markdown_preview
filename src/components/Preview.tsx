import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import { Flex, Box, Text } from '@chakra-ui/react';
import ButtonFileSaveAsHtml from 'components/ButtonFileSaveAsHtml';
import SaveFeedback from 'components/SaveFeedback';

function Preview() {
  const htmlBody = useSelector<RootState>(
    (state) => state.mainState.htmlBody
  ) as string;
  const statusSaveHtml = useSelector<RootState>(
    (state) => state.mainState.statusSaveHtml
  ) as boolean;

  return (
    <Flex h="100%" direction="column">
      <Box pb={2}>
        <Text fontWeight="semibold">プレビュー</Text>
      </Box>
      <Flex
        direction="column"
        flex="1"
        p={2}
        overflowY="scroll"
        borderWidth="medium"
        borderColor="gray.200"
        rounded="md"
      >
        <Box
          dangerouslySetInnerHTML={{
            __html: htmlBody,
          }}
          sx={{
            h1: {
              fontWeight: 'bold',
              fontSize: '4xl',
              borderBottom: '3px solid',
              marginBottom: '4',
              padding: '2',
            },
            h2: {
              fontSize: '4xl',
              backgroundColor: 'gray.100',
              marginY: '4',
              padding: '2',
            },
            h3: {
              fontWeight: 'bold',
              fontSize: '2xl',
              border: '2px solid',
              borderColor: 'gray.400',
              marginY: '4',
              padding: '2',
            },
            h4: {
              fontSize: '2xl',
              marginY: '4',
              padding: '2',
            },
            h5: {
              fontWeight: 'bold',
              fontSize: 'xl',
              marginY: '4',
              padding: '2',
            },
            h6: {
              fontSize: 'xl',
              marginY: '4',
              padding: '2',
            },
            blockQuote: {
              borderLeft: '3px solid',
              borderColor: 'gray.400',
              fontStyle: 'italic',
              paddingLeft: '2',
            },
            a: {
              color: 'blue.400',
              textDecoration: 'underline',
            },
            img: {
              margin: '4',
            },
            pre: {
              marginTop: '2',
              marginBottom: '2',
            },
            ul: {
              listStylePosition: 'inside',
            },
            ol: {
              listStylePosition: 'inside',
            },
            hr: {
              backgroundColor: 'gray.400',
              marginY: '2',
            },
          }}
        />
      </Flex>
      <Flex
        pt={4}
        alignItems="center"
        justifyContent="space-between"
        h={10}
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        <ButtonFileSaveAsHtml />
        <Box>
          <SaveFeedback status={statusSaveHtml} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Preview;
