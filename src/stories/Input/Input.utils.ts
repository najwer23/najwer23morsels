import { FieldElement } from './Input.types';

export const isAutofilled = (el: FieldElement) => {
  for (const selector of [':autofill', ':-webkit-autofill']) {
    try {
      if (el.matches(selector)) return true;
    } catch {
      // selector not supported by this browser
    }
  }
  return false;
};

export const isAutofillEvent = (e: React.ChangeEvent<FieldElement>): boolean => {
  const { inputType } = e.nativeEvent as InputEvent;

  // Typing: "insertText", "deleteContentBackward", etc.
  // Autofill: undefined (Chrome) or "insertReplacementText" (Safari).
  if (!inputType || inputType === 'insertReplacementText') return true;

  return isAutofilled(e.target);
};
