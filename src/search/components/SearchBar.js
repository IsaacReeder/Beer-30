import React from "react";

import { Box, Text, SearchField, IconButton } from "gestalt";

const SearchBar = () => {
  return (
    <Box
      color="white"
      shape="rounded"
      padding={3}
      display="flex"
      direction="row"
      alignItems="center"
    >
      <Box padding={3}>
        <Text align="center">I am looking for a brewery near</Text>
        {/* <Icon
          icon="flashlight"
          color="red"
          size={20}
          accessibilityLabel="Flashlight"
        /> */}
      </Box>
      <Box flex="grow" paddingX={2}>
        <SearchField
          accessibilityLabel="Demo Search Field"
          id="searchField"
          onChange={({ value }) => this.setState({ value })}
          placeholder="Address, neighborhood, city, province, or postal code"
          value="null"
        />
      </Box>
      <Box paddingX={2}>
        <IconButton
          accessibilityLabel="Notifications"
          icon="speech-ellipsis"
          size="md"
        />
      </Box>
      {/* <Box paddingX={2}>
        <IconButton accessibilityLabel="Profile" icon="person" size="md" />
      </Box> */}
    </Box>
  );
};

export default SearchBar;
