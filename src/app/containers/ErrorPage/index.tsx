/**
 *
 * ErrorPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { InternalError } from 'assets/weather-icons';
import Column from 'app/components/Column';
import Text from 'app/components/Text';
import { Link } from 'app/components/Link';
interface Props {}

export const ErrorPage = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>ErrorPage</title>
        <meta name="description" content="Internal server error" />
      </Helmet>
      <Column>
        <InternalError />
        <Text color='#000' fontSize='1.5rem'>
          Internal server error
        </Text>
        <Link to="/">
            <Text color='##20b2aa' fontSize='2rem'>
              Volver a Home
            </Text>
          </Link>
      </Column>
    </>
  );
});
