import { Metadata } from "next";
import { brandConfig } from '@/lib/brand';

export const metadata: Metadata = {
  title: brandConfig.metaTitle,
  description: brandConfig.metaDescription,
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
