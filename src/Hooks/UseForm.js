import { useMemo } from "react";
import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, FormValidator = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [FormValidations, setFormValidations] = useState({});

  useEffect(() => {
    CreateValidetors();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const FormValue of Object.keys(FormValidations)) {
      if (FormValidations[FormValue] !== null) return false;
    }
    return true;
  }, [FormValidations]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };
  const CreateValidetors = () => {
    const formChekedValues = {};
    for (const FormInfo of Object.keys(FormValidator)) {
      const [Fn, ErrorMessage] = FormValidator[FormInfo];
      formChekedValues[`${FormInfo}Valid`] = Fn(formState[FormInfo])
        ? null
        : ErrorMessage;
    }
    setFormValidations(formChekedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...FormValidations,
    isFormValid,
  };
};
