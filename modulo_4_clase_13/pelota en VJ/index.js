"use strict";

Vue.component("pelota", {
    template: /*html*/`
        <div 
            class="pelota" 
            :style="{
                top: configuracion.y + 'px',
                left: configuracion.x + 'px'}"
            >
            <img :src="configuracion.urlimagen">
        </div>
    `,
    data() {
        return {

        };
    },
    methods: {
        mover() {
            this.configuracion.x += this.configuracion.dx;
            this.configuracion.y += this.configuracion.dy;
            if (this.configuracion.x > this.maxX - 48 || this.configuracion.x < 0) {
                this.configuracion.dx *= -1;
            }
            if (this.configuracion.y > this.maxY - 48 || this.configuracion.y < 0) {
                this.configuracion.dy *= -1;
            }
        }
    },
    props: ["configuracion", "maxX", "maxY"]
})

Vue.component("cancha", {
    template: /*html*/`
    <div class="cancha">
        <h1>{{nombre}}</h1>
        <div
            :style="{
                width: maxX + 'px',
                height: maxY + 'px'
            }"
        >
            <pelota v-for="pelota of pelotas" 
                :configuracion="pelota"
                :key="pelota.key"
                ref="pelotas"
                :max-x="maxX"
                :max-y="maxY"></pelota>
        </div>
    </div>
    `,
    data() {
        return {};
    },
    methods: {
        moverPelotas() {
            this.$refs.pelotas.forEach(
                (pelota) => {
                    pelota.mover();
                }
            )
        }
    },
    props: ["pelotas", "maxX", "maxY", "nombre"]
})

let app = new Vue({
    el: "#app",
    data: {
        canchas: [
            {
                keyCancha: "sausalito",
                pelotas: [
                    {
                        key: 1,
                        urlimagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YnV1AVheXctsYW9VPQohi9uHGoOrkj9vjQ&usqp=CAU",
                        x: 100,
                        y: 50,
                        dx: 2,
                        dy: 2
                    },
                    {
                        key: 2,
                        urlimagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YnV1AVheXctsYW9VPQohi9uHGoOrkj9vjQ&usqp=CAU",
                        x: 50,
                        y: 70,
                        dx: 1,
                        dy: 1
                    }
                ],
                maxX: 500,
                maxY: 200
            },
            {
                keyCancha: "nacional",
                pelotas: [
                    {
                        key: 1,
                        urlimagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YnV1AVheXctsYW9VPQohi9uHGoOrkj9vjQ&usqp=CAU",
                        x: 30,
                        y: 40,
                        dx: 1,
                        dy: 1
                    },
                    {
                        key: 2,
                        urlimagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YnV1AVheXctsYW9VPQohi9uHGoOrkj9vjQ&usqp=CAU",
                        x: 20,
                        y: 20,
                        dx: 2,
                        dy: 1
                    }
                ],
                maxX: 300,
                maxY: 300
            },
            {
                keyCancha: "monumental",
                pelotas: [
                    {
                        key: 1,
                        urlimagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YnV1AVheXctsYW9VPQohi9uHGoOrkj9vjQ&usqp=CAU",
                        x: 45,
                        y: 15,
                        dx: 1,
                        dy: 1
                    },
                    {
                        key: 2,
                        urlimagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YnV1AVheXctsYW9VPQohi9uHGoOrkj9vjQ&usqp=CAU",
                        x: 80,
                        y: 60,
                        dx: 1,
                        dy: 2
                    }
                ],
                maxX: 300,
                maxY: 200
            }
        ]
    },
    methods: {
        actualiarTorneo() {
            this.$refs.canchas.forEach(
                (cancha) => {
                    cancha.moverPelotas();
                }
            )
        }
    },
    mounted() {
        let dibujar = () => {
            this.actualiarTorneo();
            window.requestAnimationFrame(dibujar);
        }
        window.requestAnimationFrame(dibujar);

        // window.requestAnimationFrame(() => {
        //     this.actualiarTorneo();
        //     window.requestAnimationFrame(() => {
        //         this.actualiarTorneo();
        //         window.requestAnimationFrame(() => {
        //             this.actualiarTorneo();
        //             window.requestAnimationFrame(() => {
        //                 this.actualiarTorneo();
        //                 window.requestAnimationFrame(() => {
        //                     this.actualiarTorneo();
        //                     window.requestAnimationFrame(() => {
        //                         this.actualiarTorneo();
        //                         window.requestAnimationFrame(dibujar);
        //                     });
        //                 });
        //             });
        //         });
        //     });
        // });

        
        // setInterval(() => {
        //     this.actualiarTorneo()
        // }, 10);
    }

})

