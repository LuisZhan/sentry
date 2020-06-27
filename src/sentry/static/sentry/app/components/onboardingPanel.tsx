import React from 'react';
import styled from '@emotion/styled';

import {Panel} from 'app/components/panels';
import space from 'app/styles/space';

type Props = React.PropsWithChildren<{
  image?: React.ReactNode;
  className?: string;
}>;

function OnboardingPanel({className, image, children}: Props) {
  return (
    <Panel className={className}>
      <Container>
        <IlloBox>{image}</IlloBox>
        <StyledBox>{children}</StyledBox>
      </Container>
    </Panel>
  );
}

const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 425px;
  padding: ${space(1)} ${space(4)};

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    min-height: 250px;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StyledBox = styled('div')`
  flex: 1.5;
  padding: ${space(3)};
  width: auto;

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    padding: ${space(2)} 0 ${space(1)} 0;
    width: 100%;
  }

  @media (max-width: ${p => p.theme.breakpoints[2]}) {
    flex: 2;
  }
`;

const IlloBox = styled(StyledBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export default OnboardingPanel;
