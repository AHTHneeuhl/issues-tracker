import { IssueStatus, Link } from "@/app/components";
import prisma from "@/prisma/client";
import { Box, Table } from "@radix-ui/themes";
import Actions from "./Actions";

const Issues: React.FC = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <Box>
      <Actions />
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
                <Link href={`/issues/${id}`}>{title}</Link>
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

export const dynamic = "force-dynamic";

export default Issues;
