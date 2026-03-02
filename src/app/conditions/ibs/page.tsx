import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";
import { getContent } from "@/lib/content";

const data = getContent<{
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  subheadlineShort?: string;
  agitation: string[];
  agitationShort?: string[];
  howItWorks: string[];
  howItWorksShort?: string[];
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
      agitationShort={data.agitationShort}
      howItWorks={data.howItWorks}
      howItWorksShort={data.howItWorksShort}
      subheadlineShort={data.subheadlineShort}
    />
  );
}
