import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// move this to the constants dir
const data = [
  { number: 20, text: 'Projects'},
  { number: 1000, text: 'Text', },
  { number: 1000, text: 'Text', },
  { number: 1000, text: 'PLaceholder text', }
];

const Acomplishments = () => (
 <Section>
  <SectionTitle>Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index) => (
      <Box key={index}>
        <BoxNum>
          {card.number} +
        </BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
 </Section>
);

export default Acomplishments;
