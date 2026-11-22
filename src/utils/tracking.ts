declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
    gtag?: (...args: unknown[]) => void;
  }
}

export interface TrackingMetadata {
  service?: string;
  city?: string;
  source?: string;
}

export function trackWhatsAppConversion(label: string, metadata?: TrackingMetadata): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    event_category: 'WhatsApp',
    event_label: label,
    ...metadata,
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'WhatsApp',
      event_label: label,
      ...metadata,
    });
    window.gtag('event', 'generate_lead', {
      event_category: 'Contato',
      event_label: label,
      ...metadata,
    });
  }
}

export function trackQuoteFormSubmit(metadata: { city: string; service: string }): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'solicitacao_orcamento',
    event_category: 'Formulario',
    event_label: `${metadata.service} (${metadata.city})`,
    ...metadata,
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'solicitacao_orcamento', {
      event_category: 'Formulario',
      event_label: `${metadata.service} (${metadata.city})`,
      ...metadata,
    });
  }

  trackWhatsAppConversion(`Formulário - ${metadata.service}`, {
    city: metadata.city,
    service: metadata.service,
    source: 'contact_form',
  });
}
