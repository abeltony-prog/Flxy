import React, { useCallback } from "react";
import { useSession ,signIn} from "next-auth/react"


import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
const Signin = () => {
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

    <button onClick={() => signIn("google", {callbackUrl:callBack})}>Sign in</button>

  );
};

export default Signin;
