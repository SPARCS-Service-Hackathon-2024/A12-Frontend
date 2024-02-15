import { greenPointColor } from "@/constants/color";
import { Box, Button, ButtonProps } from "@chakra-ui/react";

export interface RegisterButtonProps
  extends Omit<ButtonProps, "children"> {
  step: 1 | 2;
}

function RegisterButton({
  step,
  ...rest
}: RegisterButtonProps) {
  return (
    <Box position={"fixed"} bottom={"108px"}>
      <Button
        {...rest}
        h={"56px"}
        w={"100px"}
        bg={greenPointColor}
        borderRadius={"10px"}
        color={"white"}
      >
        {step === 1 ? "다음" : "회원 가입"}
      </Button>
    </Box>
  );
}

export default RegisterButton;
