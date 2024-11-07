const app1 = {
    data() {
        return {
            frutas: [{ nombre: 'Manzana', cantidad: 15, precioUnitario: 5, total: 0 }],
            nuevaFruta: '',
            nuevaCantidad: 0,
            nuevoPrecio: 0.0,
        };
    },
    methods: {
        montoFruta(i) {
            this.frutas[i].total = this.frutas[i].cantidad * this.frutas[i].precioUnitario;
            return this.frutas[i].total;
        },
        agregar() {
            if (this.nuevaFruta && this.nuevaCantidad > 0 && this.nuevoPrecio > 0) {
                this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad: this.nuevaCantidad,
                    precioUnitario: this.nuevoPrecio,
                });
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0;
            }
        },
    },
    computed: {
        subtotal() {
            return this.frutas.reduce((acc, fruta) => acc + (fruta.cantidad * fruta.precioUnitario), 0);
        },
        iva() {
            return this.subtotal * 0.16; // Suponiendo un IVA del 16%
        },
        total() {
            return this.subtotal + this.iva;
        },
    },
};

const apli2 = Vue.createApp(app1).mount('#seccion');
