export class Denuncia {
    public denunciante: string;
    public rua: string;
    public bairro: string;
    public municipio: string;
    public cep: string;
    public pontoReferencia: string;
    public latitude: string;
    public longitude: string;
    public descricao: string;
    public categoriaPai: number;
    public categoriaFilha: number;
    public data: string;
    public provavelAutor: string;
    public foto1: string;
    public foto2: string;
    public foto3: string;
    public usuarioId: number;

    constructor(denuncia?: Denuncia) {
      if (denuncia) {
        this.denunciante = denuncia.denunciante;
        this.rua = denuncia.rua;
        this.bairro = denuncia.bairro;
        this.municipio = denuncia.municipio;
        this.cep = denuncia.cep;
        this.pontoReferencia = denuncia.pontoReferencia;
        this.latitude = denuncia.latitude;
        this.longitude = denuncia.longitude;
        this.descricao = denuncia.descricao;
        this.categoriaPai = denuncia.categoriaPai;
        this.categoriaFilha = denuncia.categoriaFilha;
        this.data = denuncia.data;
        this.provavelAutor = denuncia.provavelAutor;
        this.foto1 = denuncia.foto1;
        this.foto2 = denuncia.foto2;
        this.foto3 = denuncia.foto3;
        this.usuarioId = denuncia.usuarioId;
      } else {
        this.denunciante = null;
        this.rua = null;
        this.bairro = null;
        this.municipio = null;
        this.cep = null;
        this.pontoReferencia = null;
        this.latitude = null;
        this.longitude = null;
        this.descricao = null;
        this.categoriaPai = null;
        this.categoriaFilha = null;
        this.data = null;
        this.provavelAutor = null;
        this.foto1 = null;
        this.foto2 = null;
        this.foto3 = null;
        this.usuarioId = null;
      }
    }
  }