import React, { Fragment } from "react";
import { Box, Text, Column } from "gestalt";

const ListView = () => {
  return (
    <Fragment>
      <Box display="flex" direction="row" wrap paddingY={2} height={200}>
        {Array(4)
          .fill()
          .map((_, i) => (
            <Column span={6} mdSpan={3} key={i}>
              <Box color="lightGray" padding={1} height={200}>
                <Box color="white" paddingY={2} height="100%">
                  <Box display="block" mdDisplay="none">
                    <Text align="center">6</Text>
                  </Box>
                  <Box display="none" mdDisplay="block">
                    <Text align="center">3</Text>
                  </Box>
                </Box>
              </Box>
            </Column>
          ))}
      </Box>
      <Box display="flex" direction="row" wrap paddingY={2} height={200}>
        {Array(4)
          .fill()
          .map((_, i) => (
            <Column span={6} mdSpan={3} key={i}>
              <Box color="lightGray" padding={1} height={200}>
                <Box color="white" paddingY={2} height="100%">
                  <Box display="block" mdDisplay="none">
                    <Text align="center">6</Text>
                  </Box>
                  <Box display="none" mdDisplay="block">
                    <Text align="center">3</Text>
                  </Box>
                </Box>
              </Box>
            </Column>
          ))}
      </Box>
      <Box display="flex" direction="row" wrap paddingY={2} height={200}>
        {Array(4)
          .fill()
          .map((_, i) => (
            <Column span={6} mdSpan={3} key={i}>
              <Box color="lightGray" padding={1} height={200}>
                <Box color="white" paddingY={2} height="100%">
                  <Box display="block" mdDisplay="none">
                    <Text align="center">6</Text>
                  </Box>
                  <Box display="none" mdDisplay="block">
                    <Text align="center">3</Text>
                  </Box>
                </Box>
              </Box>
            </Column>
          ))}
      </Box>
      <Box display="flex" direction="row" wrap paddingY={2} height={200}>
        {Array(4)
          .fill()
          .map((_, i) => (
            <Column span={6} mdSpan={3} key={i}>
              <Box color="lightGray" padding={1} height={200}>
                <Box color="white" paddingY={2} height="100%">
                  <Box display="block" mdDisplay="none">
                    <Text align="center">6</Text>
                  </Box>
                  <Box display="none" mdDisplay="block">
                    <Text align="center">3</Text>
                  </Box>
                </Box>
              </Box>
            </Column>
          ))}
      </Box>
      <Box display="flex" direction="row" wrap paddingY={2} height={200}>
        {Array(4)
          .fill()
          .map((_, i) => (
            <Column span={6} mdSpan={3} key={i}>
              <Box color="lightGray" padding={1} height={200}>
                <Box color="white" paddingY={2} height="100%">
                  <Box display="block" mdDisplay="none">
                    <Text align="center">6</Text>
                  </Box>
                  <Box display="none" mdDisplay="block">
                    <Text align="center">3</Text>
                  </Box>
                </Box>
              </Box>
            </Column>
          ))}
      </Box>
    </Fragment>
  );
};

export default ListView;
