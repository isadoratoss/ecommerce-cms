import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Item } from "@radix-ui/react-select"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Cadastros",
      url: "#",
      items: [
        {
          title: "Categorias",
          url: "/categories",
        },
        {
          title: "Marcas",
          url: "/brands",
        },
      ],
    },
    {
      title: "Produtos",
      url: "/products",
      items: [
        {
          title: "Vendas",
          url: "#",
        },
        {
          title: "Pedidos",
          url: "/orders",
        },
        {
          title: "Clientes",
          url: "#",
        },
        
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
    
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarMenu className="gap-2">
                {data.navMain.map((item)=>(
                    <SidebarMenu
                ))}
            </SidebarMenu>
        </SidebarGroup>
        {/* We create a SidebarGroup for each parent. */}

      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
