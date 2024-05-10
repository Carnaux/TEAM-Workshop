export const UIComponent = (props: any) => {
  const handleContinueExploring = () => {
    props.setResetCamera(true);
  };

  return (
    <div className="UIContainer">
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut
        quasi libero culpa fuga necessitatibus reprehenderit, dolorem excepturi
        rem mollitia harum reiciendis nisi neque quae iste ex. Ab, perspiciatis
        consectetur.
      </p>
      <button
        className="button"
        onClick={() => {
          handleContinueExploring();
        }}
      >
        Continuar explorando
      </button>
    </div>
  );
};
