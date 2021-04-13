import { useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";

import { useRouter } from "next/router";
import styled from "styled-components";

import Headers from "../components/SeoHeaders";
import DownloadPopup from "../components/DownloadPopup";

const Placeholder = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.dark};
`;

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <>
      <Headers />
      <Placeholder>
        <DownloadPopup
          onClose={() => {
            router.push("/");
          }}
          skipMessage="Learn more about Rodi first."
        />
      </Placeholder>
    </>
  );
}
