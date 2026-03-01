import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "IBS & Digestive Disorders | Piedmont Nutrition Care",
  description: "Resolve IBS, chronic bloating, and digestive pain through targeted gut microbiome restoration. Medical Nutrition Therapy in Winston-Salem, NC.",
};

export default function IBS() {
  return (
    <ConditionPage
      headline="Your stomach bloats after every meal. Your doctor can't explain why. Your gut bacteria can."
      subheadline={"IBS, chronic bloating, abdominal pain, and unpredictable bowel habits aren\u2019t \u201cjust stress.\u201d They\u2019re signs of a digestive tract that\u2019s been damaged by years of antibiotics, processed food, restrictive diets, or chronic stress. Piedmont Nutrition Care identifies which gut imbalances are driving your symptoms and uses targeted food chemistry to restore digestive function \u2014 without another round of steroids or a lifetime of avoidance."}
      agitation={[
        "Everything you eat makes your stomach blow up like a balloon. You mentally map public restrooms before leaving the house. You've tried digestive enzymes, fiber supplements, probiotics, apple cider vinegar, aloe vera, glutamine — the entire supplement aisle — with no lasting improvement.",
        "Your anxiety makes your IBS worse, and your IBS makes your anxiety worse. It's a cycle that makes normal life — dinner with friends, travel, even a routine workday — feel impossible. And the last doctor you saw told you to \"reduce stress\" as if that were something you hadn't already considered.",
      ]}
      howItWorks={[
        "Jeanne evaluates your digestive function, identifies which bacterial populations are over- or under-represented in your gut, and determines which foods are triggering your inflammatory response versus supporting gut repair. The protocol isn't about avoidance — it's about rebuilding.",
        "You'll learn which specific foods feed the beneficial bacteria your gut needs to function, and which seemingly \"healthy\" foods may be aggravating your specific condition.",
      ]}
      testimonial={{
        quote: "After months of intense IBS symptoms, I met with Jeanne to help figure out which foods to avoid and which foods to eat so that I wouldn't have to continue taking steroids and antibiotics. After following her recommendations, I am feeling so much better. I'm living and eating with far less abdominal pain and digestive issues.",
        author: "M. Cooper",
      }}
      ctaLabel="Book Your IBS & Gut Health Assessment"
      ctaTriggers={["60-minute sessions", "Insurance accepted", "No more guessing which foods are safe"]}
    />
  );
}
