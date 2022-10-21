import React from 'react';
import '../assets/stylesheets/buttons.scss';

const CustomButton = ({children, ...otherProps}) => (
  <button className="button-main">{children}</button>
)

export default CustomButton;
