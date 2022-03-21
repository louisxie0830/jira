import styled from 'styled-components';
import Image from 'next/image'

import { font } from '../../styles/globalStyles';

export const FeedbackDropdown = styled.div`
  padding: 16px 24px 24px;
`;

export const FeedbackImageCont = styled.div`
  padding: 24px 56px 20px;
`;

export const FeedbackImage = styled(Image)`
  width: 100%;
`;

export const FeedbackParagraph = styled.p`
  margin-bottom: 12px;
  ${font.size(15)}
  &:last-of-type {
    margin-bottom: 22px;
  }
`;
