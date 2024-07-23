function storeUtmParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParameters = {};

  for (const [key, value] of urlParams.entries()) {
    if (key.startsWith("utm_")) {
      utmParameters[key] = value;
    }
  }

  if (Object.keys(utmParameters).length > 0) {
    sessionStorage.setItem("utmParameters", JSON.stringify(utmParameters));
  }
}

storeUtmParameters();
