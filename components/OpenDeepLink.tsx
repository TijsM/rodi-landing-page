import Image from "next/image";
import React from "react";
import {
  Content,
  Title,
  SubTitle,
  Button,
  ButtonText,
  ImageContainer,
  OpenArticle,
  DonwloadArticle,
  DownloadButtonContainer,
} from "../styles/componentStyles/OpenDeepLink";
import { PageLayout } from "../styles/Layouts";
import StoreButtons from "./StoreButtons";

export default function OpenDeepLink() {
  return (
    <PageLayout>
      <Content>
        <OpenArticle>
          <Title>Oops, it looks like Rodi did not open.</Title>
          <SubTitle>Click the button below to open the app.</SubTitle>
          <Button>
            <ButtonText>Open in Rodi</ButtonText>
            <ImageContainer>
              <Image
                src="/images/location.png"
                alt="Rodi location icon"
                width={75}
                height={75}
              />
            </ImageContainer>
          </Button>
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
