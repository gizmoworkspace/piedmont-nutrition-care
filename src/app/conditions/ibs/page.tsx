import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";
import { getContent } from "@/lib/content";

const data = getContent<{
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  agitation: string[];
  howItWorks: string[];
  testimonial: { quote: string; author: string; context: string };
  ctaLabel: string;
  ctaTriggers: string[];
}>("conditions/ibs.json");

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function IBS() {
  return (
    <ConditionPage
      headline={data.headline}
      subheadline={data.subheadline}
      agitation={data.agitation}
      howItWorks={data.howItWorks}
    />
  );
}
