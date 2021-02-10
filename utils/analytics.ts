import ReactGA from "react-ga";

export type AnalyticsData = {
  category: "header" | "download section";
  event: {
    type: "click";
    name: string;
  };
};

export const initGA = () => {
  ReactGA.initialize("UA-148987890-5");
};
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (data: AnalyticsData) => {
  ReactGA.event({
    category: data.category,
    action: data.event.type + " - " + data.event.name,
  });
};
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
