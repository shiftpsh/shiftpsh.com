import { Button, Typo } from "@solved-ac/ui-react";
import { IconCopy } from "@tabler/icons-react";

interface Props {
  copyText: string;
}

const CopyButton = ({ copyText }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    alert("클립보드에 복사했습니다.");
  };

  return (
    <Button circle transparent onClick={handleCopy}>
      <Typo description>
        <IconCopy />
      </Typo>
    </Button>
  );
};

export default CopyButton;
