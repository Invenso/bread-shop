#pragma checksum "D:\demo\bread-shop\blazor\Breadshop\Client\Shared\NavMenu.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5674ba7ef346f640e9539a80f08747d7b20d7f5e"
// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace Breadshop.Client.Shared
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#line 1 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#line 2 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#line 3 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#line 4 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#line 5 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#line 6 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Breadshop.Client;

#line default
#line hidden
#line 7 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Breadshop.Client.Shared;

#line default
#line hidden
    public partial class NavMenu : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#line 28 "D:\demo\bread-shop\blazor\Breadshop\Client\Shared\NavMenu.razor"
       
    private bool collapseNavMenu = true;

    private string NavMenuCssClass => collapseNavMenu ? "collapse" : null;

    private void ToggleNavMenu()
    {
        collapseNavMenu = !collapseNavMenu;
    }

#line default
#line hidden
    }
}
#pragma warning restore 1591