import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';



@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private items: Product[] = [
        {
            id: '1',
            img: 'assets/img/products/a620.webp',
            title: 'Mother Gigabyte A620 S2h Ddr5 Amd Am5 M.2 Pcie 4.0 Pcreg',
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
            img: 'assets/img/products/a620m-k.webp',
            title: 'Mother A620M-K',
            description: '',
            arrayImgs: [
                "assets/img/products/imgForProduct/a620m-k/01.webp",
                "assets/img/products/imgForProduct/a620m-k/02.webp",
                "assets/img/products/imgForProduct/a620m-k/03.webp",
            ],
            unit_price: 1100000,
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
            img: 'assets/img/products/b650-a.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        },
        {
            id: '4',
            img: 'assets/img/products/b650m-a.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        },
        {
            id: '5',
            img: 'assets/img/products/b650m-h.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        },
        {
            id: '6',
            img: 'assets/img/products/x670.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
        },
        {
            id: '7',
            img: 'assets/img/products/x670e.webp',
            title: 'Mother A620',
            description: '',
            unit_price: 100000,
            quantity: 1
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
