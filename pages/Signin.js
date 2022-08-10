import React from "react";
import GoogleLogin from "react-google-login";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Sigin() {
  const { status } = useSession();
  const router = useRouter();

  let callBack = "/";
  if (
    router.query.from !== undefined &&
    typeof router.query.from === "string"
  ) {
    callBack = router.query.from;
  }
  if (status === "authenticated") {
    router.push(callBack);
  }

  return (
    <GoogleLogin
      buttonText="Login"
      onClick={() => signIn("google", { callbackUrl: callBack })}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default Sigin;
