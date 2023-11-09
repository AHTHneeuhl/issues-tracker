import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import IssueDeleteButton from "./IssueDeleteButton";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";

interface Props {
  params: { id: string };
}

const IssueDetailsPage: React.FC<Props> = async ({ params }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <IssueDetails issue={issue} />
      <Box>
        <Flex direction="column" gap="4">
          <IssueEditButton issueId={issue.id} />
          <IssueDeleteButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
