// Server-side auth configuration: accept Firebase ID tokens.
//
// Firebase ID tokens are not OIDC-discoverable (securetoken.google.com serves
// no .well-known/openid-configuration), so Convex requires the `customJwt`
// provider shape here — NOT the OIDC `{ domain, applicationID }` shape.
//
// Firebase ID tokens carry:
//   iss = https://securetoken.google.com/<PROJECT_ID>
//   aud = <PROJECT_ID>
//   alg = RS256, signed with keys published at the x509/JWKS URL below.
export default {
  providers: [
    {
      type: "customJwt",
      issuer: "https://securetoken.google.com/usepushplay",
      applicationID: "usepushplay",
      jwks: "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com",
      algorithm: "RS256",
    },
  ],
};
