import{Fa as t,Ga as n,Ha as c,N as r,R as p,Rb as u,S as l,Xa as e,ha as d,hc as s}from"./chunk-OQCQAMD7.js";var f=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=p({type:i,selectors:[["ng-component"]],decls:94,vars:0,consts:[[1,"card","mb-3"],[1,"app-code"],[1,"font-semibold"],[1,"text-primary","font-medium"],[1,"video-container"],["width","560","height","315","src",d`https://www.youtube.com/embed/yl2f8KKY204`,"frameborder","0","allowfullscreen",""],["href","https://www.youtube.com/watch?v=5VOuUdDXRsE",1,"font-medium","text-primary","hover:underline"]],template:function(a,x){a&1&&(t(0,"div",0)(1,"div")(2,"h2"),e(3,"Documentation"),n(),t(4,"h4"),e(5,"Getting Started"),n(),t(6,"p"),e(7,"Sakai is an application template for Angular and is distributed as a CLI project. Current versions is Angular v17 with PrimeNG v17. In case CLI is not installed already, use the command below to set it up."),n(),t(8,"pre",1)(9,"code"),e(10,"npm install -g @angular/cli"),n()(),t(11,"p"),e(12,'Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment.'),n(),t(13,"pre",1)(14,"code"),e(15,`cd sakai
npm install
ng serve`),n()(),t(16,"p"),e(17,"The application should run at "),t(18,"span",2),e(19,"http://localhost:4200/"),n(),e(20,", you may now start with the development of your application."),n(),t(21,"h5"),e(22,"Important CLI Commands"),n(),t(23,"p"),e(24,"Following commands are derived from CLI."),n(),t(25,"pre",1)(26,"code"),e(27,`Run 'ng serve' for a dev server. Navigate to \`http://localhost:4200/\`. The app will automatically reload if you change any of the source files.

Run 'ng generate component component-name' to generate a new component. You can also use \`ng generate directive/pipe/service/class/module\`.

Run 'ng build' to build the project. The build artifacts will be stored in the \`dist/\` directory. Use the \`-prod\` flag for a production build.

Run 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).

Run 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run 'ng help' for more options.`),n()(),t(28,"h4"),e(29,"Structure"),n(),t(30,"p"),e(31,"Sakai consists of 3 main parts; the application layout, layout assets and PrimeNG component theme assets. Layout is placed inside the "),t(32,"span",3),e(33,"src/app/layout"),n(),e(34," folder, and the assets are in the "),t(35,"span",3),e(36,"src/assets/layout"),n(),e(37," folder. "),n(),t(38,"h5"),e(39,"Default Configuration"),n(),t(40,"p"),e(41,"Initial layout configuration can be defined at the main app component by injecting the "),t(42,"span",3),e(43,"LayoutService"),n(),e(44,", this step is optional and only necessary when customizing the defaults. Note that "),t(45,"span",3),e(46,"theme"),n(),e(47," and "),t(48,"span",3),e(49,"scale"),n(),e(50," are not reactive since theme is configured outside of Angular at "),t(51,"strong",2),e(52,"index.html"),n(),e(53," by default and initial scale is defined with the "),t(54,"span",3),e(55,"$scale"),n(),e(56," at "),t(57,"strong",2),e(58,"layout.scss"),n(),e(59,". When default theme or scale is changed at their files initially, it is required to configure the layout service with the matching values to avoid sync issues. "),n(),t(60,"pre",1)(61,"code"),e(62,`import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService, AppConfig } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;       //enables core ripple functionality

        //optional configuration with the default configuration
        const config: AppConfig = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            theme: 'lara-light-indigo',         //default component theme for PrimeNG
            scale: 14                           //size of the body font size to scale the whole application
        };
        this.layoutService.config.set(config);
    }

}`),n()(),t(63,"h5"),e(64,"Menu"),n(),t(65,"p"),e(66,"Menu is a separate component defined in "),t(67,"span",3),e(68,"src/app/layout/app.menu.component.ts"),n(),e(69," file and based on PrimeNG MenuModel API. In order to define the menuitems, navigate to this file and define your own model as a nested structure."),n(),t(70,"pre",1)(71,"code"),e(72,`import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/']
                    }
                ]
            },
            //...
        ];
    }
}`),n()(),t(73,"h4"),e(74,"Integration with Existing Angular CLI Projects"),n(),t(75,"p"),e(76,"Sakai structure is designed in a modular way so that it can easily be integrated with your existing application. We've created a short tutorial with details."),n(),t(77,"div",4),c(78,"iframe",5),n(),t(79,"h4"),e(80,"Theme"),n(),t(81,"p"),e(82,"Sakai provides 34 PrimeNG themes out of the box. Setup of a theme is simple by including the css of theme to your bundle that are located inside "),t(83,"span",3),e(84,"assets/layout/styles/theme/"),n(),e(85," folder such as "),t(86,"span",3),e(87,"assets/layout/styles/theme/lara-light-indigo/theme.css"),n(),e(88,"."),n(),t(89,"p"),e(90,"Another alternative would be creating dynamic bundles, please see the "),t(91,"a",6),e(92,"video tutorial"),n(),e(93," for an example."),n()()())},styles:["@media screen and (max-width: 991px){.video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:0;padding-bottom:56.25%}.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}}"]});let o=i;return o})();var g=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=l({type:i}),i.\u0275inj=r({imports:[s.forChild([{path:"",component:f}]),s]});let o=i;return o})();var M=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=l({type:i}),i.\u0275inj=r({imports:[u,g]});let o=i;return o})();export{M as DocumentationModule};
