import { redirect } from "next/navigation";

/* The company overview now lives at /product. Kept so older links don't 404. */
export default function CompanyPage() {
  redirect("/product");
}
