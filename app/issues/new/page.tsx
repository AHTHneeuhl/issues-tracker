"use client";

import { Box, Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage: React.FC = () => {
  return (
    <Box className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Create Issue</Button>
    </Box>
  );
};

export default NewIssuePage;
