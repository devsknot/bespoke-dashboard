import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";
import BrandSidebar from '@/components/partials/sidebar'
import BrandFooter from '@/components/partials/footer'
import ThemeCustomize from '@/components/partials/customizer'
import BrandHeader from '@/components/partials/header'
import { auth } from "@/lib/auth";
import { redirect } from "@/components/navigation";
import { brandConfig } from "@/lib/brand";

const layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    if (!session) {
        redirect(brandConfig.mainRoute);
    }
    return (
        <LayoutProvider >
            <ThemeCustomize />
            <BrandHeader />
            <BrandSidebar />
            <LayoutContentProvider>
                {children}
                <BrandFooter />
            </LayoutContentProvider>
        </LayoutProvider>
    );
};

export default layout;
