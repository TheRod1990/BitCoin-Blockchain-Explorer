import { Cart } from '@components/icons';
import { Badge, IconButton } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { useCartQuery } from '../../graphql';

const HeaderCartButton: React.VFC = () => {
  const { data: { cart } = { cart: undefined } } = useCartQuery({
    fetchPolicy: 'no-cache',
    ssr: false,
  });

  return (
    <Link passHref href="/cart">
      <IconButton color="inherit" aria-label="Cart">
        <Badge
          badgeContent={cart?.contents?.itemCount}
          color="primary"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Cart />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default HeaderCartButton;
