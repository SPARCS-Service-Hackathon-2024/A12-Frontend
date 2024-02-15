import {
  Input,
  InputProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

export interface InputFieldProps {
  label?: string;
  type?: InputProps["type"];
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string;
}

function InputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
}: InputFieldProps) {
  return (
    <VStack align={"flex-start"}>
      <Text>{label}</Text>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <Text color={"red"}>{error}</Text>}
    </VStack>
  );
}

export default InputField;
