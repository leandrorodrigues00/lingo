"use client";

import { useEffect, useState } from "react";
import { useSignIn } from "@clerk/nextjs";

import { env } from "@/env";
import { Button } from "@/components/ui/button";

const TestSignIn = () => {
  const { isLoaded, signIn } = useSignIn();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isLoaded) {
    return;
  }

  const testSignInWithEmailCode = async () => {
    const emailAddress = env.NEXT_PUBLIC_CLERK_TEST_EMAIL;
    const password = env.NEXT_PUBLIC_CLERK_TEST_PASSWORD;

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        window.location.assign("/learn");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <Button
      variant="super"
      onClick={async () => {
        await testSignInWithEmailCode();
      }}
    >
      Entrar sem Cadastro
    </Button>
  );
};

export default TestSignIn;
