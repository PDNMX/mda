import React from 'react';
import NavigationButtons from './NavigationButtons';
import { Outlet } from 'react-router-dom';

export const FilterPage = (...props) => {
  return (
    <div>
      <NavigationButtons props={props}></NavigationButtons>

      <Outlet></Outlet>
    </div>
  );
};
