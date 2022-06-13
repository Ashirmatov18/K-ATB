import React from "react";
import { useRouter } from "next/router";

export default function GuidesDetail() {
  const router = useRouter();
  const { details } = router.query;
  return <div>{details}</div>;
}
