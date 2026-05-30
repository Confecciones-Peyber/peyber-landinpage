import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  iconPath: string;
  benefits: string[];
}

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="servicios" class="py-24 bg-slate-50/50 diagonal-bg relative">
      <!-- Background Decorative Blur -->
      <div class="absolute bottom-10 left-10 w-80 h-80 bg-brand-emerald/3 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-20">
          <span class="text-brand-emerald font-semibold uppercase tracking-widest text-xs">Capacidad Industrial & Artesanal</span>
          <h2 class="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 mb-4">
            Servicios Especializados de Confección
          </h2>
          <div class="w-16 h-1 bg-brand-emerald mx-auto rounded-full"></div>
          <p class="text-slate-500 mt-4 font-light text-lg">
            Ofrecemos soluciones integrales desde la fabricación de prendas completas hasta acabados de alta calidad para empresas y marcas aliadas.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (service of services; track service.id) {
            <div class="glass-card p-8 rounded-3xl card-hover-effect flex flex-col justify-between border border-slate-200/40 relative">
              
              <!-- Icon Container -->
              <div>
                <div class="w-14 h-14 rounded-2xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mb-6">
                  <svg 
                    class="w-8 h-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    stroke-width="1.8"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="service.iconPath" />
                  </svg>
                </div>

                <!-- Service Name -->
                <h3 class="font-display font-bold text-xl text-brand-navy mb-3">
                  {{ service.name }}
                </h3>

                <!-- Service Description -->
                <p class="text-slate-500 text-sm font-light leading-relaxed mb-6">
                  {{ service.description }}
                </p>

                <!-- Benefits Bullet Points -->
                <ul class="space-y-2 mb-6">
                  @for (benefit of service.benefits; track benefit) {
                    <li class="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <span class="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
                      {{ benefit }}
                    </li>
                  }
                </ul>
              </div>

              <!-- Contact Button for Service -->
              <div class="pt-4 border-t border-slate-200/50">
                <a 
                  [href]="getServiceWhatsAppLink(service.name)"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1 text-xs font-bold text-brand-navy hover:text-brand-emerald transition-colors"
                >
                  Solicitar este servicio
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              </div>

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
  `
})
export class ServicesComponent {
  protected readonly services: ServiceItem[] = [
    {
      id: 'confeccion',
      name: 'Servicio de Confección',
      description: 'Corte, costura y ensamble completo de uniformes médicos, escolares, administrativos y corporativos. Alta capacidad operativa y control estricto de costura.',
      iconPath: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75A1.875 1.875 0 0120.25 6.375v1.875c0 1.035-.84 1.875-1.875 1.875H5.625A1.875 1.875 0 013.75 8.25V6.375c0-1.035.84-1.875 1.875-1.875z',
      benefits: ['Ajuste ergonómico', 'Hilos de alta resistencia', 'Producción al mayor']
    },
    {
      id: 'bordado',
      name: 'Servicio de Bordado',
      description: 'Personalización computarizada de logotipos, escudos institucionales y nombres sobre prendas. Alta definición y nitidez en hilos importados satinados.',
      iconPath: 'M9.53 16.122a3 3 0 00-2.222-2.221L3 12l4.308-1.901a3 3 0 002.222-2.221L12 3l1.901 4.308a3 3 0 002.221 2.222L20.5 12l-4.308 1.901a3 3 0 00-2.221 2.222L12 21l-1.901-4.308z',
      benefits: ['Hasta 12 colores por diseño', 'Resistente a lavadas', 'Acabado en relieve 3D']
    },
    {
      id: 'ojal-boton',
      name: 'Servicio de Ojal y Botón',
      description: 'Acabado con maquinaria ojaladora y botonera especializada. Ubicación milimétrica para camisas, chaquetas, delantales y batas médicas de forma masiva.',
      iconPath: 'M9 12.75a3 3 0 110-6 3 3 0 010 6zm0 0v6m3-3H6m1.5-12h13.5m-13.5 3.75h13.5M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
      benefits: ['Ojalado simétrico', 'Botones reforzados', 'Servicio rápido por volumen']
    },
    {
      id: 'estampado-serigrafia',
      name: 'Estampado y Serigrafía',
      description: 'Impresión textil sobre franelas, uniformes y gorros. Tintas duraderas resistentes al estiramiento y al desgaste químico de desinfección médica.',
      iconPath: 'M9.75 3.104v15.792c0 .85-.686 1.536-1.536 1.536H5.625a1.5 1.5 0 01-1.5-1.5V4.604a1.5 1.5 0 011.5-1.5h2.589c.85 0 1.536.687 1.536 1.536zm10.125 0v15.792c0 .85-.686 1.536-1.536 1.536h-2.589a1.5 1.5 0 01-1.5-1.5V4.604a1.5 1.5 0 011.5-1.5h2.589c.85 0 1.536.687 1.536 1.536z',
      benefits: ['Colores vivos', 'Sin agrietamiento', 'Ideal para logos complejos']
    }
  ];

  getServiceWhatsAppLink(serviceName: string): string {
    const message = `Hola PeyBer! Quisiera solicitar presupuesto y detalles sobre el "${serviceName}". ¿Cuáles son las cantidades mínimas y tiempos de entrega?`;
    return `https://wa.me/5804145082446?text=${encodeURIComponent(message)}`;
  }
}
