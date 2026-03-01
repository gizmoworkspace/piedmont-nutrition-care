import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "Oncology Nutrition | Piedmont Nutrition Care",
  description: "Post-cancer treatment nutrition support. Gut recovery, immune rebuilding, and weight management for cancer survivors in Winston-Salem, NC.",
};

export default function Oncology() {
  return (
    <ConditionPage
      headline="Cancer treatment saved your life. Now your gut needs rebuilding."
      subheadline="Chemotherapy, radiation, and immunotherapy are powerful — but they devastate your digestive tract, immune function, and nutritional status. Post-treatment, your body needs targeted nutritional rehabilitation to restore gut integrity, rebuild immune resilience, and manage the weight and energy changes that cancer treatment leaves behind. Piedmont Nutrition Care provides clinical oncology nutrition support from a credentialed RD who understands the specific biochemical damage treatment causes."
      agitation={[
        "You survived treatment. But your body doesn't feel like yours anymore. Your gut is wrecked. Foods you used to enjoy cause nausea or pain. Your energy is gone. Your weight has shifted in ways that feel out of your control.",
        "And the nutrition advice you've received so far has been generic — \"eat healthy\" — without anyone explaining what \"healthy\" means for a body that's been through what yours has.",
      ]}
      howItWorks={[
        "Jeanne builds a recovery-stage nutrition protocol that addresses the specific damage treatment caused: gut lining repair, microbiome recolonization, immune-supporting nutrient optimization, and energy restoration.",
        "Your plan is coordinated with your oncology team and adapted to your current treatment phase — so that your nutrition works with your medical care, not in isolation from it.",
      ]}
      testimonial={{
        quote: "As a cancer survivor struggling with weight and gut issues, I'm so grateful to have found Jeanne. She understands the science of food as well as how to share it with me, apply it to my specific needs, and guide me to helpful resources.",
        author: "Ann",
        context: "Cancer survivor",
      }}
      ctaLabel="Book Your Oncology Nutrition Assessment"
      ctaTriggers={["60-minute sessions", "Coordinated with your care team", "Insurance accepted"]}
    />
  );
}
