import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';



@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private items: Product[] = [
        {
            id: '1',
            category: 'motherboard',
            img: 'assets/img/products/a620.webp',
            title: 'Gigabyte A620 S2h Ddr5 Amd Am5 M.2 Pcie 4.0 Pcreg',
            description: '',
            unit_price: 193007,
            arrayImgs: [
                "assets/img/products/imgForProduct/a620s2h/a620-0.webp",
                "assets/img/products/imgForProduct/a620s2h/a620-1.webp",
                "assets/img/products/imgForProduct/a620s2h/a620-2.webp",
                "assets/img/products/imgForProduct/a620s2h/a620-3.webp",
            ],
            review: { stars: 4, description: 'asd' },
            quantity: 1,
            features: [
                "AMD Socket AM5: Supports AMD Ryzen 7000 / Ryzen 8000 / Ryzen 9000 Series Processors",
                "Unparalleled Performance: 5+2+2 Phases Digital VRM Solution",
                "Dual Channel DDR5: 2*SMD DIMMs with AMD EXPO & Intel XMP Memory Module Support",
                "SuperSpeed Storage: PCIe 4.0 x4 M.2 Connector",
                "EZ-Latch: PCIe x16 Slot with Quick Release Design",
                "Fast Networks: GbE LAN",
                "Extended Connectivity: DP, HDMI, D-Sub",
                "Smart Fan 6: Features Multiple Temperature Sensors, Hybrid Fan Headers with FAN STOP",
                "Q-Flash Plus: Update BIOS Without Installing the CPU, Memory and Graphics Card"
            ]
        },
        {
            id: '2',
            category: 'motherboard',
            img: 'assets/img/products/a620m-k.webp',
            title: 'Asus A620M-K',
            description: '',
            arrayImgs: [
                "assets/img/products/imgForProduct/a620m-k/01.webp",
                "assets/img/products/imgForProduct/a620m-k/02.webp",
                "assets/img/products/imgForProduct/a620m-k/03.webp",
            ],
            unit_price: 108000,
            review: { stars: 5, description: 'tst' },
            quantity: 1,
            features: [
                "Model: A620M-K",
                "Chipset: AMD A620",
                "Socket: AM5",
                `CPU: <br>
                AMD Socket AM5 for AMD Ryzen™ 9000 & 8000 & 7000 Series Desktop Processors*<br>
                Supports up to AMD 120W CPU<br>
                * Refer to www.asus.com for CPU support list.`,
                "Form Factor: Micro ATX",
                `Memory: <br>2 x DIMM slots, Max. 96GB, DDR5 7200+(OC)/7000(OC)/6800(OC)/6600(OC)/6400(OC)/6200(OC)/6000(OC)/5800(OC)/5600(OC)/5400(OC)/5200/5000/4800 Non-ECC<br> Un-buffered Memory*<br>
                Dual Channel Memory Architecture<br>
                Supports AMD Extended Profiles for Overclocking (EXPO™)<br>
                * Supported memory types, data rate (speed), and number of DRAM modules vary depending on the CPU and memory configuration, for more information please refer to CPU/Memory Support list under the Support tab of product information site or visit https://www.asus.com/support/.<br>
                * Non-ECC, un-buffered DDR5 memory supports On-Die ECC function.`,
                `Graphics:<br>1 x VGA port
                1 x HDMI™ port**<br>
                * Graphics specifications may vary between CPU types. Please refer to AMD CPU specifications.<br>
                ** Supports 4K@60Hz as specified in HDMI 2.1.`,
                `Expansion Slots: <br>
                AMD Ryzen™ 9000 & 7000 Series Desktop Processors*<br>
                1 x PCIe 4.0 x16 slot (supports x16 mode)<br>
                AMD Ryzen™ 8000 Series Desktop Processors<br>
                1 x PCIe 4.0 x16 slot (supports x8/x4 mode)**<br>
                AMD A620 Chipset<br>
                1 x PCIe 3.0 x1 slot<br>
                * Please check the PCIe bifurcation table on the support site (https://www.asus.com/support/FAQ/1037507/).<br>
                ** Specifications vary by CPU types.<br>
                - To ensure compatibility of the device installed, please refer to https://www.asus.com/support/ for the list of supported peripherals.<br>`,
                `Storage: <br>Total supports 1 x M.2 slot and 4 x SATA 6Gb/s ports*<br>
                AMD Ryzen™ 9000 & 8000 & 7000 Series Desktop Processors<br>
                M.2 slot (Key M), type 2242/2260/2280 (supports PCIe 4.0 x4 mode)<br>
                AMD A620 Chipset<br>
                4 x SATA 6Gb/s ports<br>
                * AMD RAIDXpert2 Technology supports both PCIe RAID 0/1/10 and SATA RAID 0/1/10.`,
                `USB: <br>
                Rear USB (Total 6 ports)<br>
                4 x USB 3.2 Gen 1 (5G) ports (4 x Type-A)<br>
                2 x USB 2.0 ports (2 x Type-A)<br>
                Front USB (Total 6 ports)<br>
                1 x USB 3.2 Gen 1 (5G) header supports 2 additional USB 3.2 Gen 1 ports<br>
                2 x USB 2.0 headers support 4 additional USB 2.0 ports`,
                `Audio: <br>Realtek 7.1 Surround Sound High Definition Audio CODEC*<br>
                - Supports: Jack-detection, Multi-streaming, Front Panel Jack-retasking<br>
                - Supports up to 24-Bit/192 kHz playback<br>
                Audio Features<br>
                - Audio Shielding<br>
                - Premium audio capacitors<br>
                - Dedicated audio PCB layers<br>
                * A chassis with an HD audio module in the front panel is required to support 7.1 Surround Sound audio output.`,
                `Back Panel I/O Ports: <br>4 x USB 3.2 Gen 1 (5G) ports (4 x Type-A)<br>
                2 x USB 2.0 ports (2 x Type-A)<br>
                1 x VGA port<br>
                1 x HDMI™ port<br>
                1 x Realtek 1Gb Ethernet port<br>
                3 x Audio jacks<br>
                1 x PS/2 Keyboard/Mouse combo port`,
                `Internal I/O Connectors: <br>Fan and Cooling related<br>
                1 x 4-pin CPU Fan header<br>
                1 x 4-pin Chassis Fan header<br>
                Power related<br>
                1 x 24-pin Main Power connector<br>
                1 x 8-pin +12V Power connector<br>
                Storage related<br>
                1 x M.2 slot (Key M)<br>
                4 x SATA 6Gb/s ports
                USB<br>
                1 x USB 3.2 Gen 1 (5G) header supports 2 additional USB 3.2 Gen 1 ports<br>
                2 x USB 2.0 headers support 4 additional USB 2.0 ports<br>
                Miscellaneous<br>
                2 x Addressable Gen 2 headers<br>
                1 x Aura RGB header<br>
                1 x Clear CMOS header<br>
                1 x COM Port header<br>
                1 x Front Panel Audio header (AAFP)<br>
                1 x S/PDIF Out header<br>
                1 x Speaker header<br>
                1 x SPI TPM header (14-1pin)<br>
                1 x 10-1 pin System Panel header`,
                `Special Features: <br>ASUS 5X PROTECTION III<br>
                 DIGI+ VRM<br>
                 LANGuard<br>
                 Overvoltage Protection<br>
                 SafeSlot Core<br>
                 Stainless-Steel Back I/O<br>
                SUS Q-Design<br>
                 Q-DIMM<br>
                 Q-LED Core<br>
                 Q-Slot<br>
                SUS Thermal Solution<br>
                 Aluminum heatsink design
                ura Sync<br>
                 Aura RGB header<br>
                 Addressable Gen 2 headers`,
                 `Accessories: <br>Cables
                2 x SATA 6Gb/s cables<br>
                Miscellaneous<br>
                1 x I/O Shield<br>
                1 x Screw package for M.2 SSD<br>
                Documentation
                1 x User guide`
            ]
        },
        {
            id: '3',
            category: 'motherboard',
            arrayImgs: [
                "assets/img/products/imgForProduct/b650-a/01.webp",
                "assets/img/products/imgForProduct/b650-a/02.webp",
                "assets/img/products/imgForProduct/b650-a/03.webp",
                "assets/img/products/imgForProduct/b650-a/04.webp",
                "assets/img/products/imgForProduct/b650-a/05.webp",
                "assets/img/products/imgForProduct/b650-a/06.webp",
            ],
            img: 'assets/img/products/b650-a.webp',
            title: 'Rog Strix B650-A Gaming Wifi',
            description: '',
            unit_price: 280000,
            quantity: 1, 
            features: [
                "AMD Socket AM5: Listo para procesadores de escritorio AMD Ryzen™ Serie 7000.",
                "Solución de alimentación robusta: 12+2+1 fases de poder con conectores de alimentación ProCool de 8 + 4 pines, chokes de aleación de alta calidad y condensadores duraderos para admitir procesadores multinúcleo.",
                "Diseño térmico optimizado: Disipadores térmicos VRM masivos con canales de flujo de aire cortados estratégicamente y almohadillas térmicas de alta conductividad.",
                "Compatibilidad con M.2 de última generación: Un puerto PCIe® 5.0 M.2 y dos puertos PCIe 4.0 M.2, todos con disipadores térmicos para maximizar el rendimiento.",
                "Conectividad avanzada: Un USB 3.2 Gen 2x2 Type-C® y ocho puertos USB traseros adicionales, USB 3.2 Gen 2 Type-C® para panel frontal, HDMI® 2.1, DisplayPort™ 1.4 y un PCIe 4.0 x16 SafeSlot.",
                "Redes de alto rendimiento: WiFi 6E integrado (802.11ax), Bluetooth® 5.2 e Intel® 2.5G Ethernet con ASUS LANGuard.",
                "Control inteligente: Two-Way AI Noise Cancelation exclusivo de ASUS y AI Networking.",
                "Audio envolvente para juegos: ALC4080 con amplificador Savitech SV3H712, junto con DTS® Sound Unbound y Sonic Studio III.",
                "Personalización inigualable: Iluminación Aura Sync RGB exclusiva de ASUS, que incluye un puerto RGB y tres puertos Gen 2 RGB direccionables.",
                "Diseño de fácil montaje: PCIe® Slot Q-release, M.2 Q-Latch, placa de E/S premontada y botón BIOSFlashBack™.",
                "Software intuitivo: UEFI BIOS fácil de usar, Armory Crate RGB con administrador de dispositivos y prueba AIDA64 Extreme de 60 días incluida."
            ]
        },
        {
            id: '4',
            category: 'motherboard',
            arrayImgs: [
                "assets/img/products/imgForProduct/b650m-a/01.webp",
                "assets/img/products/imgForProduct/b650m-a/02.webp",
                "assets/img/products/imgForProduct/b650m-a/03.webp",
                "assets/img/products/imgForProduct/b650m-a/04.webp",
                "assets/img/products/imgForProduct/b650m-a/05.webp",
                "assets/img/products/imgForProduct/b650m-a/06.webp",
            ],
            img: 'assets/img/products/b650m-a.webp',
            title: 'Asus B650m-a',
            description: '',
            unit_price: 160000,
            quantity: 1,
            features: [
                "Socket AMD AM5: Listo para procesadores AMD Ryzen™.",
                "Conectividad ultrarrápida: M.2 PCIe 5.0, Realtek 2.5Gb Ethernet, puertos USB 3.2 Gen 2, USB 3.2 frontal Gen 1 Type-C®.",
               " ASUS OptiMem II: Enrutamiento cuidadoso de trazas y vías, además de optimizaciones de la capa base para preservar la integridad de la señal para mejorar el overclocking de la memoria.",
                "Enfriamiento completo: Disipador de calor VRM, disipador de calor PCH, encabezados de ventilador híbrido y Fan Xpert 2+. ",
                "Iluminación Aura Sync RGB: Puertos Gen 2 direccionables integrados y puerto Aura RGB para tiras de LED RGB, sincronizados fácilmente con hardware compatible con Aura Sync."
            ]
        },
        {
            id: '5',
            category: 'motherboard',
            arrayImgs: [
                "assets/img/products/imgForProduct/b650m-h/01.webp",
                "assets/img/products/imgForProduct/b650m-h/02.webp",
                "assets/img/products/imgForProduct/b650m-h/03.webp",
                "assets/img/products/imgForProduct/b650m-h/04.webp",
                "assets/img/products/imgForProduct/b650m-h/05.webp",
            ],
            img: 'assets/img/products/b650m-h.webp',
            title: 'Gigabyte B650M-H',
            description: '',
            unit_price: 170000,
            quantity: 1,
            features: [
                "AMD Socket AM5: Supports AMD Ryzen™ 7000/ Ryzen™ 8000/ Ryzen™ 9000 Series Processors",
                "Unparalleled Performance：5+2+2 Phases Digital VRM Solution",
                "Dual Channel DDR5：2*SMD DIMMs with AMD EXPO™ & Intel® XMP Memory Module Support",
                "SuperSpeed Storage：PCIe 4.0 x4 M.2 Connector",
               "EZ-Latch：PCIe x16 Slot with Quick Release Design",
                "Fast Networks：GbE LAN",
                "Extended Connectivity：DP, HDMI, D-Sub",
                "Smart Fan 6：Features Multiple Temperature Sensors, Hybrid Fan Headers with FAN STOP",
                "Q-Flash Plus：Update BIOS Without Installing the CPU, Memory and Graphics Card"
            ]
        },
        {
            id: '6',
            category: 'motherboard',
            img: 'assets/img/products/x670.webp',
            arrayImgs: [
                "assets/img/products/imgForProduct/x670/01.webp",
                "assets/img/products/imgForProduct/x670/02.webp",
                "assets/img/products/imgForProduct/x670/03.webp",
                "assets/img/products/imgForProduct/x670/04.webp",
                "assets/img/products/imgForProduct/x670/05.webp",
                "assets/img/products/imgForProduct/x670/06.webp",
            ],
            title: 'Aourus X670 Elite AX',
            description: '',
            unit_price: 470000,
            quantity: 1,
            features: [
                `Procesador: AMD Socket AM5, support for: AMD Ryzen™ 7000 / Ryzen™ 8000 / Ryzen™ 9000 Series Processors
                (Please refer "CPU Support List" for more information.)`,
                "Chipset: AMD X670",
                `Memoria: Support for DDR5 8000(OC)/ 7800(OC)/ 7600(OC)/ 7200(OC)/ 7000(OC)/ 6800(OC)/ 6666(OC)/ 6600(OC)/ 6400(OC)/ 6200(OC)/ 6000(OC)/ 5600(OC)/ 5200/ 4800/ 4400 MT/s memory modules<br>
                4 x DDR5 DIMM sockets supporting up to 256 GB (64 GB single DIMM capacity) of system memory<br>
                Dual channel memory architecture<br>
                Support for non-ECC Un-buffered DIMM 1Rx8/2Rx8/1Rx16 memory modules<br>
                Support for AMD EXtended Profiles for Overclocking (AMD EXPO™) and Extreme Memory Profile (XMP) memory modules<br>
                (The CPU and memory configuration may affect the supported memory types, data rate (speed), and number of DRAM modules, please refer to "Memory Support List" for more information.)`,
                `Conectores del panel trasero: <br>
                1 x Q-Flash Plus button<br>
                2 x SMA antenna connectors (2T2R)<br>
                1 x HDMI port<br>
                6 x USB 3.2 Gen 1 ports<br>
                4 x USB 2.0/1.1 ports<br>
                2 x USB 3.2 Gen 2 Type-A ports (red)<br>
                1 x USB Type-C® port, with USB 3.2 Gen 2x2 support<br>
                1 x RJ-45 port<br>
                3 x audio jacks
                `
            ]
        },
        {
            id: '7',
            category: 'motherboard',
            img: 'assets/img/products/x670e.webp',
            arrayImgs: [
                "assets/img/products/imgForProduct/x670e/01.webp",
                "assets/img/products/imgForProduct/x670e/02.webp",
                "assets/img/products/imgForProduct/x670e/03.webp",
                "assets/img/products/imgForProduct/x670e/04.webp",
                "assets/img/products/imgForProduct/x670e/05.webp",
                "assets/img/products/imgForProduct/x670e/06.webp",
            ],
            title: 'Asrock x670E Steel Legend',
            description: '',
            unit_price: 384000,
            quantity: 1,
            features: [
                "Soporta AMD Ryzen™ 9000, 8000 y 7000 Series Processors",
                "16+2+1 Phase Power Design, SPS",
                "4 x DDR5 DIMMs, Dual Channel, up to 7600+ (OC)",
                "Soporta Dual Channel, up to 7600+ (OC)",
                "1 PCIe 5.0 x16",
                "1 PCIe 3.0 x16",
                "1 PCIe 3.0 x1",
                "Opciones de salida gráficos: 1 HDMI, 1 DisplayPort",
                "Realtek ALC1220 Audio 7.1 canales HD Codec, Nahimic Audio",
                "1 Blazing M.2 (PCIe Gen5x4)",
                "3 Hyper M.2 (PCIe Gen4x4)",
                "4 SATA3",
                "2 USB 3.2 Gen2x2 Type-C (1 Rear, 1 Front)",
                "1 USB 3.2 Gen2 Type-A (Traseros)",
                "10 USB 3.2 Gen1 (6 Rear, 4 Front)",
                "Realtek 2.5G LAN, Realtek 1G LAN",
                "802.11ax Wi-Fi 6E + Bluetooth 5.2"
            ]
        }
    ];

    getProducts(): Product[] {
        return this.items;
    }

    getFilteredProducts(search: string = '', minPrice: number = 0, maxPrice: number = Infinity, minStars: number = 0): Product[] {
        return this.items.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase()) &&
            product.unit_price >= minPrice &&
            product.unit_price <= maxPrice &&
            (product.review?.stars || 0) >= minStars
        );
    }

}
