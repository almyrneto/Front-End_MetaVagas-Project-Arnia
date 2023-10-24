import S from "./styled.ts";
import { useState } from "react";

type props = { content: string; state?: boolean };
function Checkbox({ content }: props) {
  //Alterações -> state
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }
  return (
    <S.CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
      <S.HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
      <S.Text checked={checked}>{content}</S.Text>
    </S.CheckboxContainer>
  );
}

export default Checkbox;
