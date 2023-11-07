import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

const Issues: React.FC = () => {
  return (
    <Flex direction="row" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default Issues;
