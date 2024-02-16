import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Center } from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";

import { CreateUserPayload } from "@/types";
import RegisterForm1 from "./RegisterForm1";
import RegisterForm2 from "./RegisterForm2";
import {
  ArrowBack2Icon,
  CloseIcon,
  Step1FillIcon,
  Step1OutlineIcon,
  Step2FillIcon,
  Step2OutlineIcon,
} from "@/svg";

export interface RegisterProps {}

function Register({}: RegisterProps) {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
  const isStep1 = step === 1;

  const handleNextClick = () => {
    setStep(2);
  };

  const onSubmit = async (
    values: CreateUserPayload,
    helper: FormikHelpers<CreateUserPayload>
  ) => {
    const res = await axios.post("/register", values);

    if (res.status === 200) {
      router.push("/login");
    } else {
      helper.setSubmitting(false);
    }
  };

  return (
    <Box
      w={"100%"}
      h={"100vh"}
      position={"relative"}
      backgroundSize={"contain"}
      backgroundRepeat={"round"}
      backgroundImage={`/images/register${step}_background.png`}
    >
      {step === 2 && (
        <Box
          top={"20px"}
          left={"20px"}
          position={"absolute"}
          onClick={() => setStep(1)}
        >
          <ArrowBack2Icon />
        </Box>
      )}
      <Box
        top={"20px"}
        right={"20px"}
        position={"absolute"}
        onClick={() => router.push("/")}
      >
        <CloseIcon />
      </Box>
      <Center
        w={"100%"}
        gap={"8px"}
        top={"110px"}
        position={"absolute"}
      >
        {isStep1 ? (
          <>
            <Step1FillIcon />
            <Step2OutlineIcon />
          </>
        ) : (
          <>
            <Step1OutlineIcon />
            <Step2FillIcon />
          </>
        )}
      </Center>
      <Formik<CreateUserPayload>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          errors,
          isSubmitting,
        }) =>
          isStep1 ? (
            <RegisterForm1
              values={values}
              errors={errors}
              handleChange={handleChange}
              handleNextClick={handleNextClick}
            />
          ) : (
            <RegisterForm2
              values={values}
              errors={errors}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          )
        }
      </Formik>
    </Box>
  );
}

export default Register;

const initialValues = {
  phoneNumber: "",
  password: "",
  userName: "",
  birthday: "",
  familyName: "",
  familyPassword: "",
};

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^010\d{8}$/, "입력 형식을 맞춰주세요")
    .required("전화번호를 입력하세요!"),
  password: Yup.string()
    .min(8, "비밀번호는 최소 8자리 이상입니다")
    .max(16, "비밀번호는 최대 16자리입니다!")
    .required("패스워드를 입력하세요!"),
  userName: Yup.string()
    .min(2, "이름은 최소 2글자 이상입니다!")
    .max(10, "이름은 최대 10글자입니다!")
    .required("이름을 입력하세요!"),
  birthday: Yup.string()
    .matches(
      /^(?:(?!0000)[0-9]{4})\.(?:0[1-9]|1[0-2])\.(?:0[1-9]|[12][0-9]|3[01])$/,
      "날짜 형식을 맞춰주세요!"
    )
    .required("생일을 입력하세요!"),
  familyName:
    Yup.string().required("가족 이름을 입력하세요!"),
  familyPassword: Yup.string().required(
    "가족 비밀번호를 입력하세요!"
  ),
});
