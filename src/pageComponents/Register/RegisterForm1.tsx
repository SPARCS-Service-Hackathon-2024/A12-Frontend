import { ChangeEvent } from "react";
import { FormikErrors } from "formik";
import { VStack } from "@chakra-ui/react";

import { InputField } from "@/components";
import { CreateUserPayload } from "@/types";
import RegisterButton from "./RegisterButton";

export interface RegisterForm1Props {
  values: CreateUserPayload;
  errors: FormikErrors<CreateUserPayload>;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(
      field: T
    ): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  handleNextClick: VoidFunction;
}

function RegisterForm1({
  values,
  errors,
  handleChange,
  handleNextClick,
}: RegisterForm1Props) {
  const isDisabled =
    !values.phoneNumber ||
    !values.password ||
    !values.userName ||
    !values.birthday;

  return (
    <VStack
      w={"100%"}
      gap={"12px"}
      top={"198px"}
      position={"absolute"}
    >
      <InputField
        label={"전화번호"}
        name={"phoneNumber"}
        value={values.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
        placeholder="‘-’ 없이 숫자만 입력해주세요."
      />
      <InputField
        label={"비밀번호"}
        name={"password"}
        type={"password"}
        value={values.password}
        onChange={handleChange}
        placeholder={
          "영문, 숫자, 특수 기호를 조합하여 8~16자"
        }
        error={errors.password}
      />
      <InputField
        label={"이름"}
        name={"userName"}
        value={values.userName}
        onChange={handleChange}
        placeholder={"이름을 입력해주세요."}
        error={errors.userName}
      />
      <InputField
        label={"생일"}
        name={"birthday"}
        value={values.birthday}
        onChange={handleChange}
        placeholder={"생일을 입력해주세요."}
        error={errors.birthday}
      />
      <RegisterButton
        step={1}
        isDisabled={isDisabled}
        onClick={handleNextClick}
      />
    </VStack>
  );
}

export default RegisterForm1;
