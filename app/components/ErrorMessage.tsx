import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorMessage: React.FC<PropsWithChildren> = ({ children }) => {
  if (!children) return null;

  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default ErrorMessage;
