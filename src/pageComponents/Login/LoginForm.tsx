import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, Form, FormikHelpers } from "formik";

import { LoginUserPayload } from "@/types";
import { InputField } from "@/components";
import { greenPointColor } from "@/constants/color";

export interface LoginProps {}

function LoginForm({}: LoginProps) {
  const router = useRouter();

  const onSubmit = async (
    values: LoginUserPayload,
    helper: FormikHelpers<LoginUserPayload>
  ) => {
    const res = await axios.post("/login", values);
    console.log("res: ", res);

    if (res.status === 200) {
      router.push("/home");
    } else {
      helper.setSubmitting(false);
    }
  };

  return (
    <Formik<LoginUserPayload>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        isSubmitting,
      }) => {
        const isDisabled =
          !values.password || !values.phoneNumber;

        return (
          <Form
            onSubmit={handleSubmit}
            autoComplete={"off"}
          >
            <VStack gap={"12px"}>
              <InputField
                label={"전화번호"}
                name={"phoneNumber"}
                textColor={"white"}
                onChange={handleChange}
                borderColor={"#767676"}
                value={values.phoneNumber}
                placeholderColor={"#d9d9d9"}
                placeholder={`'-' 없이 숫자만 입력해주세요.`}
              />
              <InputField
                label={"비밀번호"}
                name={"password"}
                type={"password"}
                textColor={"white"}
                value={values.password}
                onChange={handleChange}
                borderColor={"#767676"}
                placeholderColor={"#d9d9d9"}
                placeholder={"비밀번호를 입력해주세요."}
              />
              <HStack gap={"20px"} my={"12px"}>
                <Text
                  color={"#d9d9d9"}
                  fontSize={"14px"}
                  fontWeight={400}
                  onClick={() => router.push("/register")}
                >
                  회원 가입
                </Text>
                <Box w={"1px"} h={"14px"} bg={"#d9d9d9"} />
                <Text
                  color={"#d9d9d9"}
                  fontSize={"14px"}
                  fontWeight={400}
                >
                  비밀번호 찾기
                </Text>
              </HStack>

              <Button
                isDisabled={isDisabled}
                h={"56px"}
                w={"100px"}
                type={"submit"}
                fontWeight={600}
                fontSize={"20px"}
                background={"white"}
                borderRadius={"10px"}
                isLoading={isSubmitting}
                borderWidth={"1px"}
                borderStyle={"soild"}
                borderColor={"#bababa"}
                textColor={
                  isDisabled ? "white" : greenPointColor
                }
                backgroundColor={
                  isDisabled
                    ? "rgba(255, 255, 255, 0.30)"
                    : "white"
                }
              >
                로그인
              </Button>
            </VStack>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;

const initialValues = {
  phoneNumber: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required(),
  password: Yup.string().required(),
});
