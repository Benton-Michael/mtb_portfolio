import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:323-484-1757">323-484-1757</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:">Email</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>A React develooper with Persistence!</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com/Benton-Michael">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mtbenton">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://medium.com/@mbenton002">
        <AiFillMediumSquare size="4rem" />
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
