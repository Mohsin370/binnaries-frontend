const Base_url_server = () => {
    let BaseURL = "http://localhost:4000";
  
    if (process.env.REACT_APP_SERVER === "production") {
      return (BaseURL = "https://ebh-backend-staging.herokuapp.com");
    } else {
      return BaseURL;
    }
  };
  
  export const environment = {
    BaseURL: Base_url_server(),
  };