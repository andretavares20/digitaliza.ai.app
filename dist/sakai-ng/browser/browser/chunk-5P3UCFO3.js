import{b as J}from"./chunk-UZLPIQVA.js";import"./chunk-LM27STZU.js";import{a as $,b as H}from"./chunk-CNPNJMPW.js";import{a as U,b as G}from"./chunk-NFXGLZOZ.js";import{a as L,b as W}from"./chunk-B5EANUUN.js";import{a as N,b as F}from"./chunk-3MEDRUIT.js";import"./chunk-IVI3XLNH.js";import"./chunk-KQVLJ4TH.js";import"./chunk-4DSTCYQZ.js";import{i as A}from"./chunk-LKAC5SOC.js";import"./chunk-XSSXK7EZ.js";import{c as j,d as V,i as T,k as q}from"./chunk-OS55RPVL.js";import"./chunk-ZANQR5YZ.js";import{Ca as e,Da as t,Ea as n,Eb as D,Gb as B,Ja as v,Jb as R,K as u,Ka as h,La as O,Ma as _,O as x,Ob as I,P as b,Ua as i,Va as w,cb as y,ec as E,g as M,ha as a,ta as f,ua as g,va as o,za as P}from"./chunk-NR2BOPV4.js";var X=["*"],z=l=>({"block-action-active":l});function Z(l,r){l&1&&(e(0,"span",13),i(1,"Free"),t())}function ee(l,r){l&1&&(e(0,"span",14),i(1,"New"),t())}function te(l,r){if(l&1&&(e(0,"div",15),_(1),t()),l&2){let p=h();P(p.containerClass),o("ngStyle",p.previewStyle)}}function ie(l,r){if(l&1&&(e(0,"div")(1,"pre",16)(2,"code"),i(3),t()()()),l&2){let p=h();a(3),w(p.code)}}var S=function(l){return l[l.PREVIEW=0]="PREVIEW",l[l.CODE=1]="CODE",l}(S||{}),Y=(()=>{let r=class r{constructor(){this.free=!0,this.new=!1,this.BlockView=S,this.blockView=S.PREVIEW}activateView(c,d){this.blockView=d,c.preventDefault()}copyCode(c){return M(this,null,function*(){yield navigator.clipboard.writeText(this.code),c.preventDefault()})}};r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=x({type:r,selectors:[["block-viewer"]],inputs:{header:"header",code:"code",containerClass:"containerClass",previewStyle:"previewStyle",free:"free",new:"new"},ngContentSelectors:X,decls:19,vars:13,consts:[[1,"block-section"],[1,"block-header"],[1,"block-title"],["class","badge-free",4,"ngIf"],["class","badge-new",4,"ngIf"],[1,"block-actions"],["tabindex","0",3,"click","ngClass"],[3,"click","ngClass"],["pTooltip","Copied to clipboard","tooltipEvent","focus","tooltipPosition","bottom",1,"block-action-copy",3,"click"],[1,"pi","pi-copy","m-0"],[1,"block-content"],[3,"class","ngStyle",4,"ngIf"],[4,"ngIf"],[1,"badge-free"],[1,"badge-new"],[3,"ngStyle"],[1,"app-code"]],template:function(d,s){d&1&&(O(),e(0,"div",0)(1,"div",1)(2,"span",2)(3,"span"),i(4),t(),f(5,Z,2,0,"span",3)(6,ee,2,0,"span",4),t(),e(7,"div",5)(8,"a",6),v("click",function(m){return s.activateView(m,s.BlockView.PREVIEW)}),e(9,"span"),i(10,"Preview"),t()(),e(11,"a",7),v("click",function(m){return s.activateView(m,s.BlockView.CODE)}),e(12,"span"),i(13,"Code"),t()(),e(14,"a",8),v("click",function(m){return s.copyCode(m)}),n(15,"i",9),t()()(),e(16,"div",10),f(17,te,2,3,"div",11)(18,ie,4,1,"div",12),t()()),d&2&&(a(4),w(s.header),a(),o("ngIf",s.free),a(),o("ngIf",s.new),a(2),o("ngClass",y(9,z,s.blockView===s.BlockView.PREVIEW)),a(3),o("ngClass",y(11,z,s.blockView===s.BlockView.CODE)),g("tabindex","0"),a(3),g("tabindex","0"),a(3),o("ngIf",s.blockView===s.BlockView.PREVIEW),a(),o("ngIf",s.blockView===s.BlockView.CODE))},dependencies:[D,B,R,N],styles:[".block-section[_ngcontent-%COMP%]{margin-bottom:4rem}.block-header[_ngcontent-%COMP%]{padding:1rem 2rem;background-color:var(--surface-section);border-top-left-radius:4px;border-top-right-radius:4px;border:1px solid var(--surface-border);display:flex;align-items:center;justify-content:space-between}.block-header[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{font-weight:700;display:inline-flex;align-items:center}.block-header[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]   .badge-free[_ngcontent-%COMP%]{border-radius:4px;padding:.25rem .5rem;background-color:var(--orange-500);color:#fff;margin-left:1rem;font-weight:700;font-size:.875rem}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;-webkit-user-select:none;user-select:none;margin-left:1rem}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:.75rem;padding:.5rem 1rem;border-radius:4px;border:1px solid transparent;transition:background-color .2s;cursor:pointer}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{margin-right:0}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.block-action-disabled):hover{background-color:var(--surface-hover)}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]   a.block-action-active[_ngcontent-%COMP%]{border-color:var(--primary-color);color:var(--primary-color)}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]   a.block-action-copy[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--primary-color);font-size:1.25rem}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]   a.block-action-disabled[_ngcontent-%COMP%]{opacity:.6;cursor:auto!important}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.5rem}.block-content[_ngcontent-%COMP%]{padding:0;border:1px solid var(--surface-border);border-top:0 none}.block-content[_ngcontent-%COMP%]   pre.app-code[_ngcontent-%COMP%]{background-color:var(--surface-card)!important;padding-bottom:1rem!important;margin-bottom:0!important}.block-content[_ngcontent-%COMP%]   pre.app-code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{padding:1rem 2.5rem}@media screen and (max-width: 575px){.block-header[_ngcontent-%COMP%]{flex-direction:column;align-items:start}.block-header[_ngcontent-%COMP%]   .block-actions[_ngcontent-%COMP%]{margin-top:1rem;margin-left:0}}"]});let l=r;return l})();var K=(()=>{let r=class r{constructor(){this.block1=`
<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <button pButton pRipple label="Learn More" type="button" class="mr-3 p-button-raised"></button>
            <button pButton pRipple label="Live Demo" type="button" class="p-button-outlined"></button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="assets/demo/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`,this.block2=`
<div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-2xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
    </div>
    <div class="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Built for Developers</div>
            <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">End-to-End Encryption</div>
            <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Easy to Use</div>
            <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
            <span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Open Source</div>
            <span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
            <span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>`,this.block3=`
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div class="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

    <div class="grid">
        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Basic</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$9</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full mt-auto"></button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Premium</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$29</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full"></button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Enterprise</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$49</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Imperdiet proin</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Nisi scelerisque</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                    <button pButton pRipple label="Buy Now" class="p-3 w-full p-button-outlined"></button>
                </div>
            </div>
        </div>
    </div>
</div>`,this.block4=`
<div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
        <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
        <div class="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
        <div class="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <button pButton pRipple label="Join Now" icon="pi pi-discord" class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"></button>
    </div>
</div>`,this.block5=`
<div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">\u{1F525} Hot Deals!</div>
    <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
    </a>
    <a pRipple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style="width:2rem; height: 2rem">
        <i class="pi pi-times"></i>
    </a>
</div>`,this.block6=`
<div class="surface-section px-4 py-5 md:px-6 lg:px-8">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a class="text-500 no-underline line-height-3 cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span class="text-900 line-height-3">Analytics</span>
        </li>
    </ul>
    <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        <div>
            <div class="font-medium text-3xl text-900">Customers</div>
            <div class="flex align-items-center text-700 flex-wrap">
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-users mr-2"></i>
                    <span>332 Active Users</span>
                </div>
                <div class="mr-5 flex align-items-center mt-3">
                    <i class="pi pi-globe mr-2"></i>
                    <span>9402 Sessions</span>
                </div>
                <div class="flex align-items-center mt-3">
                    <i class="pi pi-clock mr-2"></i>
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div class="mt-3 lg:mt-0">
            <button pButton pRipple label="Add" class="p-button-outlined mr-2" icon="pi pi-user-plus"></button>
            <button pButton pRipple label="Save" icon="pi pi-check"></button>
        </div>
    </div>
</div>`,this.block7=`
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Orders</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Revenue</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Customers</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-500">newly registered</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Comments</span>
                        <div class="text-900 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div>
    </div>
</div>`,this.block8=`
<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="assets/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <input id="email1" type="text" pInputText class="w-full mb-3">

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <input id="password1" type="password" pInputText class="w-full mb-3">

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <p-checkbox id="rememberme1" [binary]="true" styleClass="mr-2"></p-checkbox>
                <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <button pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
    </div>
</div>`,this.block9=`
<div class="surface-section">
    <div class="font-medium text-3xl text-900 mb-3">Movie Information</div>
    <div class="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Title</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Genre</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                <p-chip label="Crime" class="mr-2"></p-chip>
                <p-chip label="Drama" class="mr-2"></p-chip>
                <p-chip label="Thriller"></p-chip>
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Director</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Actors</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Plot</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                when they unknowingly leave a clue at their latest heist.</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <button pButton pRipple label="Edit" icon="pi pi-pencil" class="p-button-text"></button>
            </div>
        </li>
    </ul>
</div>`,this.block10=`
<div class="surface-card p-4 shadow-2 border-round">
    <div class="text-3xl font-medium text-900 mb-3">Card Title</div>
    <div class="font-medium text-500 mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
</div>`}};r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=x({type:r,selectors:[["ng-component"]],decls:366,vars:11,consts:[["header","Hero",3,"code"],[1,"grid","grid-nogutter","surface-section","text-800"],[1,"col-12","md:col-6","p-6","text-center","md:text-left","flex","align-items-center"],[1,"block","text-6xl","font-bold","mb-1"],[1,"text-6xl","text-primary","font-bold","mb-3"],[1,"mt-0","mb-4","text-700","line-height-3"],["pButton","","pRipple","","label","Learn More","type","button",1,"mr-3","p-button-raised"],["pButton","","pRipple","","label","Live Demo","type","button",1,"p-button-outlined"],[1,"col-12","md:col-6","overflow-hidden"],["src","assets/demo/images/blocks/hero/hero-1.png","alt","Image",1,"md:ml-auto","block","md:h-full",2,"clip-path","polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"],["header","Feature",3,"code"],[1,"surface-section","px-4","py-8","md:px-6","lg:px-8","text-center"],[1,"mb-3","font-bold","text-2xl"],[1,"text-900"],[1,"text-blue-600"],[1,"text-700","text-sm","mb-6"],[1,"grid"],[1,"col-12","md:col-4","mb-4","px-5"],[1,"p-3","shadow-2","mb-3","inline-block","surface-card",2,"border-radius","10px"],[1,"pi","pi-desktop","text-4xl","text-blue-500"],[1,"text-900","mb-3","font-medium"],[1,"text-700","text-sm","line-height-3"],[1,"pi","pi-lock","text-4xl","text-blue-500"],[1,"pi","pi-check-circle","text-4xl","text-blue-500"],[1,"pi","pi-globe","text-4xl","text-blue-500"],[1,"pi","pi-github","text-4xl","text-blue-500"],[1,"col-12","md:col-4","md:mb-4","mb-0","px-3"],[1,"pi","pi-shield","text-4xl","text-blue-500"],["header","Pricing",3,"code"],[1,"surface-ground","px-4","py-8","md:px-6","lg:px-8"],[1,"text-900","font-bold","text-6xl","mb-4","text-center"],[1,"text-700","text-xl","mb-6","text-center","line-height-3"],[1,"col-12","lg:col-4"],[1,"p-3","h-full"],[1,"shadow-2","p-3","h-full","flex","flex-column","surface-card",2,"border-radius","6px"],[1,"text-900","font-medium","text-xl","mb-2"],[1,"text-600"],[1,"my-3","mx-0","border-top-1","border-none","surface-border"],[1,"flex","align-items-center"],[1,"font-bold","text-2xl","text-900"],[1,"ml-2","font-medium","text-600"],[1,"list-none","p-0","m-0","flex-grow-1"],[1,"flex","align-items-center","mb-3"],[1,"pi","pi-check-circle","text-green-500","mr-2"],[1,"mb-3","mx-0","border-top-1","border-none","surface-border","mt-auto"],["pButton","","pRipple","","label","Buy Now",1,"p-3","w-full","mt-auto"],[1,"mb-3","mx-0","border-top-1","border-none","surface-border"],["pButton","","pRipple","","label","Buy Now",1,"p-3","w-full"],[1,"shadow-2","p-3","flex","flex-column","surface-card",2,"border-radius","6px"],["pButton","","pRipple","","label","Buy Now",1,"p-3","w-full","p-button-outlined"],["header","Call to Action",3,"code"],[1,"surface-section","px-4","py-8","md:px-6","lg:px-8"],[1,"text-700","text-center"],[1,"text-blue-600","font-bold","mb-3"],[1,"pi","pi-discord"],[1,"text-900","font-bold","text-5xl","mb-3"],[1,"text-700","text-2xl","mb-5"],["pButton","","pRipple","","label","Join Now","icon","pi pi-discord",1,"font-bold","px-5","py-3","p-button-raised","p-button-rounded","white-space-nowrap"],["header","Banner","containerClass","surface-section py-8",3,"code"],[1,"bg-bluegray-900","text-gray-100","p-3","flex","justify-content-between","lg:justify-content-center","align-items-center","flex-wrap"],[1,"font-bold","mr-8"],[1,"align-items-center","hidden","lg:flex"],[1,"line-height-3"],[1,"flex","align-items-center","ml-2","mr-8"],["href","#",1,"text-white"],[1,"underline","font-bold"],["pRipple","",1,"flex","align-items-center","no-underline","justify-content-center","border-circle","text-gray-50","hover:bg-bluegray-700","cursor-pointer","transition-colors","transition-duration-150",2,"width","2rem","height","2rem"],[1,"pi","pi-times"],["header","Page Heading",3,"code"],[1,"surface-section","px-4","py-5","md:px-6","lg:px-8"],[1,"list-none","p-0","m-0","flex","align-items-center","font-medium","mb-3"],[1,"text-500","no-underline","line-height-3","cursor-pointer"],[1,"px-2"],[1,"pi","pi-angle-right","text-500","line-height-3"],[1,"text-900","line-height-3"],[1,"flex","align-items-start","flex-column","lg:justify-content-between","lg:flex-row"],[1,"font-medium","text-3xl","text-900"],[1,"flex","align-items-center","text-700","flex-wrap"],[1,"mr-5","flex","align-items-center","mt-3"],[1,"pi","pi-users","mr-2"],[1,"pi","pi-globe","mr-2"],[1,"flex","align-items-center","mt-3"],[1,"pi","pi-clock","mr-2"],[1,"mt-3","lg:mt-0"],["pButton","","pRipple","","label","Add","icon","pi pi-user-plus",1,"p-button-outlined","mr-2"],["pButton","","pRipple","","label","Save","icon","pi pi-check"],["header","Stats",3,"code"],[1,"surface-ground","px-4","py-5","md:px-6","lg:px-8"],[1,"col-12","md:col-6","lg:col-3"],[1,"surface-card","shadow-2","p-3","border-round"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-shopping-cart","text-blue-500","text-xl"],[1,"text-green-500","font-medium"],[1,"text-500"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-map-marker","text-orange-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-inbox","text-cyan-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-comment","text-purple-500","text-xl"],["header","Sign-In","containerClass","surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center",3,"code"],[1,"surface-card","p-4","shadow-2","border-round","w-full","lg:w-6"],[1,"text-center","mb-5"],["src","assets/demo/images/blocks/logos/hyper.svg","alt","Image","height","50",1,"mb-3"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium","line-height-3"],[1,"font-medium","no-underline","ml-2","text-blue-500","cursor-pointer"],["for","email1",1,"block","text-900","font-medium","mb-2"],["id","email1","type","text","pInputText","",1,"w-full","mb-3"],["for","password1",1,"block","text-900","font-medium","mb-2"],["id","password1","type","password","pInputText","",1,"w-full","mb-3"],[1,"flex","align-items-center","justify-content-between","mb-6"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],[1,"font-medium","no-underline","ml-2","text-blue-500","text-right","cursor-pointer"],["pButton","","pRipple","","label","Sign In","icon","pi pi-user",1,"w-full"],["header","Description List","containerClass","surface-section px-4 py-8 md:px-6 lg:px-8",3,"code"],[1,"surface-section"],[1,"font-medium","text-3xl","text-900","mb-3"],[1,"text-500","mb-5"],[1,"list-none","p-0","m-0"],[1,"flex","align-items-center","py-3","px-2","border-top-1","surface-border","flex-wrap"],[1,"text-500","w-6","md:w-2","font-medium"],[1,"text-900","w-full","md:w-8","md:flex-order-0","flex-order-1"],[1,"w-6","md:w-2","flex","justify-content-end"],["pButton","","pRipple","","label","Edit","icon","pi pi-pencil",1,"p-button-text"],["label","Crime",1,"mr-2"],["label","Drama",1,"mr-2"],["label","Thriller"],[1,"flex","align-items-center","py-3","px-2","border-top-1","border-bottom-1","surface-border","flex-wrap"],[1,"text-900","w-full","md:w-8","md:flex-order-0","flex-order-1","line-height-3"],["header","Card","containerClass","px-4 py-8 md:px-6 lg:px-8",3,"code"],[1,"surface-card","p-4","shadow-2","border-round"],[1,"text-3xl","font-medium","text-900","mb-3"],[1,"font-medium","text-500","mb-3"],[1,"border-2","border-dashed","surface-border",2,"height","150px"]],template:function(d,s){d&1&&(e(0,"block-viewer",0)(1,"div",1)(2,"div",2)(3,"section")(4,"span",3),i(5,"Create the screens your"),t(),e(6,"div",4),i(7,"visitors deserve to see"),t(),e(8,"p",5),i(9,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t(),n(10,"button",6)(11,"button",7),t()(),e(12,"div",8),n(13,"img",9),t()()(),e(14,"block-viewer",10)(15,"div",11)(16,"div",12)(17,"span",13),i(18,"One Product, "),t(),e(19,"span",14),i(20,"Many Solutions"),t()(),e(21,"div",15),i(22,"Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna."),t(),e(23,"div",16)(24,"div",17)(25,"span",18),n(26,"i",19),t(),e(27,"div",20),i(28,"Built for Developers"),t(),e(29,"span",21),i(30,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),t()(),e(31,"div",17)(32,"span",18),n(33,"i",22),t(),e(34,"div",20),i(35,"End-to-End Encryption"),t(),e(36,"span",21),i(37,"Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis."),t()(),e(38,"div",17)(39,"span",18),n(40,"i",23),t(),e(41,"div",20),i(42,"Easy to Use"),t(),e(43,"span",21),i(44,"Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper."),t()(),e(45,"div",17)(46,"span",18),n(47,"i",24),t(),e(48,"div",20),i(49,"Fast & Global Support"),t(),e(50,"span",21),i(51,"Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus."),t()(),e(52,"div",17)(53,"span",18),n(54,"i",25),t(),e(55,"div",20),i(56,"Open Source"),t(),e(57,"span",21),i(58,"Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. "),t()(),e(59,"div",26)(60,"span",18),n(61,"i",27),t(),e(62,"div",20),i(63,"Trusted Securitty"),t(),e(64,"span",21),i(65,"Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend."),t()()()()(),e(66,"block-viewer",28)(67,"div",29)(68,"div",30),i(69,"Pricing Plans"),t(),e(70,"div",31),i(71,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos."),t(),e(72,"div",16)(73,"div",32)(74,"div",33)(75,"div",34)(76,"div",35),i(77,"Basic"),t(),e(78,"div",36),i(79,"Plan description"),t(),n(80,"hr",37),e(81,"div",38)(82,"span",39),i(83,"$9"),t(),e(84,"span",40),i(85,"per month"),t()(),n(86,"hr",37),e(87,"ul",41)(88,"li",42),n(89,"i",43),e(90,"span"),i(91,"Arcu vitae elementum"),t()(),e(92,"li",42),n(93,"i",43),e(94,"span"),i(95,"Dui faucibus in ornare"),t()(),e(96,"li",42),n(97,"i",43),e(98,"span"),i(99,"Morbi tincidunt augue"),t()()(),n(100,"hr",44)(101,"button",45),t()()(),e(102,"div",32)(103,"div",33)(104,"div",34)(105,"div",35),i(106,"Premium"),t(),e(107,"div",36),i(108,"Plan description"),t(),n(109,"hr",37),e(110,"div",38)(111,"span",39),i(112,"$29"),t(),e(113,"span",40),i(114,"per month"),t()(),n(115,"hr",37),e(116,"ul",41)(117,"li",42),n(118,"i",43),e(119,"span"),i(120,"Arcu vitae elementum"),t()(),e(121,"li",42),n(122,"i",43),e(123,"span"),i(124,"Dui faucibus in ornare"),t()(),e(125,"li",42),n(126,"i",43),e(127,"span"),i(128,"Morbi tincidunt augue"),t()(),e(129,"li",42),n(130,"i",43),e(131,"span"),i(132,"Duis ultricies lacus sed"),t()()(),n(133,"hr",46)(134,"button",47),t()()(),e(135,"div",32)(136,"div",33)(137,"div",48)(138,"div",35),i(139,"Enterprise"),t(),e(140,"div",36),i(141,"Plan description"),t(),n(142,"hr",37),e(143,"div",38)(144,"span",39),i(145,"$49"),t(),e(146,"span",40),i(147,"per month"),t()(),n(148,"hr",37),e(149,"ul",41)(150,"li",42),n(151,"i",43),e(152,"span"),i(153,"Arcu vitae elementum"),t()(),e(154,"li",42),n(155,"i",43),e(156,"span"),i(157,"Dui faucibus in ornare"),t()(),e(158,"li",42),n(159,"i",43),e(160,"span"),i(161,"Morbi tincidunt augue"),t()(),e(162,"li",42),n(163,"i",43),e(164,"span"),i(165,"Duis ultricies lacus sed"),t()(),e(166,"li",42),n(167,"i",43),e(168,"span"),i(169,"Imperdiet proin"),t()(),e(170,"li",42),n(171,"i",43),e(172,"span"),i(173,"Nisi scelerisque"),t()()(),n(174,"hr",46)(175,"button",49),t()()()()()(),e(176,"block-viewer",50)(177,"div",51)(178,"div",52)(179,"div",53),n(180,"i",54),i(181,"\xA0POWERED BY DISCORD"),t(),e(182,"div",55),i(183,"Join Our Design Community"),t(),e(184,"div",56),i(185,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos."),t(),n(186,"button",57),t()()(),e(187,"block-viewer",58)(188,"div",59)(189,"div",60),i(190,"\u{1F525} Hot Deals!"),t(),e(191,"div",61)(192,"span",62),i(193,"Libero voluptatum atque exercitationem praesentium provident odit."),t()(),e(194,"a",63)(195,"a",64)(196,"span",65),i(197,"Learn More"),t()()(),e(198,"a",66),n(199,"i",67),t()()(),e(200,"block-viewer",68)(201,"div",69)(202,"ul",70)(203,"li")(204,"a",71),i(205,"Application"),t()(),e(206,"li",72),n(207,"i",73),t(),e(208,"li")(209,"span",74),i(210,"Analytics"),t()()(),e(211,"div",75)(212,"div")(213,"div",76),i(214,"Customers"),t(),e(215,"div",77)(216,"div",78),n(217,"i",79),e(218,"span"),i(219,"332 Active Users"),t()(),e(220,"div",78),n(221,"i",80),e(222,"span"),i(223,"9402 Sessions"),t()(),e(224,"div",81),n(225,"i",82),e(226,"span"),i(227,"2.32m Avg. Duration"),t()()()(),e(228,"div",83),n(229,"button",84)(230,"button",85),t()()()(),e(231,"block-viewer",86)(232,"div",87)(233,"div",16)(234,"div",88)(235,"div",89)(236,"div",90)(237,"div")(238,"span",91),i(239,"Orders"),t(),e(240,"div",92),i(241,"152"),t()(),e(242,"div",93),n(243,"i",94),t()(),e(244,"span",95),i(245,"24 new "),t(),e(246,"span",96),i(247,"since last visit"),t()()(),e(248,"div",88)(249,"div",89)(250,"div",90)(251,"div")(252,"span",91),i(253,"Revenue"),t(),e(254,"div",92),i(255,"$2.100"),t()(),e(256,"div",97),n(257,"i",98),t()(),e(258,"span",95),i(259,"%52+ "),t(),e(260,"span",96),i(261,"since last week"),t()()(),e(262,"div",88)(263,"div",89)(264,"div",90)(265,"div")(266,"span",91),i(267,"Customers"),t(),e(268,"div",92),i(269,"28441"),t()(),e(270,"div",99),n(271,"i",100),t()(),e(272,"span",95),i(273,"520 "),t(),e(274,"span",96),i(275,"newly registered"),t()()(),e(276,"div",88)(277,"div",89)(278,"div",90)(279,"div")(280,"span",91),i(281,"Comments"),t(),e(282,"div",92),i(283,"152 Unread"),t()(),e(284,"div",101),n(285,"i",102),t()(),e(286,"span",95),i(287,"85 "),t(),e(288,"span",96),i(289,"responded"),t()()()()()(),e(290,"block-viewer",103)(291,"div",104)(292,"div",105),n(293,"img",106),e(294,"div",107),i(295,"Welcome Back"),t(),e(296,"span",108),i(297,"Don't have an account?"),t(),e(298,"a",109),i(299,"Create today!"),t()(),e(300,"div")(301,"label",110),i(302,"Email"),t(),n(303,"input",111),e(304,"label",112),i(305,"Password"),t(),n(306,"input",113),e(307,"div",114)(308,"div",38),n(309,"p-checkbox",115),e(310,"label",116),i(311,"Remember me"),t()(),e(312,"a",117),i(313,"Forgot password?"),t()(),n(314,"button",118),t()()(),e(315,"block-viewer",119)(316,"div",120)(317,"div",121),i(318,"Movie Information"),t(),e(319,"div",122),i(320,"Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum."),t(),e(321,"ul",123)(322,"li",124)(323,"div",125),i(324,"Title"),t(),e(325,"div",126),i(326,"Heat"),t(),e(327,"div",127),n(328,"button",128),t()(),e(329,"li",124)(330,"div",125),i(331,"Genre"),t(),e(332,"div",126),n(333,"p-chip",129)(334,"p-chip",130)(335,"p-chip",131),t(),e(336,"div",127),n(337,"button",128),t()(),e(338,"li",124)(339,"div",125),i(340,"Director"),t(),e(341,"div",126),i(342,"Michael Mann"),t(),e(343,"div",127),n(344,"button",128),t()(),e(345,"li",124)(346,"div",125),i(347,"Actors"),t(),e(348,"div",126),i(349,"Robert De Niro, Al Pacino"),t(),e(350,"div",127),n(351,"button",128),t()(),e(352,"li",132)(353,"div",125),i(354,"Plot"),t(),e(355,"div",133),i(356," A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist."),t(),e(357,"div",127),n(358,"button",128),t()()()()(),e(359,"block-viewer",134)(360,"div",135)(361,"div",136),i(362,"Card Title"),t(),e(363,"div",137),i(364,"Vivamus id nisl interdum, blandit augue sit amet, eleifend mi."),t(),n(365,"div",138),t()()),d&2&&(o("code",s.block1),a(14),o("code",s.block2),a(52),o("code",s.block3),a(110),o("code",s.block4),a(11),o("code",s.block5),a(13),o("code",s.block6),a(31),o("code",s.block7),a(59),o("code",s.block8),a(19),o("binary",!0),a(6),o("code",s.block9),a(44),o("code",s.block10))},dependencies:[T,j,U,$,L,Y],encapsulation:2});let l=r;return l})();var Q=(()=>{let r=class r{};r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=b({type:r}),r.\u0275inj=u({imports:[E.forChild([{path:"",component:K}]),E]});let l=r;return l})();var De=(()=>{let r=class r{};r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=b({type:r}),r.\u0275inj=u({imports:[I,q,V,G,H,A,W,J,F,Q]});let l=r;return l})();export{De as PrimeBlocksModule};
