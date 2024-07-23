function addUtmParametersToUrl(utmParameters) {
  const currentUrl = new URL(window.location.href);

  for (const [key, value] of Object.entries(utmParameters)) {
    currentUrl.searchParams.set(key, value);
  }

  history.replaceState({}, "", currentUrl.toString());
}

function getUtmParametersFromSession() {
  const utmParametersString = sessionStorage.getItem("utmParameters");
  return utmParametersString ? JSON.parse(utmParametersString) : {};
}

const utmParameters = getUtmParametersFromSession();
if (Object.keys(utmParameters).length > 0) {
  addUtmParametersToUrl(utmParameters);
}
