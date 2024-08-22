"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  const convex = new ConvexReactClient(convexUrl);

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {/* <AuthLoading> */}
          {/* <div>Loading...</div> */}
        {/* </AuthLoading> */}
        {/* <Authenticated> */}
          {children}
          {/* </Authenticated> */}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
