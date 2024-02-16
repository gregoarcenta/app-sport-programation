export interface IGame {
  id:                number;
  fechaNumero:       number;
  fechaNumeroTexto:  string;
  idLocal:           number;
  nombreLocal:       string;
  resultadoLocal:    number;
  rutaLogoLocal:     string;
  idVisita:          number;
  nombreVisita:      string;
  resultadoVisita:   number;
  rutaLogoVisita:    string;
  fecha:             Date;
  fechaTexto:        string;
  hora:              string;
  horaTexto:         string;
  idVocalia:         number | null;
  nombreVocalia:     null | string;
  idEstadio:         number;
  nombreEstadio:     string;
  ordenEstadio:      number;
  colorEstadio:      string;
  idEstado:          number;
  descripcionEstado: string;
  colorEstado:       string;
  select:            boolean;
}
