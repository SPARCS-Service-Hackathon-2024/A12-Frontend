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
import FamilyPositionForm from "./FamilyPositionForm";

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
    <Box>
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

        <FamilyPositionForm
          value={position}
          onChange={handlePositionChange}
        />

        <Button onClick={handleRegister}>register</Button>
      </FormControl>
    </Box>
  );
}

export default Register;
