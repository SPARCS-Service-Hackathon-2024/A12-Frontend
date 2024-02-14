import { FamilyPosition } from "@/types";
import {
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export interface FamilyPositionFormProps {
  value?: FamilyPosition;
  onChange: (value: any) => void;
}

function FamilyPositionForm({
  value,
  onChange,
}: FamilyPositionFormProps) {
  return (
    <>
      <FormLabel>Position</FormLabel>
      <RadioGroup onChange={onChange} value={value}>
        <Stack direction="row">
          <Radio value={FamilyPosition.MOTHER}>엄마</Radio>
          <Radio value={FamilyPosition.FATHER}>아빠</Radio>
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
          <Radio value={FamilyPosition.CHILD_1}>첫째</Radio>
          <Radio value={FamilyPosition.CHILD_2}>둘째</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
}

export default FamilyPositionForm;
