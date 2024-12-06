import React, {forwardRef} from 'react';

type AsProps<C extends React.ElementType> = {
  as?: C,
}

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"]

type Props<C extends React.ElementType> = {
  children?: React.ReactNode;
  as?: React.ElementType;
} & React.ComponentProps<C>

type PolymorphicComponentProps<C extends React.ElementType, P> =
    React.PropsWithChildren<AsProps<C> & P>
    & Omit<React.ComponentProps<C>, keyof (AsProps<C> & P)>

const ListItem = forwardRef(<C extends React.ElementType>(
    {children, as, ...restProps}: PolymorphicComponentProps<C, Props<C>>, ref?: PolymorphicRef<C>
) => {
  const Component = as ? as : "span"

  return (
      <Component {...restProps}>
        {children}
      </Component>
  );
});

ListItem.displayName = "ListItem"

export default ListItem;