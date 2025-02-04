const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '100%',
      backgroundColor: '#f1f5f9',
      border: 'none',
      borderBottom: '1px solid #78716c',
      borderRadius: "0",
      paddingBottom: '.4rem',
      fontSize: '1rem',
      outline: 'none',
      boxShadow: 'none',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#78716c',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#000000',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#f1f5f9',
      width: '100%',
    }),
  };
  export default customSelectStyles