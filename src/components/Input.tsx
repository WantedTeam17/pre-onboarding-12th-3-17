import { styled } from "styled-components";
import { colors } from "../constants/colors";
import ClearButton from "./ClearButton";
import Button from "./Button";

interface InputProps {
  handlerClear: () => void;
  handlerFocus: () => void;
  handlerChange: (target: string) => void;
  handlerPressKey: (target: string) => void;
  value: string;
}

const Input = ({
  handlerFocus,
  handlerChange,
  handlerPressKey,
  handlerClear,
  value,
}: InputProps) => {
  return (
    <InputWrap>
      <StyledInput
        placeholder="질환명을 입력해 주세요"
        onFocus={() => handlerFocus()}
        onBlur={() => {
          handlerFocus();
          handlerChange("");
        }}
        onChange={(e) => handlerChange(e.target.value)}
        onKeyDown={(e) => handlerPressKey(e.key)}
        value={value}
      ></StyledInput>
      <ClearButton value={value} handlerClear={handlerClear} />
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
    box-shadow: 0 0 0 0.1rem ${colors.primary};
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

  &:focus {
    outline: none;
    background-image: none;
    caret-color: ${colors.primary};
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
    padding: 0.5rem;
  }

  @media (max-width: 320px) {
    &::placeholder {
      background-size: 9%;
      text-indent: 9%;
    }
  }
`;
