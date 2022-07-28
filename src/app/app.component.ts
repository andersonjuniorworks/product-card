import { Component } from '@angular/core';

export interface Product {
  id: number;
  description: string;
  oldPrice: number;
  currentPrice: number;
  priceInfo: string;
  image: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      description: 'Kit Console Sony Playstation 4 + GTA 5',
      oldPrice: 2449.99,
      currentPrice: 2129.99,
      priceInfo: 'À vista no PIX',
      image: 'https://i.ibb.co/340NRZP/ps4.jpg',
    },
    {
      id: 2,
      description: 'Kit Console Sony Playstation 5 + Uncharted Collection',
      oldPrice: 5129.9,
      currentPrice: 4749.9,
      priceInfo: 'À vista no PIX',
      image: 'https://i.ibb.co/7VpDz3M/ps5.jpg',
    },
    {
      id: 3,
      description: 'Microsoft Xbox Series S, 512GB, Branco - RRS-00006',
      oldPrice: 2649.9,
      currentPrice: 2299.9,
      priceInfo: 'À vista no PIX',
      image: 'https://i.ibb.co/SQqm80D/xbox.jpg',
    },
    {
      id: 4,
      description:
        'Notebook Lenovo Ultrafino Ideapad Ryzen 5-5500U, 8GB, 256GB SSD, 15.6 Full HD, Linux, Cinza',
      oldPrice: 5041.22,
      currentPrice: 3199.9,
      priceInfo: 'À vista no PIX',
      image: 'https://i.ibb.co/8zK7Jx3/lenovo.jpg',
    },
    {
      id: 5,
      description:
        'Smartphone Motorola G20, 64GB, Octa-Core, Câmera Quadrupla, 48MP',
      oldPrice: 1790.4,
      currentPrice: 1196.05,
      priceInfo: 'À vista no PIX',
      image: 'https://i.ibb.co/WPnzrsS/celular.jpg',
    },
    {
      id: 6,
      description:
        'SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s',
      oldPrice: 352.82,
      currentPrice: 299.9,
      priceInfo: 'À vista no PIX',
      image: 'https://i.ibb.co/Wf7B4m5/ssd.jpg',
    },
    {
      id: 7,
      description:
        'Monitor Gamer LG 25 Pol. IPS, Ultra Wide, 75 Hz, Full HD, 99% sRGB, HDMI, VESA',
      oldPrice: 1444.33,
      currentPrice: 999.9,
      priceInfo: 'À vista no PIX',
      image: 'https://i.ibb.co/619MVGD/lg.jpg',
    },
    {
      id: 8,
      description:
        'Computador Fácil, Intel Core i3 10100F, 8GB Ram, SSD 240GB, Geforce GT 210 1GB, Linux',
      oldPrice: 2399.89,
      currentPrice: 1799.9,
      priceInfo: 'À vista no PIX',
      image: 'https://i.ibb.co/mXX63jS/pc.jpg',
    },
  ];
}
