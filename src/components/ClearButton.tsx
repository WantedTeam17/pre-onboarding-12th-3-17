import { BsXCircleFill } from "react-icons/bs";
import { styled } from "styled-components";
import { colors } from "../constants/colors";

interface ButtonProps {
  value: string;
  handlerClear: () => void;
}

const ClearButton = ({ value, handlerClear }: ButtonProps) => {
  return (
    <StyleButtonContainer>
      {value && (
        <StyledButton onClick={handlerClear}>
          <StyledClearIcon />
        </StyledButton>
      )}
    </StyleButtonContainer>
  );
};

export default ClearButton;

const StyleButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  margin: 4px 8px;
  cursor: pointer;
`;

const StyledClearIcon = styled(BsXCircleFill)`
  width: 20px;
  height: 20px;
  color: ${colors.gray};
`;
