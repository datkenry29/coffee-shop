"use client";

export default function ReduxProvider({children, isAdmin = false}) {
  return <session>{children}</session>;
}
