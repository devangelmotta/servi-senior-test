import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
    </>
  );
}


const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
