import React from 'react';

import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

import feedbackImage from './assets/feedback.png';
import { FeedbackDropdown, FeedbackImageCont, FeedbackImage, FeedbackParagraph } from './Styles';

export const AboutTooltip = tooltipProps => (
  <Tooltip
    width={300}
    {...tooltipProps}
    renderContent={() => (
      <FeedbackDropdown>
        <FeedbackImageCont>
          <FeedbackImage src={feedbackImage} alt="Give feedback" />
        </FeedbackImageCont>

        <FeedbackParagraph>
          This simplified Jira clone is built with React on the front-end and Java/Spring Boot on the
          back-end.
        </FeedbackParagraph>

        <FeedbackParagraph>
          {'Read more on my website or reach out via '}
          <a href="mailto:bfgh2678@gmail.com">
            <strong>bfgh2678@gmail.com</strong>
          </a>
        </FeedbackParagraph>

        <a href="javascript:void(0)" target="_blank" rel="noreferrer noopener">
          <Button variant="primary">Visit Website</Button>
        </a>

        <a href="javascript:void(0)" target="_blank" rel="noreferrer noopener">
          <Button style={{ marginLeft: 10 }} icon="github">
            Github Repo
          </Button>
        </a>
      </FeedbackDropdown>
    )}
  />
);

