import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { colors } from "../constants/colors";
import Button from "./Button";

interface InputProps {
  handlerFocus: () => void;
  handlerChange: (target: string) => any;
  handlerPressKey: (target: string) => any;
  value: string;
}

const Input = ({
  handlerFocus,
  handlerChange,
  handlerPressKey,
  value,
}: InputProps) => {
  return (
    <InputWrap>
      <StyledInput
        placeholder="질환명을 입력해 주세요"
        onFocus={() => handlerFocus()}
        onBlur={() => handlerFocus()}
        onChange={(e) => handlerChange(e.target.value)}
        onKeyDown={(e) => handlerPressKey(e.key)}
        value={value}
      ></StyledInput>
      <Button />
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.label`
  display: flex;
  border-radius: 3.125rem;
  background: ${colors.white};
  padding: 0 1rem;
  margin: 0.6rem 0;

  &:focus-within {
    border: 2px solid ${colors.primary};
  }

  @media (max-width: 600px) {
    border-radius: 0;
    padding: 0;
    margin: 0;

    &:focus-within {
      border: none;
      border-bottom: 2px solid ${colors.primary};
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 3.125rem;
  padding: 1rem 0.5rem 0.8em 0.5rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  font-size: 1.2rem;
  height: 70px;

  &.focused {
    border-color: #0072c6;
  }

  &::placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: 6%;
    background-position: -3px center;
    background-repeat: no-repeat;
    text-indent: 6%;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    
    &::placeholder {
      background-size: 10%;
      text-indent: 10%;
    }
  }
`;
