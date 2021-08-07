import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * redirect to the app after authentication on strava app
 */
export default function useStravaAuth() {
  const router = useRouter();

  useEffect(() => {
    const code = router.query?.code;
    if (code) {
      router.push("rodi://stravaAuthSuccess?code=" + code);
    }
  }, [router.query?.code]);
}
