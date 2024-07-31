import {
  FocusEvent,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  useState,
} from "react";
import { FieldError } from "react-hook-form";

import { Container, ErrorMessage, InputBox } from "./styles";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: FieldError;
};

export const TextInput = forwardRef(function TextInput(
  { optional, containerProps, error, onFocus, onBlur, ...rest }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <InputBox {...containerProps}>
      <Container data-state={isFocused ? "focused" : "blurred"}>
        <input
          type="text"
          ref={ref}
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {optional ? <span>Opcional</span> : null}
        </input>
      </Container>

      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </InputBox>
  );
});
