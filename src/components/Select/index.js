import React from 'react';

import ReactSelect, { components } from 'react-select';

import './styles.css';

const Select = ({ 
    backgroundColor = 'white', 
    color = '#677885', 
    dropdownIcon = null, 
    leftIcon = null,
    searchable = false,
    ...rest 
}) => {
  const DropdownIcon = dropdownIcon;
  const LeftIcon = leftIcon;

  const overridedStyles = {
    control: defaultStyles => ({
      ...defaultStyles,
      border: 0,
      boxShadow: "none",
      backgroundColor,
      borderRadius: 0,
      minHeight: 30,
      height: 30
    }),
    indicatorSeparator: () => {},
    option: defaultStyles => ({ ...defaultStyles, color }),
    input: defaultStyles => ({ ...defaultStyles, color }),
    dropdownIndicator: defaultStyles => ({
      ...defaultStyles,
      color,
    }),
    singleValue: defaultStyles => ({ ...defaultStyles, color }),
    menu: defaultStyles => ({ ...defaultStyles, borderRadius: 0, marginTop: 0 })
  };

  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      { dropdownIcon && <DropdownIcon size={20}/> }
    </components.DropdownIndicator>
  );
  
  const Control = props => (
    <components.Control {...props}>
      { leftIcon && <LeftIcon size={20} className="select-custom-left-icon" color="#0A263A"/> }
      {props.children}
    </components.Control>
  );

  return (
    <div className="select-container">
      <ReactSelect
        className="react-wrapped-select"
        styles={overridedStyles}
        components={{ Control, DropdownIndicator }}
        noOptionsMessage={() => 'sem opções'}
        isSearchable={searchable}
        {...rest}
      />
    </div>
  )
};

export default Select;