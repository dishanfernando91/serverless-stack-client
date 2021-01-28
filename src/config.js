const config = {
    s3: {
      REGION: "ap-south-1",
      BUCKET: "notes-app-tutorial-sl",
    },
    apiGateway: {
      REGION: "ap-south-1",
      URL: "https://xsbrgc1lzd.execute-api.ap-south-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID: "ap-south-1_WIxsPnqSQ",
      APP_CLIENT_ID: "7je9lnamif4t31r74pg473urch",
      IDENTITY_POOL_ID: "ap-south-1:e73781c6-3532-44e1-9a3a-43dd24520109",
    },
  };
  
  export default config;