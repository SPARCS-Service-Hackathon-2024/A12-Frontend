import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import {
  Formik,
  Form,
  FormikHelpers,
  FormikErrors,
} from "formik";

import { LoginUserPayload } from "@/types";
import { InputField } from "@/components";

export interface LoginProps {}

function Login({}: LoginProps) {
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
    >
      {({
        values,
        handleSubmit,
        handleChange,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} autoComplete={"off"}>
          <InputField
            label={"전화번호"}
            name={"phoneNumber"}
            value={values.phoneNumber}
            onChange={handleChange}
          />
          <InputField
            label={"비밀번호"}
            name={"password"}
            type={"password"}
            value={values.password}
            onChange={handleChange}
          />

          <Button isLoading={isSubmitting} type="submit">
            로그인
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Login;

const initialValues = {
  phoneNumber: "",
  password: "",
};
