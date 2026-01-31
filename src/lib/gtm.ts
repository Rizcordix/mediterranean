let gtm: typeof import("react-gtm-module");

export const getGTM = async () => {
  if (!gtm && typeof window !== "undefined") {
    gtm = await import("react-gtm-module");
    gtm.initialize({
      gtmId: "GTM-M6CFLD2Z",
    });
  }

  return gtm;
};