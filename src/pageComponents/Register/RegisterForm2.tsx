import { ChangeEvent, FormEvent } from "react";
import { Form, FormikErrors } from "formik";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

import { WarningIcon } from "@/svg";
import { InputField } from "@/components";
import { CreateUserPayload } from "@/types";
import RegisterButton from "./RegisterButton";

export interface RegisterForm2Props {
  values: CreateUserPayload;
  errors: FormikErrors<CreateUserPayload>;
  isSubmitting: boolean;
  handleSubmit: (
    e?: FormEvent<HTMLFormElement> | undefined
  ) => void;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(
      field: T
    ): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
}

function RegisterForm2({
  values,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
}: RegisterForm2Props) {
  const isDisabled =
    !values.familyName || !values.familyPassword;

  return (
    <Form onSubmit={handleSubmit} autoComplete={"off"}>
      <VStack
        w={"100%"}
        gap={"12px"}
        top={"198px"}
        position={"absolute"}
      >
        <InputField
          label={"가족 아이디"}
          name={"familyName"}
          value={values.familyName}
          onChange={handleChange}
          placeholder={"10자 이하의 한글을 입력해주세요."}
          error={errors.familyName}
        />
        <InputField
          label={"가족 비밀번호"}
          name={"familyPassword"}
          type={"password"}
          value={values.familyPassword}
          onChange={handleChange}
          placeholder={
            "영문, 숫자, 특수 기호를 조합하여 8~16자"
          }
          error={errors.familyPassword}
        />
        <Flex
          mt={"8px"}
          direction={"row"}
          align={"center"}
          gap={"8px"}
          w={"280px"}
          px={"16px"}
          py={"12px"}
          bg={"white"}
          border={"1px solid #EFF4FE"}
          borderRadius="0px 10px 10px 10px"
        >
          <Box flexShrink={0}>
            <WarningIcon />
          </Box>
          <Text
            fontSize={"12px"}
            fontWeight={500}
            color={"#3C3C3C"}
          >
            가족 아이디와 비밀번호는 최초 가입자가 생성 후
            다른 가족 구성원에게 공유해주세요!
          </Text>
        </Flex>
        <RegisterButton
          step={2}
          type={"submit"}
          isDisabled={isDisabled}
          isLoading={isSubmitting}
        />
      </VStack>
    </Form>
  );
}

export default RegisterForm2;
