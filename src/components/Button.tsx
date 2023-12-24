import { Button, ButtonProps } from "@chakra-ui/react"

interface IButton {
  onClick: () => void;
  texto: string;
  props?: ButtonProps;
}

export const ButtonComp = ({ onClick, texto, props }: IButton) => {
  return (
    <Button className="button" onClick={onClick} {...props}>
      {texto}
    </Button>
  );

}