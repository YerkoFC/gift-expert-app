import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  // Es buena practica indicar que el hook será de un tipo definido
  // ejemplo: en el hook de abajo, se indicara que la variable inputValue
  // sera de tipo string, definiendola como string vacio
  const [inputValue, setInputValue] = useState("");

  // @param: Evento, es quien recibe
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    // Si el input es superior a 2, agregará una categoria
    // a la lista en el componente padre
    if (inputValue.trim().length > 2) {
      // Se hace de esta forma, dado que en este componente no se puede
      // acceder directamente a la variable categories del componente
      // `GifExpertApp`, sin embargo esto se puede hacer de igual forma
      // enviando categories como otra prop a este componente
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Escribe aquí..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <h1> {inputValue} </h1>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
