import React from 'react';

import ReactSelect, { components } from 'react-select';

import './styles.css';

const Select = ({ 
    backgroundColor = 'white', 
    color = '#677885', 
    dropdownIcon, 
    searchable = false,
    ...rest 
}) => {
  const Icon = dropdownIcon;

  const overridedStyles = {
    control: defaultStyles => ({
      ...defaultStyles,
      border: 0,
      boxShadow: "none",
      backgroundColor,
      borderRadius: 0,
    }),
    indicatorSeparator: () => {},
    option: defaultStyles => ({ ...defaultStyles, color }),
    input: defaultStyles => ({ ...defaultStyles, color, font: 'Roboto Mono' }),
    dropdownIndicator: defaultStyles => ({
      ...defaultStyles,
      color,
    }),
    singleValue: defaultStyles => ({ ...defaultStyles, color }),
    menu: defaultStyles => ({ ...defaultStyles, borderRadius: 0, marginTop: 0 })
  };

  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      <Icon />
    </components.DropdownIndicator>
  );

  return (
    <div className="select-container">
      <ReactSelect
        className="react-wrapped-select"
        styles={overridedStyles}
        components={DropdownIndicator}
        noOptionsMessage={() => 'sem opções'}
        isSearchable={searchable}
        {...rest}
      />
    </div>
  )
};

export default Select;