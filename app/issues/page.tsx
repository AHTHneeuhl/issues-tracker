import { IssueStatus } from "@/app/components";
import prisma from "@/prisma/client";
import { Box, Button, Table } from "@radix-ui/themes";
import Link from "next/link";

const Issues: React.FC = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <Box>
      <Box className="mb-5">
        <Button>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </Box>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(({ id, title, status, createdAt }) => (
            <Table.Row key={id}>
              <Table.Cell>
                {title}
                <Box className="block md:hidden">
                  <IssueStatus status={status} />
                </Box>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatus status={status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default Issues;
