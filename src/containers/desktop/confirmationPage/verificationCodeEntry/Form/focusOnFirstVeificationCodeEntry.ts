const focusOnFirstVeificationCodeEntry = () => {
   const verificationInput = document.getElementById(
      'verification-code-1',
   ) as HTMLInputElement;
   if (verificationInput) verificationInput.focus();
};

export default focusOnFirstVeificationCodeEntry;
