import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProductMock {
  code: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  colors: string[];
  sizes: string[];
}

@Component({
  selector: 'app-catalog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="productos" class="py-24 bg-white relative">
      <!-- Background Shapes -->
      <div class="absolute top-1/3 right-0 w-80 h-80 bg-brand-emerald/2 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-brand-emerald font-semibold uppercase tracking-widest text-xs">Exclusividad & Durabilidad</span>
          <h2 class="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 mb-4">
            Catálogo de Prendas Premium
          </h2>
          <div class="w-16 h-1 bg-brand-emerald mx-auto rounded-full"></div>
          <p class="text-slate-500 mt-4 font-light text-lg">
            Descubre nuestra línea diseñada bajo estándares internacionales, ofreciendo confort superior y resistencia al lavado constante.
          </p>
        </div>

        <!-- Filter & Search Panel -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          
          <!-- Category Tabs -->
          <div class="flex flex-wrap gap-2 w-full md:w-auto">
            @for (cat of categories; track cat.id) {
              <button 
                (click)="activeCategory.set(cat.id)"
                class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                [ngClass]="{
                  'bg-brand-navy text-white shadow-premium': activeCategory() === cat.id,
                  'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60': activeCategory() !== cat.id
                }"
              >
                {{ cat.label }}
              </button>
            }
          </div>

          <!-- Search Bar -->
          <div class="relative w-full md:w-80">
            <input 
              type="text" 
              [(ngModel)]="searchQuery"
              placeholder="Buscar uniforme, calzado..."
              class="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-emerald/30 focus:border-brand-emerald text-sm text-brand-navy transition-all"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="2" 
              stroke="currentColor" 
              class="w-4.5 h-4.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
            </svg>
          </div>
        </div>

        <!-- Products Rejilla Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (prod of filteredProducts(); track prod.code) {
            <div class="glass-card rounded-2xl overflow-hidden card-hover-effect flex flex-col h-full border border-slate-100">
              
              <!-- Image Section -->
              <div class="relative group aspect-square bg-slate-100 overflow-hidden">
                <img 
                  [src]="prod.image" 
                  [alt]="prod.name" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <!-- Category Badge -->
                <span class="absolute top-4 left-4 bg-brand-navy/90 text-white font-medium text-[11px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                  {{ prod.categoryLabel }}
                </span>

                <!-- Fabric Technology Badges (on hover overlay) -->
                <div class="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div class="flex flex-wrap gap-1.5 w-full">
                    @for (feature of prod.features; track feature) {
                      <span class="bg-brand-emerald text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                        ✓ {{ feature }}
                      </span>
                    }
                  </div>
                </div>
              </div>

              <!-- Details Section -->
              <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start gap-2 mb-2">
                  <span class="text-xs text-slate-400 uppercase tracking-widest font-mono">Cód: {{ prod.code }}</span>
                  <span class="text-lg font-bold text-brand-emerald font-display">$ {{ prod.price | number:'1.2-2' }}</span>
                </div>

                <h3 class="font-display font-bold text-xl text-brand-navy mb-2 hover:text-brand-emerald transition-colors">
                  {{ prod.name }}
                </h3>

                <p class="text-slate-500 font-light text-sm line-clamp-3 mb-4 leading-relaxed">
                  {{ prod.description }}
                </p>

                <!-- Color selector (visual mock) -->
                <div class="mb-4">
                  <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">Colores Disponibles</span>
                  <div class="flex gap-2">
                    @for (color of prod.colors; track color) {
                      <span 
                        class="w-5 h-5 rounded-full border border-slate-300 ring-2 ring-transparent hover:ring-brand-emerald/40 transition-all cursor-pointer"
                        [style.backgroundColor]="color"
                        [title]="color"
                      ></span>
                    }
                  </div>
                </div>

                <!-- Sizes Selector (visual mock) -->
                <div class="mb-6">
                  <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">Tallas</span>
                  <div class="flex flex-wrap gap-1.5">
                    @for (size of prod.sizes; track size) {
                      <span class="px-2 py-0.5 text-xs border border-slate-200 rounded bg-slate-50 text-slate-600 font-medium font-mono hover:border-brand-emerald hover:text-brand-emerald transition-colors cursor-pointer">
                        {{ size }}
                      </span>
                    }
                  </div>
                </div>

                <!-- Buy Action Button -->
                <div class="mt-auto">
                  <a 
                    [href]="getWhatsAppLink(prod)"
                    target="_blank"
                    rel="noopener"
                    class="w-full flex items-center justify-center gap-2 bg-brand-emerald hover:bg-brand-emerald-hover text-white text-center py-3 rounded-xl font-semibold shadow-premium hover:shadow-emerald-glow hover:translate-y-[-1px] transition-all duration-200"
                  >
                    <!-- WhatsApp SVG Icon -->
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.14.67 4.13 1.81 5.77L2 22l4.39-1.42a9.92 9.92 0 005.61 1.42c5.49 0 9.986-4.5 9.986-10S17.495 2 12.004 2zm0 1.8c4.52 0 8.18 3.66 8.18 8.2s-3.66 8.2-8.18 8.2c-1.85 0-3.55-.61-4.93-1.65l-.35-.26-2.58.84.85-2.5-.29-.38a8.15 8.15 0 01-1.39-4.71c0-4.53 3.66-8.2 8.18-8.2zm-1.85 3.32c-.22 0-.46.06-.68.17-.22.11-.47.3-.65.51-.43.51-.55 1.15-.55 1.76 0 .89.41 1.83.91 2.49 1.15 1.51 2.87 2.76 4.69 3.49.52.21 1.05.35 1.57.35.48 0 .9-.06 1.25-.23.47-.23.86-.64.97-1.16.12-.52-.08-1.03-.23-1.22-.15-.19-.44-.3-.91-.53-.47-.23-2.18-1.07-2.39-1.15-.21-.08-.47-.04-.67.22-.24.32-.67.89-.83 1.03-.16.14-.38.16-.68.04-.65-.26-1.45-.71-2.02-1.29-.57-.58-1.01-1.36-1.23-2.02-.12-.3-.02-.53.1-.68.11-.15.34-.47.51-.68.17-.21.23-.42.34-.63.11-.21.04-.47-.04-.68-.08-.21-.76-1.83-.93-2.22-.17-.38-.43-.33-.68-.33z"/>
                    </svg>
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          } @empty {
            <div class="col-span-full text-center py-12 text-slate-400">
              <p class="text-lg">No encontramos productos en esta categoría.</p>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }
  `
})
export class CatalogComponent {
  protected readonly searchQuery = signal('');
  protected readonly activeCategory = signal('all');

  protected readonly categories = [
    { id: 'all', label: 'Todos' },
    { id: 'ropa-medica', label: 'Ropa Médica' },
    { id: 'calzado', label: 'Calzado Clínico' }
  ];

  protected readonly productsList: ProductMock[] = [
    {
      code: 'SCR-TOP-01',
      name: 'Top Médico Scrubs Premium',
      category: 'ropa-medica',
      categoryLabel: 'Ropa Médica',
      price: 20.00,
      image: '/scrub_top.png',
      description: 'Camisa médica con cuello en V elegante para dama. Diseñada con costuras reforzadas, ajuste ergonómico y tela de microfibra altamente fresca. Ideal para turnos largos.',
      features: ['Antifluidos', '4-Way Stretch', 'Frescura Activa', 'Resistente a Cloro'],
      colors: ['#1e293b', '#10b981', '#1e3a8a', '#475569'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      code: 'SCR-PNT-01',
      name: 'Pantalón Cargo Clínico Ergonómico',
      category: 'ropa-medica',
      categoryLabel: 'Ropa Médica',
      price: 20.00,
      image: '/scrub_pants.png',
      description: 'Pantalón tipo mono médico con múltiples bolsillos funcionales y cargo. Cintura con cordón ajustable y elástico suave que no maltrata la piel durante el movimiento.',
      features: ['Múltiples Bolsillos', 'Flexibilidad Total', 'Costura Reforzada', 'Sin Planchado'],
      colors: ['#1e293b', '#1e3a8a', '#475569'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      code: 'SHOE-MED-01',
      name: 'Calzado Profesional Confort Blanco',
      category: 'calzado',
      categoryLabel: 'Calzado',
      price: 15.00,
      image: '/medical_shoes.png',
      description: 'Zapatos blancos clínicos ultralivianos y anatómicos. Diseñados para reducir el cansancio en las articulaciones y equipados con una suela de goma con tracción antideslizante certificada.',
      features: ['Suela Antideslizante', 'Ultra Liviano', 'Amortiguación Gel', 'Lavable'],
      colors: ['#ffffff', '#000000'],
      sizes: ['36', '37', '38', '39', '40', '41', '42']
    }
  ];

  // Filtering Logic using computed signals
  protected readonly filteredProducts = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const cat = this.activeCategory();
    
    return this.productsList.filter(prod => {
      const matchesCategory = (cat === 'all' || prod.category === cat);
      const matchesSearch = !query || 
        prod.name.toLowerCase().includes(query) || 
        prod.code.toLowerCase().includes(query) ||
        prod.description.toLowerCase().includes(query);
        
      return matchesCategory && matchesSearch;
    });
  });

  getWhatsAppLink(product: ProductMock): string {
    const message = `Hola PeyBer! Estoy interesado en cotizar el producto "${product.name}" (Código: ${product.code}, Precio: $${product.price}). ¿Podrías darme detalles sobre la disponibilidad de colores y tallas?`;
    return `https://wa.me/5804145082446?text=${encodeURIComponent(message)}`;
  }
}
