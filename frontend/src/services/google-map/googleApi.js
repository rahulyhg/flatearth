// @flow

class RegisterGoogleMap {
  constructor() {
    this.initMap();
  }

  initMap() {
    const { head } = document;
    const script = document.createElement('script');
    const GAPI = process.env.REACT_APP_GAPI_KEY;
    const randomID = Math.floor(Date.now() / 1000).toString(16);
    script.src = `https://maps.googleapis.com/maps/api/js?v=3.28&key=${GAPI}&libraries=geometry`;
    script.defer = true;
    script.async = true;
    script.id = randomID;

    head.appendChild(script);

    script.onload = () => {
      this.googleMap = window.google;
      head.removeChild(script);
    };
  }
}

export default new RegisterGoogleMap();
