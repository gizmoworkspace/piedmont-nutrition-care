import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "local",
  token: process.env.TINA_TOKEN || "local",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "global",
        label: "Global Settings",
        path: "content",
        match: {
          include: "global",
        },
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          { type: "string", name: "siteName", label: "Site Name" },
          { type: "string", name: "practitionerName", label: "Practitioner Name" },
          { type: "string", name: "credentials", label: "Credentials" },
          { type: "string", name: "phone", label: "Phone Number" },
          { type: "string", name: "email", label: "Email Address" },
          { type: "string", name: "bookingUrl", label: "Booking URL (link for all Book buttons)" },
          {
            type: "object",
            name: "address",
            label: "Office Address",
            fields: [
              { type: "string", name: "street", label: "Street" },
              { type: "string", name: "city", label: "City" },
              { type: "string", name: "state", label: "State" },
              { type: "string", name: "zip", label: "ZIP Code" },
            ],
          },
          {
            type: "string",
            name: "insuranceCarriers",
            label: "Insurance Carriers",
            list: true,
          },
          { type: "string", name: "googleRating", label: "Google Rating" },
          { type: "string", name: "yearsExperience", label: "Years of Experience" },
          { type: "string", name: "youtubeVideoUrl", label: "Featured YouTube Video URL (paste full YouTube link — leave empty to hide)" },
          {
            type: "object",
            name: "recipeOfTheWeek",
            label: "Recipe of the Week (leave title empty to hide)",
            fields: [
              { type: "string", name: "title", label: "Recipe Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "imageUrl", label: "Recipe Photo" },
              { type: "string", name: "youtubeUrl", label: "Recipe Video URL (YouTube)" },
              { type: "string", name: "linkUrl", label: "Full Recipe Link" },
            ],
          },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "content",
        match: {
          include: "testimonials",
        },
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            ui: {
              itemProps: (item: Record<string, string>) => ({
                label: item?.author || "Testimonial",
              }),
            },
            fields: [
              { type: "string", name: "id", label: "ID (internal)" },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "author", label: "Author Name" },
              { type: "string", name: "context", label: "Context (e.g. Cancer survivor)" },
            ],
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
              { type: "string", name: "headlineHighlight", label: "Headline Highlight (green text)" },
              { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
              { type: "string", name: "primaryCTA", label: "Primary CTA Text" },
              { type: "string", name: "secondaryCTA", label: "Secondary CTA Text" },
              { type: "string", name: "secondaryCTAHref", label: "Secondary CTA Link" },
              { type: "string", name: "clickTriggers", label: "Click Triggers (below buttons)" },
              { type: "image", name: "heroImage", label: "Hero Image" },
            ],
          },
          {
            type: "object",
            name: "proofBar",
            label: "Proof Bar Items",
            list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon (star, academic, clipboard, building, shield, beaker, chat)" },
              { type: "string", name: "text", label: "Text" },
            ],
          },
          {
            type: "object",
            name: "agitation",
            label: "Agitation Section",
            fields: [
              { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
          { type: "string", name: "crosshead", label: "Crosshead Quote", ui: { component: "textarea" } },
          {
            type: "object",
            name: "howSection",
            label: "How It Works Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "comparisonTable",
            label: "Comparison Table",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "rows",
                label: "Rows",
                list: true,
                fields: [
                  { type: "string", name: "old", label: "The Old Way" },
                  { type: "string", name: "new", label: "Piedmont Way" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "objections",
            label: "Objections / FAQ",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          { type: "string", name: "stakes", label: "Stakes Section", ui: { component: "textarea" } },
          {
            type: "object",
            name: "finalCTA",
            label: "Final CTA",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "primaryLabel", label: "Primary Button Text" },
              { type: "string", name: "secondaryLabel", label: "Secondary Button Text" },
              { type: "string", name: "secondaryHref", label: "Secondary Button Link" },
              { type: "string", name: "triggers", label: "Triggers", list: true },
              {
                type: "object",
                name: "testimonial",
                label: "Testimonial",
                fields: [
                  { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
                  { type: "string", name: "author", label: "Author" },
                ],
              },
            ],
          },
          // Services page specific
          {
            type: "object",
            name: "mnt",
            label: "MNT Section (Services)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "process",
            label: "Process Steps (Services)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "step", label: "Step Number" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "included",
            label: "What's Included (Services)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "items", label: "Items", list: true },
            ],
          },
          {
            type: "object",
            name: "conditions",
            label: "Conditions Links (Services/Conditions)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description" },
                  { type: "string", name: "href", label: "Link" },
                  { type: "string", name: "hook", label: "Hook Text" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "comparison",
            label: "Comparison Table (Services)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "rows",
                label: "Rows",
                list: true,
                fields: [
                  { type: "string", name: "old", label: "The Old Way" },
                  { type: "string", name: "new", label: "Piedmont Way" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "closing",
            label: "Closing Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
            ],
          },
          // Insurance page specific
          {
            type: "object",
            name: "coverage",
            label: "Coverage Section (Insurance)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "verifyHeadline", label: "Verify Headline" },
              { type: "string", name: "verifySteps", label: "Verify Steps", list: true },
            ],
          },
          {
            type: "object",
            name: "selfPay",
            label: "Self-Pay (Insurance)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Service" },
                  { type: "string", name: "price", label: "Price" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "roi",
            label: "ROI Section (Insurance)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
            ],
          },
          // FAQ page specific
          {
            type: "object",
            name: "sections",
            label: "FAQ Sections",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "object",
                name: "items",
                label: "Questions",
                list: true,
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          // Contact page specific
          {
            type: "object",
            name: "bookOnline",
            label: "Book Online (Contact)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "body", label: "Body" },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "note", label: "Note" },
            ],
          },
          {
            type: "object",
            name: "call",
            label: "Call Section (Contact)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "emailSection",
            label: "Email Section (Contact)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "body", label: "Body" },
            ],
          },
          {
            type: "object",
            name: "whatToExpect",
            label: "What to Expect (Contact)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "text", label: "Text" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "location",
            label: "Location (Contact)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "note", label: "Note" },
              { type: "string", name: "mapEmbedUrl", label: "Google Maps Embed URL" },
            ],
          },
          {
            type: "object",
            name: "insuranceQuickCheck",
            label: "Insurance Quick Check (Contact)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "body", label: "Body" },
              { type: "string", name: "triggers", label: "Triggers" },
            ],
          },
          // About page specific
          {
            type: "object",
            name: "originStory",
            label: "Origin Story (About)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "differentiators",
            label: "Differentiators (About)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "invitation",
            label: "Invitation (About)",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "condition",
        label: "Conditions",
        path: "content/conditions",
        format: "json",
        fields: [
          { type: "string", name: "slug", label: "URL Slug" },
          { type: "string", name: "metaTitle", label: "Page Title (SEO)" },
          { type: "string", name: "metaDescription", label: "Meta Description (SEO)" },
          { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
          { type: "string", name: "subheadline", label: "Subheadline", ui: { component: "textarea" } },
          { type: "string", name: "agitation", label: "Agitation Paragraphs", list: true, ui: { component: "textarea" } },
          { type: "string", name: "howItWorks", label: "How It Works Paragraphs", list: true, ui: { component: "textarea" } },
          {
            type: "object",
            name: "testimonial",
            label: "Testimonial",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "author", label: "Author" },
              { type: "string", name: "context", label: "Context" },
            ],
          },
          { type: "string", name: "ctaLabel", label: "CTA Headline" },
          { type: "string", name: "ctaTriggers", label: "CTA Triggers", list: true },
          { type: "image", name: "heroImage", label: "Hero Image" },
        ],
      },
    ],
  },
});
