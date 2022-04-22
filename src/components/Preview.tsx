import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import { Box } from '@chakra-ui/react';

const Preview = () => {
  const htmlBody = useSelector<RootState>(
    (state) => state.mainState.htmlBody
  ) as string;

  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: htmlBody,
      }}
      h="100%"
      overflowY="scroll"
      p={4}
      className="p-preview"
    />
  );
};

export default Preview;
