import React from 'react';
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';

function I18N({ t }) {

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <button onClick={() => changeLanguage('de')}>de</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <h1>{t('Bem-vindo')}</h1>
    </div>
  )
}

export default withNamespaces()(I18N);