import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from '../demo/components/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        public authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.updateMenuItems();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']); // Redireciona para a tela de login
    }

    updateMenuItems() {
        if (this.authService.isLoggedIn()) {
            this.items = [
                {
                    label: 'Minha conta',
                    icon: 'pi pi-user',
                    command: () => {
                        this.router.navigate(['/minha-conta']);
                    }
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        this.authService.logout();
                    }
                }
            ];
        } else {
            this.items = [
                {
                    label: 'Login',
                    icon: 'pi pi-sign-in',
                    command: () => {
                        this.router.navigate(['/auth/login']);
                    }
                }
            ];
        }
    }

    toggleMenu() {
        this.layoutService.onMenuToggle();
    }

    showProfileMenu() {
        this.layoutService.showProfileSidebar();
    }
}
