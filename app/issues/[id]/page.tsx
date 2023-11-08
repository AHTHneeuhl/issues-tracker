import prisma from "@/prisma/client";
import { Box, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetails: React.FC<Props> = async ({ params }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Box className="flex flex-col gap-2">
      <Text>{issue.title}</Text>
      <Text>{issue.description}</Text>
      <Text>{issue.status}</Text>
      <Text>{issue.createdAt.toDateString()}</Text>
    </Box>
  );
};

export default IssueDetails;
