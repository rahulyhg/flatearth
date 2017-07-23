// @flow

const initMap = (callback: Function): void => {
  const { head } = document;
  if (!head) return;
  const GAPI: ?string = process.env.REACT_APP_GAPI_KEY;
  if (!GAPI) return;

  const script = document.createElement('script');
  const randomID = Math.floor(Date.now() / 1000).toString(16);
  script.src = `https://maps.googleapis.com/maps/api/js?v=3.28&key=${GAPI}&libraries=geometry`;
  script.defer = true;
  script.async = true;
  script.id = randomID;

  head.appendChild(script);
  script.onload = () => {
    callback(window.google);
    head.removeChild(script);
  };
};

export default initMap;
