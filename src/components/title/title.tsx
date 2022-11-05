import { Text } from "@chakra-ui/react";

type Props = {
  value: string;
};

const Title = ({ value }: Props) => {
  return (
    <Text as="b" fontSize="3xl">
      {value}
    </Text>
  );
};

export default Title;
