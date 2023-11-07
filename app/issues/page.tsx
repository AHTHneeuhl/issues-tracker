import { Button, Flex, Text } from "@radix-ui/themes";

const Issues: React.FC = () => {
  return (
    <Flex direction="row" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>New Issue</Button>
    </Flex>
  );
};

export default Issues;
