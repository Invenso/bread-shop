#pragma checksum "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b4f5c744fef1e228c0d46c199098776d0e24c4a9"
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
#line 2 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor"
using Breadshop.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor"
using Breadshop.Shared.Models;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/products/create")]
    public partial class CreateProduct : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "<h3>Inventory</h3>\r\n");
            __builder.OpenElement(1, "div");
            __builder.AddAttribute(2, "class", "row");
            __builder.AddMarkupContent(3, "\r\n    ");
            __builder.OpenElement(4, "div");
            __builder.AddAttribute(5, "class", "col");
            __builder.AddMarkupContent(6, "\r\n        ");
            __builder.AddMarkupContent(7, "<h4>Add a new product</h4>\r\n        ");
            __builder.OpenElement(8, "form");
            __builder.AddMarkupContent(9, "\r\n            ");
            __builder.OpenElement(10, "div");
            __builder.AddAttribute(11, "class", "form-group");
            __builder.AddMarkupContent(12, "\r\n                ");
            __builder.AddMarkupContent(13, "<label for=\"productName\">Name</label>\r\n                ");
            __builder.OpenElement(14, "input");
            __builder.AddAttribute(15, "type", "text");
            __builder.AddAttribute(16, "class", "form-control");
            __builder.AddAttribute(17, "id", "productName");
            __builder.AddAttribute(18, "placeholder", "Enter name");
            __builder.AddAttribute(19, "value", Microsoft.AspNetCore.Components.BindConverter.FormatValue(
#nullable restore
#line 14 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor"
                              product.Name

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(20, "onchange", Microsoft.AspNetCore.Components.EventCallback.Factory.CreateBinder(this, __value => product.Name = __value, product.Name));
            __builder.SetUpdatesAttributeName("value");
            __builder.CloseElement();
            __builder.AddMarkupContent(21, "\r\n            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(22, "\r\n            ");
            __builder.OpenElement(23, "div");
            __builder.AddAttribute(24, "class", "form-group");
            __builder.AddMarkupContent(25, "\r\n                ");
            __builder.AddMarkupContent(26, "<label for=\"productDescription\">Description</label>\r\n                ");
            __builder.OpenElement(27, "input");
            __builder.AddAttribute(28, "type", "text");
            __builder.AddAttribute(29, "class", "form-control");
            __builder.AddAttribute(30, "id", "productDescription");
            __builder.AddAttribute(31, "placeholder", "Enter description");
            __builder.AddAttribute(32, "value", Microsoft.AspNetCore.Components.BindConverter.FormatValue(
#nullable restore
#line 18 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor"
                              product.Description

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(33, "onchange", Microsoft.AspNetCore.Components.EventCallback.Factory.CreateBinder(this, __value => product.Description = __value, product.Description));
            __builder.SetUpdatesAttributeName("value");
            __builder.CloseElement();
            __builder.AddMarkupContent(34, "\r\n            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(35, "\r\n            ");
            __builder.OpenElement(36, "div");
            __builder.AddAttribute(37, "class", "form-group");
            __builder.AddMarkupContent(38, "\r\n                ");
            __builder.AddMarkupContent(39, "<label for=\"productPrice\">Price</label>\r\n                ");
            __builder.OpenElement(40, "input");
            __builder.AddAttribute(41, "type", "number");
            __builder.AddAttribute(42, "step", "0.01");
            __builder.AddAttribute(43, "class", "form-control");
            __builder.AddAttribute(44, "id", "productPrice");
            __builder.AddAttribute(45, "value", Microsoft.AspNetCore.Components.BindConverter.FormatValue(
#nullable restore
#line 22 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor"
                              product.Price

#line default
#line hidden
#nullable disable
            , culture: global::System.Globalization.CultureInfo.InvariantCulture));
            __builder.AddAttribute(46, "onchange", Microsoft.AspNetCore.Components.EventCallback.Factory.CreateBinder(this, __value => product.Price = __value, product.Price, culture: global::System.Globalization.CultureInfo.InvariantCulture));
            __builder.SetUpdatesAttributeName("value");
            __builder.CloseElement();
            __builder.AddMarkupContent(47, "\r\n            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(48, "\r\n            ");
            __builder.OpenElement(49, "div");
            __builder.AddAttribute(50, "class", "form-group");
            __builder.AddMarkupContent(51, "\r\n                ");
            __builder.AddMarkupContent(52, "<label for=\"productUnit\">Unit</label>\r\n                ");
            __builder.OpenElement(53, "input");
            __builder.AddAttribute(54, "type", "text");
            __builder.AddAttribute(55, "class", "form-control");
            __builder.AddAttribute(56, "id", "productUnit");
            __builder.AddAttribute(57, "placeholder", "unit");
            __builder.AddAttribute(58, "value", Microsoft.AspNetCore.Components.BindConverter.FormatValue(
#nullable restore
#line 26 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor"
                              product.Unit

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(59, "onchange", Microsoft.AspNetCore.Components.EventCallback.Factory.CreateBinder(this, __value => product.Unit = __value, product.Unit));
            __builder.SetUpdatesAttributeName("value");
            __builder.CloseElement();
            __builder.AddMarkupContent(60, "\r\n            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(61, "\r\n            ");
            __builder.OpenElement(62, "button");
            __builder.AddAttribute(63, "type", "button");
            __builder.AddAttribute(64, "class", "btn btn-primary");
            __builder.AddAttribute(65, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 28 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor"
                                                                    Create

#line default
#line hidden
#nullable disable
            ));
            __builder.AddContent(66, "Create");
            __builder.CloseElement();
            __builder.AddMarkupContent(67, "\r\n        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(68, "\r\n    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(69, "\r\n");
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 34 "D:\demo\bread-shop\blazor\Breadshop\Client\Pages\CreateProduct.razor"
       

    private Product product = new Product();


    protected override async Task OnInitializedAsync()
    {
    }

    protected async Task Create()
    {
        await Http.PostJsonAsync("api/products/create", product);
        NavigationManager.NavigateTo("products");
    }

    void Cancel()
    {
        NavigationManager.NavigateTo("products");
    }


#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private NavigationManager NavigationManager { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private HttpClient Http { get; set; }
    }
}
#pragma warning restore 1591