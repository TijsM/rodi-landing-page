import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useStravaAuth() {
  const router = useRouter();

  // redirect to the app after authentication on strava app
  useEffect(() => {
    const code = router.query?.code;
    console.log(code)
    if (code) {
      console.log("here");
      //@ts-ignore
      window.location = "rodi://stravaAuthSuccess?code=" + code;
    }
  }, [router.query?.code]);
}
