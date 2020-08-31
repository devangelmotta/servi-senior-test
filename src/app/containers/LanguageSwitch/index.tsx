import React from 'react';
import { FormLabel } from 'app/components/FormLabel';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { translations, LanguageKey } from 'locales/i18n';

export function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value as LanguageKey;
    i18n.changeLanguage(language);
  };

  return (
    <Wrapper>
     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${FormLabel} {
    margin-bottom: 0.625rem;
  }
`;
const Languages = styled.div`
  display: flex;

  .radio {
    margin-right: 1.5rem;
  }
`;
