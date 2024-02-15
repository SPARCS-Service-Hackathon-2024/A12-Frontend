import { greenPointColor } from "@/constants/color";
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
  textColor?: string;
  borderColor?: string;
  placeholderColor?: string;
}

function InputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  textColor = greenPointColor,
  borderColor = "#D9D9D9",
  placeholderColor = greenPointColor,
}: InputFieldProps) {
  return (
    <VStack align={"flex-start"} gap={"8px"}>
      <Text fontSize={"18px"} color={textColor}>
        {label}
      </Text>
      <Input
        outline={"none"}
        w={"280px"}
        h={"56px"}
        type={type}
        name={name}
        value={value}
        color={textColor}
        onChange={onChange}
        placeholder={placeholder}
        borderColor={borderColor}
        _placeholder={{
          fontWeight: 300,
          fontSize: "14px",
          color: placeholderColor,
        }}
        _focus={{ borderColor, outline: "none" }}
      />
      {error && <Text color={"red"}>{error}</Text>}
    </VStack>
  );
}

export default InputField;
