import { record } from "astro/zod";

export const tracks = [
    {
        name: "Nurburgring BTG",
        length: "20.8 km",
        image: "https://r2.nthusiast.es/nurburgring.webp",
        description: "El circuito de Nürburgring es un circuito de carreras situado en Nürburg, Alemania. Es conocido por ser uno de los circuitos más largos y difíciles del mundo.",
        record: {
            car: "Hyundai i30 N",
            driver: "Manuel Lauck",
            time: "7:51",
            year: 2023
        },
        times: [
            {
                car: "Hyundai i30 N",
                driver: "Manuel Lauck",
                time: "7:51",
                year: 2023
            },
            {
                car: "Hyundai i20 N",
                driver: "Benjamin Leuchter",
                time: "7:53",
                year: 2020
            },
            {
                car: "Hyundai i30 N",
                driver: "Honda",
                time: "7:50",
                year: 2017
            }
        ]
    },
    {
        name: "Circuit de Calafat",
        length: "3.2 km",
        image: "https://r2.nthusiast.es/calafat.webp",
        description: "El circuito de Calafat es un circuito de carreras situado en la localidad de L'Ametlla de Mar, en la provincia de Tarragona, España.",
        record: {
            car: "Hyundai i30 N",
            driver: "Manuel Lauck",
            time: "1:20",
            year: 2023
        },
        times: [
            {
                car: "Hyundai i30 N",
                driver: "Manuel Lauck",
                time: "1:20",
                year: 2023
            },
            {
                car: "Hyundai i20 N",
                driver: "Benjamin Leuchter",
                time: "1:22",
                year: 2020
            },
            {
                car: "Hyundai i30 N",
                driver: "Honda",
                time: "1:19",
                year: 2017
            }
        ]
    },
    {
        name: "Circuit de Castellolí",
        length: "3.2 km",
        image: "https://r2.nthusiast.es/castelloli.webp",
        description: "El circuito de Castellolí es un circuito de carreras situado en la localidad de Castellolí, en la provincia de Barcelona, España.",
        record: {
            car: "Hyundai i30 N",
            driver: "Manuel Lauck",
            time: "1:20",
            year: 2023
        },
        times: [
            {
                car: "Hyundai i30 N",
                driver: "Manuel Lauck",
                time: "1:20",
                year: 2023
            },
            {
                car: "Hyundai i20 N",
                driver: "Benjamin Leuchter",
                time: "1:22",
                year: 2020
            },
            {
                car: "Hyundai i30 N",
                driver: "Honda",
                time: "1:19",
                year: 2017
            }
        ]
    }
]