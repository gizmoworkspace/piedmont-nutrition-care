import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export function getContent<T = Record<string, unknown>>(filePath: string): T {
  const fullPath = path.join(contentDir, filePath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(raw) as T;
}

export function getGlobal() {
  return getContent<{
    siteName: string;
    practitionerName: string;
    credentials: string;
    phone: string;
    email: string;
    bookingUrl: string;
    address: { street: string; city: string; state: string; zip: string };
    insuranceCarriers: string[];
    googleRating: string;
    yearsExperience: string;
  }>("global.json");
}

export function getTestimonials() {
  return getContent<{
    testimonials: Array<{
      id: string;
      quote: string;
      author: string;
      context: string;
    }>;
  }>("testimonials.json");
}
