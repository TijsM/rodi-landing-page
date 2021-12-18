import ReactGA from "react-ga";

export type AnalyticsData = {
  category: "header" | "download section" | "Sign up popup" | "footer section";
  event: {
    type: "click" | "submit" | "focus";
    name: string;
  };
};

const isDev = process.env.NODE_ENV === "development";

export const initGA = () => {
  !isDev && ReactGA.initialize("UA-148987890-5");
};
export const logPageView = () => {
  !isDev && ReactGA.set({ page: window.location.pathname });
  !isDev && ReactGA.pageview(window.location.pathname);
};
export const logEvent = (data: AnalyticsData) => {
  !isDev &&
    ReactGA.event({
      category: data.category,
      action: data.event.type + " - " + data.event.name,
    });
};
export const logException = (description = "", fatal = false) => {
  if (description && !isDev) {
    ReactGA.exception({ description, fatal });
  }
};
