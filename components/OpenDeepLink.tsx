import Image from "next/image";
import React from "react";
import {
  Content,
  Title,
  SubTitle,
  A,
  ButtonText,
  ImageContainer,
  OpenArticle,
  DonwloadArticle,
  DownloadButtonContainer,
} from "../styles/componentStyles/OpenDeepLink";
import { PageLayout } from "../styles/Layouts";
import StoreButtons from "./StoreButtons";

interface OpenDeepLinkProps {
  onClick: () => void;
}

export default function OpenDeepLink({ onClick }: OpenDeepLinkProps) {
  return (
    <PageLayout>
      <Content>
        <OpenArticle>
          <Title>Oops, it looks like Rodi did not open.</Title>
          <SubTitle>Click the button below to open the app.</SubTitle>
          <A onClick={onClick}>
            <ImageContainer>
              <Image
                src="/images/icon-rodi.png"
                alt="Rodi location icon"
                width={50}
                height={50}
              />
            </ImageContainer>
            <ButtonText>Open in Rodi</ButtonText>
          </A>
        </OpenArticle>
        <DonwloadArticle>
          <SubTitle>
            If you haven’t installed Rodi yet, you can download it here:
          </SubTitle>
          <DownloadButtonContainer>
            <StoreButtons analyticsCategory="open deeplink page" />
          </DownloadButtonContainer>
        </DonwloadArticle>
      </Content>
    </PageLayout>
  );
}
