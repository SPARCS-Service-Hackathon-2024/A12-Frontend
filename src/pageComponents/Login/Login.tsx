import { Box } from "@chakra-ui/react";

import LoginForm from "./LoginForm";

export interface LoginProps {}

function Login({}: LoginProps) {
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      position={"relative"}
      backgroundSize={"contain"}
      backgroundRepeat={"round"}
      backgroundImage={"/images/login_background.png"}
    >
      <Box
        w={"100%"}
        bottom={"170px"}
        position={"absolute"}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}

export default Login;
