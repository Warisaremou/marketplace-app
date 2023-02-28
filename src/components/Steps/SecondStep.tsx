
function SecondStep({ nextStep, previousStep }: any) {
  return (
    <>
      <h1>Step 2</h1>
      <button type="button" onClick={() => previousStep()}>
        Précédent
      </button>
      <button type="button" onClick={() => nextStep()}>
        Suivant
      </button>
    </>
  );
}

export default SecondStep;
