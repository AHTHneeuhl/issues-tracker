import { IssueStatus } from "@/app/components";
import { Issue } from "@prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

interface Props {
  issue: Issue;
}
const IssueDetails: React.FC<Props> = ({ issue }) => {
  return (
    <Box className="flex flex-col gap-2">
      <Heading as="h2">{issue.title}</Heading>
      <Flex gap="3">
        <IssueStatus status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Box>
  );
};

export default IssueDetails;
