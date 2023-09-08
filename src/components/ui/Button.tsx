import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";
import { colors } from "../../constants/colors";

const Button = () => {
  return (
    <StyledButton tabIndex={0}>
      <StyledSearchIcon />
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 55px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  margin-top: 8px;

  &:focus {
    outline: none;
    border: 2px solid #0259a4;
    box-shadow: 0 0 2px #0072c6;
  }
`;

const StyledSearchIcon = styled(FaSearch)`
  width: 21px;
  height: 21px;
`;
