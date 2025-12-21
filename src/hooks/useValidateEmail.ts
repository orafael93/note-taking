import { useEffect, useMemo, useState } from "react";

export const maskToValidateEmail =
  /^(?=.{1,90}$)([_a-zA-Z0-9-]+(\.[_a-zA-Z-0-9-]+)*@[a-zA-Z-0-9-]+(\.[a-zA-Z-0-9-]+)*(?:\.(com|org|net|edu|gov|int|mil|co|io|br|uk))$)/;

export type InputErrorType = {
  hasError: boolean;
  message?: string;
};

export type OnValidateEmailType = {
  emailToValidate: string;
};

export const useValidateEmail = () => {
  const [error, setError] = useState<InputErrorType>(<InputErrorType>{});
  const [email, setEmail] = useState("");
  const [canInitValidation, setCanInitValidation] = useState(false);

  const onStartValidateEmailOnBlur = () => {
    if (!canInitValidation) {
      setCanInitValidation(true);
    }
  };

  const onUpdateEmail = (updatedEmail: string) => {
    setEmail(updatedEmail);
  };

  const handleEmailInputState = useMemo(() => {
    if (error.hasError) {
      return "error";
    }

    if (canInitValidation && !error.hasError) {
      return "success";
    }

    return "invalidated";
  }, [error, canInitValidation]);

  const onValidateEmail = ({ emailToValidate }: OnValidateEmailType) => {
    const validatedEmail = new RegExp(maskToValidateEmail).test(
      emailToValidate.toLowerCase()
    );

    if (emailToValidate.length < 1) {
      setError({
        hasError: true,
        message: "Email is required.",
      });
      return;
    }

    if (!validatedEmail) {
      setError({
        hasError: true,
        message: "Please enter a valid email address.",
      });

      return;
    }

    setError({ hasError: false });
  };

  useEffect(() => {
    if (canInitValidation) {
      onValidateEmail({ emailToValidate: email });
    }
  }, [email, canInitValidation]);

  return {
    email,
    emailError: error,
    emailState: handleEmailInputState,
    onUpdateEmail,
    onStartValidateEmailOnBlur,
  };
};
