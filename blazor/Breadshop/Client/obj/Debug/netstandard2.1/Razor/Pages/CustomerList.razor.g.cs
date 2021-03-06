#pragma checksum "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "3a73c6d1421c24d821156852253535fcbe9a6581"
// <auto-generated/>
#pragma warning disable 1591
namespace Breadshop.Client.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Breadshop.Client;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "D:\demo\bread-shop\blazor\Breadshop\Client\_Imports.razor"
using Breadshop.Client.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
using Breadshop.Shared.Models;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/customers")]
    public partial class CustomerList : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "<h1>Customers</h1>\r\n\r\n");
#nullable restore
#line 7 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
 if (_customers == null)
{

#line default
#line hidden
#nullable disable
            __builder.AddContent(1, "    ");
            __builder.AddMarkupContent(2, "<p><em>Loading...</em></p>\r\n");
#nullable restore
#line 10 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
}
else
{

#line default
#line hidden
#nullable disable
            __builder.AddContent(3, "    ");
            __builder.OpenElement(4, "table");
            __builder.AddAttribute(5, "class", "table");
            __builder.AddMarkupContent(6, "\r\n        ");
            __builder.AddMarkupContent(7, "<thead>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Email</th>             \r\n            </tr>\r\n        </thead>\r\n        ");
            __builder.OpenElement(8, "tbody");
            __builder.AddMarkupContent(9, "\r\n");
#nullable restore
#line 21 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
             foreach (var customer in Customers)
            {

#line default
#line hidden
#nullable disable
            __builder.AddContent(10, "                ");
            __builder.OpenElement(11, "tr");
            __builder.AddMarkupContent(12, "\r\n                    ");
            __builder.OpenElement(13, "td");
            __builder.AddContent(14, 
#nullable restore
#line 24 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
                          String.Format("{0} {1}", customer.FirstName, customer.LastName)

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(15, "\r\n                    ");
            __builder.OpenElement(16, "td");
            __builder.AddContent(17, 
#nullable restore
#line 25 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
                         customer.Email

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(18, "\r\n                   \r\n                ");
            __builder.CloseElement();
            __builder.AddMarkupContent(19, "\r\n");
#nullable restore
#line 28 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
            }

#line default
#line hidden
#nullable disable
            __builder.AddContent(20, "        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(21, "\r\n    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(22, "\r\n");
#nullable restore
#line 31 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
}

#line default
#line hidden
#nullable disable
        }
        #pragma warning restore 1998
#nullable restore
#line 33 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CustomerList.razor"
       
     private Customer[] _customers;

    protected override async Task OnInitializedAsync()
    {
        _customers = await Http.GetJsonAsync<Customer[]>("api/Customers");
    }

    public Customer[] Customers => _customers;

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private HttpClient Http { get; set; }
    }
}
#pragma warning restore 1591
