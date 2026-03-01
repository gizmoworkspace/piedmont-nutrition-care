import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "Cardiovascular Health & Cholesterol | Piedmont Nutrition Care",
  description: "Lower LDL, raise HDL, reduce triglycerides through targeted food chemistry. Cardiovascular nutrition therapy in Winston-Salem, NC.",
};

export default function HeartHealth() {
  return (
    <ConditionPage
      headline="Your cholesterol numbers are heading the wrong direction. The right foods can turn them around."
      subheadline={"High LDL, low HDL, elevated triglycerides, and high blood pressure aren\u2019t conditions you just \u201cmanage with medication.\u201d They\u2019re signals that your body needs a different nutritional foundation. Piedmont Nutrition Care uses your actual lipid panel data to build a food chemistry protocol that targets the specific cardiovascular risk factors in your bloodwork."}
      agitation={[
        "Your doctor put you on a statin and said \"watch your diet.\" But watching your diet hasn't changed the numbers. You're not sure which fats are actually dangerous, which foods genuinely help, and whether the conflicting advice you've read online is based on real science or marketing.",
        "Meanwhile, the next lab panel is approaching and you're bracing for the same conversation: \"numbers haven't improved, let's increase the dose.\"",
      ]}
      howItWorks={[
        "Jeanne reviews your full lipid panel — not just total cholesterol, but the particle sizes, ratios, and inflammatory markers that actually predict cardiovascular risk. She identifies which dietary patterns are driving your specific lipid profile and builds a protocol that targets those drivers directly.",
        "You'll learn which foods lower LDL through real mechanisms (not marketing claims), how to raise HDL through food choices, and which so-called \"heart-healthy\" products are actually making things worse.",
      ]}
      testimonial={{
        quote: "Jeanne is extremely knowledgeable about food, food chemistry, and the latest research findings on nutrition. She can suggest dietary changes to prevent cancer, boost a sluggish metabolism, improve blood sugar, or lower LDL.",
        author: "Liz",
      }}
      ctaLabel="Book Your Cardiovascular Nutrition Assessment"
      ctaTriggers={["Walk into your next appointment with numbers that surprise both of you"]}
    />
  );
}
