import React from 'react';
import styled from '@emotion/styled';

import OnboardingPanel from 'app/components/onboardingPanel';
import Button from 'app/components/button';
import space from 'app/styles/space';
import {t} from 'app/locale';

import emptyStateImg from '../../../images/spot/performance-empty-state.svg';

function Onboarding() {
  return (
    <StyledOnboardingPanel image={<StyledImage src={emptyStateImg} />}>
      <h3>{t('Pinpoint problems')}</h3>
      <p>
        {t(
          "You've got this souped up plan. Now what? Get your software set up. We’ve got transactions to track down."
        )}
      </p>
      <ButtonList>
        <Button
          priority="default"
          target="_blank"
          href="https://docs.sentry.io/performance-monitoring/performance/"
        >
          {t('Learn More')}
        </Button>
        <Button
          priority="primary"
          target="_blank"
          href="https://docs.sentry.io/performance-monitoring/setup/"
        >
          {t('Start Setup')}
        </Button>
      </ButtonList>
    </StyledOnboardingPanel>
  );
}

const StyledOnboardingPanel = styled(OnboardingPanel)`
  background: url(${emptyStateImg}) no-repeat 25% center/800px;

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    background: none;
  }
`;

const ButtonList = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, max-content));
  grid-gap: ${space(1)};
`;

const StyledImage = styled('img')`
  display: none;

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    display: block;
  }
`;

export default Onboarding;
