import Logo from "@/assets/HestiaTechnologyWhite.svg";
import { Building2, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="flex flex-col gap-4">
            <img
              src={Logo.src}
              alt="Hestia Logo"
              className="h-10 w-auto mr-auto"
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Hestia Technology, Lda</p>
              <p>NIF: 518567680</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="/"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Home
              </a>
              <a
                href="/prices"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Preços
              </a>
              <a
                href="/about"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Sobre Nós
              </a>
              <a
                href="/contact"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Contacto
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="/privacy"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/terms"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Termos de Serviço
              </a>
              <a
                href="/cookies"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                Política de Cookies
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <p>Incubadora START@IPCA</p>
                  <p>Campus do IPCA, Lugar do Aldão</p>
                  <p>4750-810 Vila Frescainha (São Martinho)</p>
                  <p>Portugal</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:contact@hestia.pt"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  contact@hestia.pt
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+351123456789"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  +351 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Hestia Technology, Lda. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
