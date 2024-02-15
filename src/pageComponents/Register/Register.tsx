import { Button } from "@chakra-ui/react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

import { CreateUserPayload } from "@/types";
import { InputField } from "@/components";

export interface RegisterProps {}

function Register({}: RegisterProps) {
  const onSubmit = (
    values: CreateUserPayload,
    helper: FormikHelpers<CreateUserPayload>
  ) => {
    console.log(values);

    helper.setSubmitting(false);
  };

  return (
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
      }) => (
        <Form onSubmit={handleSubmit} autoComplete={"off"}>
          <InputField
            label={"전화번호"}
            name={"phoneNumber"}
            value={values.phoneNumber}
            onChange={handleChange}
            placeholder="01012345678"
            error={errors.phoneNumber}
          />
          <InputField
            label={"비밀번호"}
            name={"password"}
            value={values.password}
            onChange={handleChange}
            placeholder="********"
            error={errors.password}
          />
          <InputField
            label={"이름"}
            name={"userName"}
            value={values.userName}
            onChange={handleChange}
            placeholder={"홍길동"}
            error={errors.userName}
          />
          <InputField
            label={"생년월일"}
            name={"birthday"}
            value={values.birthday}
            onChange={handleChange}
            placeholder={"yyyy.mm.dd"}
            error={errors.birthday}
          />
          <InputField
            label={"가족 이름"}
            name={"familyName"}
            value={values.familyName}
            onChange={handleChange}
            placeholder={"끼록이네"}
            error={errors.familyName}
          />
          <InputField
            label={"가족 비밀번호"}
            name={"familyPassword"}
            value={values.familyPassword}
            onChange={handleChange}
            placeholder={"****"}
            error={errors.familyPassword}
          />

          <Button isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
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
