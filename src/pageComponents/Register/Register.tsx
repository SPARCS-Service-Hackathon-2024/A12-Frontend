import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FamilyPosition } from "@/types";

export interface RegisterProps {}

function Register({}: RegisterProps) {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [birth, setBirth] = useState<Date | null>();
  const [position, setPosition] =
    useState<FamilyPosition>();

  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  const handleFamilyNameChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setFamilyName(e.target.value);
  };

  const handleBirthChange = (date: Date) => {
    setBirth(date);
  };

  const handlePositionChange = (val: FamilyPosition) => {
    setPosition(val);
  };

  const handleRegister = () => {
    const payload = { name, familyName, birth, position };
    console.log(payload);
  };

  return (
    <Box h={"100vh"}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={handleNameChange} />

        <FormLabel>Family Name</FormLabel>
        <Input
          value={familyName}
          onChange={handleFamilyNameChange}
        />

        <FormLabel>Birthday</FormLabel>
        <DatePicker
          dateFormat="yyyy.MM.dd"
          shouldCloseOnSelect
          selected={birth}
          onChange={handleBirthChange}
          placeholderText="birth"
        />

        <FormLabel>Position</FormLabel>
        <RadioGroup
          onChange={handlePositionChange}
          value={position}
        >
          <Stack direction="row">
            <Radio value={FamilyPosition.MOTHER}>
              엄마
            </Radio>
            <Radio value={FamilyPosition.FATHER}>
              아빠
            </Radio>
            <Radio value={FamilyPosition.M_MOTHER}>
              외할머니
            </Radio>
            <Radio value={FamilyPosition.M_FATHER}>
              외할아버지
            </Radio>
            <Radio value={FamilyPosition.F_MOTHER}>
              친할머니
            </Radio>
            <Radio value={FamilyPosition.F_FATHER}>
              친할아버지
            </Radio>
            <Radio value={FamilyPosition.CHILD_1}>
              첫째
            </Radio>
            <Radio value={FamilyPosition.CHILD_2}>
              둘째
            </Radio>
          </Stack>
        </RadioGroup>

        <Button onClick={handleRegister}>register</Button>
      </FormControl>
    </Box>
  );
}

export default Register;
