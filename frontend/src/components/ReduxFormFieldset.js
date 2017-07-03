// @flow
import React from 'react';
import type { Children } from 'react';

import { Label, Icon, Textarea, FieldsetStyled } from './ReduxFormFieldset.styled';

type ReduxFormFieldsetPropsType = {
  type: string,
  component: React$Component<*> | 'input',
  children: Children
};

const ReduxFormFieldSet = ({ type, component, children }: ReduxFormFieldsetPropsType) => {
  return (
    <FieldsetStyled>
      <Textarea name={type} component={component} type={type} />
      <Label htmlFor={type}>
        {children}
      </Label>
      <Icon />
    </FieldsetStyled>
  );
};

export default ReduxFormFieldSet;
