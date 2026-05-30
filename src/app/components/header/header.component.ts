import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  template: `
    <nav 
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12"
      [ngClass]="{
        'glass-card py-3 border-b border-slate-200/20 shadow-md': isScrolled(),
        'bg-transparent': !isScrolled()
      }"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo Section -->
        <a href="#inicio" class="flex items-center gap-3 group focus:outline-none">
          <img 
            src="/logo.svg" 
            alt="Logo PeyBer" 
            class="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span class="font-display font-bold text-2xl tracking-wide text-brand-navy group-hover:text-brand-emerald transition-colors">
            Pey<span class="text-brand-emerald">Ber</span>
          </span>
        </a>

        <!-- Desktop Menu Links -->
        <div class="hidden md:flex items-center gap-8">
          @for (link of menuLinks; track link.href) {
            <a 
              [href]="link.href" 
              class="font-medium text-slate-600 hover:text-brand-emerald hover:translate-y-[-1px] transition-all duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-emerald after:transition-all hover:after:w-full"
            >
              {{ link.label }}
            </a>
          }
        </div>

        <!-- Desktop Action Button -->
        <div class="hidden md:block">
          <a 
            href="#contacto" 
            class="bg-brand-emerald text-white px-6 py-2.5 rounded-full font-semibold shadow-premium hover:bg-brand-emerald-hover hover:shadow-emerald-glow hover:translate-y-[-2px] transition-all duration-200"
          >
            Contáctanos
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button 
          (click)="toggleMenu()"
          class="md:hidden text-brand-navy p-1.5 focus:outline-none focus:ring-2 focus:ring-brand-emerald/40 rounded-lg"
          aria-label="Abrir menú de navegación"
          [attr.aria-expanded]="isMenuOpen()"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            class="w-6 h-6"
          >
            @if (isMenuOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      @if (isMenuOpen()) {
        <div class="md:hidden absolute top-full left-0 w-full glass-card border-t border-slate-200/10 py-6 px-6 flex flex-col gap-4 shadow-xl animate-fade-in">
          @for (link of menuLinks; track link.href) {
            <a 
              [href]="link.href" 
              (click)="isMenuOpen.set(false)"
              class="font-medium text-slate-700 hover:text-brand-emerald py-2 border-b border-slate-100 transition-colors"
            >
              {{ link.label }}
            </a>
          }
          <a 
            href="#contacto" 
            (click)="isMenuOpen.set(false)"
            class="bg-brand-emerald text-white text-center py-3 rounded-full font-semibold mt-2 shadow-emerald-glow hover:bg-brand-emerald-hover transition-colors"
          >
            Contáctanos
          </a>
        </div>
      }
    </nav>
  `,
  styles: `
    :host {
      display: block;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  `
})
export class HeaderComponent {
  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);

  protected readonly menuLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#productos', label: 'Catálogo de Ropa' },
    { href: '#servicios', label: 'Servicios Textiles' },
    { href: '#contacto', label: 'Contacto' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
