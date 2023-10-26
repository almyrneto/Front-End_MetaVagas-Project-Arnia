import S from "./styled.ts"
import { useEffect, useState } from "react";

type searchParams = "techsParam" | "vacancyType" | "workType" | "companySize" | "vacancyLevel"

type props = { 
   content: string,
   state : boolean,
   stateType : "techsParam" | "vacancyType" | "workType" | "companySize" | "vacancyLevel",
   handleMyValue : (shouldPush: boolean, whereToUpdate: searchParams, whatValue: string) => void
}


function Checkbox({ content, state , stateType, handleMyValue}: props) {

   const [checked, setChecked] = useState(state);
   function handleCheckboxChange() {
      setChecked(!checked)
      handleMyValue(!checked, stateType, content)
   }
   useEffect(() => {
      state === true ? handleMyValue(checked, stateType, content) : false;
   })
   
   return (
      <S.CheckboxContainer
         checked={checked }
         onClick={handleCheckboxChange}
      >
         <S.HiddenCheckbox
            onChange={handleCheckboxChange}
            checked={checked } 
            />
         <S.Text checked={state }>{content}</S.Text>
      </S.CheckboxContainer>
   );
}

export default Checkbox;
