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
      height: 30,
      display: 'flex',
      alignContent: 'center',
    }),
    option: defaultStyles => ({ ...defaultStyles, color }),
    input: defaultStyles => ({ ...defaultStyles, color }),
    dropdownIndicator: defaultStyles => ({ ...defaultStyles, color }),
    singleValue: defaultStyles => ({ ...defaultStyles, color }),
    menu: defaultStyles => ({ ...defaultStyles, borderRadius: 0, marginTop: 0 }),
    valueContainer: defaultStyles => ({ ...defaultStyles, position: 'static'}),
    multiValue: defaultStyles => ({ 
      ...defaultStyles, 
      borderRadius: 10,
      backgroundColor: '#6FFF98',
      display: 'flex',
      flex: 1,
      overflow: 'hidden'
    }),
    multiValueRemove: defaultStyles => ({ 
      ...defaultStyles, 
      backgroundColor: 'transparent',
      ':hover': {
        backgroundColor: 'transparent'
      }
    }),
    
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

  const MultiValue = props => (
    <components.MultiValue {...props}>
      {props.children}
    </components.MultiValue>
  );

  return (
    <div className="select-container">
      <ReactSelect
        className="react-wrapped-select"
        styles={overridedStyles}
        components={{ 
          Control, 
          DropdownIndicator, 
          IndicatorSeparator: null, 
          MultiValue,
        }}
        noOptionsMessage={() => 'sem opções'}
        isSearchable={searchable}
        {...rest}
      />
    </div>
  )
};

export default Select;