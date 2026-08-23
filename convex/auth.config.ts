// Server-side auth configuration: accept Firebase ID tokens (OIDC provider).
// Firebase issues OIDC-compliant ID tokens with iss = securetoken.google.com/<PROJECT_ID>
// and aud = <PROJECT_ID>.
export default {
  providers: [
    {
      domain: "https://securetoken.google.com/usepushplay",
      applicationID: "usepushplay",
    },
  ],
};
