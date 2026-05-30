import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section 
      id="inicio" 
      class="relative min-h-screen pt-28 pb-16 flex items-center bg-slate-50/50 diagonal-bg"
    >
      <!-- Background Decorative Lights -->
      <div class="absolute top-1/4 left-10 w-72 h-72 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <!-- Left Side: Copywriting -->
        <div class="lg:col-span-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-emerald/10 text-brand-emerald font-semibold text-sm mb-6 animate-slide-up">
            <span class="w-2 h-2 rounded-full bg-brand-emerald animate-ping"></span>
            Confección Premium & Tecnología Textil
          </div>

          <h1 class="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-brand-navy leading-none mb-6 animate-slide-up">
            Viste la Excelencia en tu <span class="text-brand-emerald">Jornada Médica</span>
          </h1>

          <p class="text-slate-600 text-lg md:text-xl font-light mb-8 max-w-xl leading-relaxed animate-slide-up">
            En <strong>PeyBer</strong> creamos uniformes médicos y profesionales que fusionan ergonomía avanzada, protección textil de primer nivel y un estilo elegante que inspira confianza.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
            <a 
              href="#productos" 
              class="bg-brand-navy text-white text-center px-8 py-3.5 rounded-full font-semibold shadow-premium hover:bg-brand-navy-light hover:translate-y-[-2px] transition-all duration-200"
            >
              Explorar Catálogo
            </a>
            <a 
              href="https://wa.me/5804145082446?text=Hola%20PeyBer,%20necesito%20información%20y%20cotización%20sobre%20uniformes." 
              target="_blank"
              rel="noopener"
              class="bg-white text-brand-navy text-center border border-slate-200 px-8 py-3.5 rounded-full font-semibold shadow-sm hover:border-brand-emerald hover:text-brand-emerald hover:translate-y-[-2px] transition-all duration-200"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          <!-- Quick Statistics -->
          <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0">
            <div>
              <p class="font-display font-bold text-3xl text-brand-navy">+10</p>
              <p class="text-xs text-slate-500 uppercase tracking-wider mt-1">Años de Exp.</p>
            </div>
            <div>
              <p class="font-display font-bold text-3xl text-brand-navy">100%</p>
              <p class="text-xs text-slate-500 uppercase tracking-wider mt-1">Garantizado</p>
            </div>
            <div>
              <p class="font-display font-bold text-3xl text-brand-navy">Premium</p>
              <p class="text-xs text-slate-500 uppercase tracking-wider mt-1">Telas Imp.</p>
            </div>
          </div>
        </div>

        <!-- Right Side: Graphic Mockup Showcase -->
        <div class="lg:col-span-6 relative flex justify-center items-center">
          <div class="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
            
            <!-- Floating Decorative Rings -->
            <div class="absolute inset-0 rounded-full border border-dashed border-slate-300 animate-spin-slow pointer-events-none"></div>
            
            <!-- Central Premium Circle Background -->
            <div class="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-brand-navy/5 to-brand-emerald/10 blur-xl"></div>
            
            <!-- Product Showcases -->
            <!-- Scrub Top Card -->
            <div class="absolute w-[50%] top-0 left-0 glass-card p-3 rounded-2xl shadow-xl transform hover:scale-105 hover:-rotate-2 transition-all duration-300 card-hover-effect">
              <img src="/scrub_top.png" alt="Scrubs Cuello V PeyBer" class="w-full h-auto rounded-xl bg-slate-100 object-cover" />
              <div class="mt-2 text-left">
                <span class="text-[10px] uppercase font-bold tracking-wider text-brand-emerald">Colección Médica</span>
                <h3 class="font-bold text-brand-navy text-sm truncate">Scrubs Premium Dama</h3>
              </div>
            </div>

            <!-- Scrub Pants Card -->
            <div class="absolute w-[46%] bottom-4 right-0 glass-card p-3 rounded-2xl shadow-xl transform rotate-3 hover:scale-105 hover:rotate-0 transition-all duration-300 card-hover-effect">
              <img src="/scrub_pants.png" alt="Pantalón Scrubs PeyBer" class="w-full h-auto rounded-xl bg-slate-100 object-cover" />
              <div class="mt-2 text-left">
                <span class="text-[10px] uppercase font-bold tracking-wider text-slate-500">Ergonómico</span>
                <h3 class="font-bold text-brand-navy text-sm truncate">Pantalón Cargo</h3>
              </div>
            </div>

            <!-- Shoes Card -->
            <div class="absolute w-[44%] bottom-0 left-4 glass-card p-3 rounded-2xl shadow-lg transform -rotate-6 hover:scale-105 hover:rotate-0 transition-all duration-300 card-hover-effect">
              <img src="/medical_shoes.png" alt="Calzado Médico Blanco PeyBer" class="w-full h-auto rounded-xl bg-slate-100 object-cover" />
              <div class="mt-2 text-left">
                <span class="text-[10px] uppercase font-bold tracking-wider text-brand-emerald">Calzado Confort</span>
                <h3 class="font-bold text-brand-navy text-sm truncate">Zapatos Clínicos</h3>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-slide-up {
      animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .animate-slide-up:nth-child(2) { animation-delay: 0.15s; }
    .animate-slide-up:nth-child(3) { animation-delay: 0.3s; }
    .animate-slide-up:nth-child(4) { animation-delay: 0.45s; }

    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-spin-slow {
      animation: spinSlow 30s linear infinite;
    }
  `
})
export class HeroComponent {}
