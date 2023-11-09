import { Button } from "@radix-ui/themes";

interface Props {
  issueId: number;
}

const IssueDeleteButton: React.FC<Props> = () => {
  return <Button color="red">Delete Issue</Button>;
};

export default IssueDeleteButton;
