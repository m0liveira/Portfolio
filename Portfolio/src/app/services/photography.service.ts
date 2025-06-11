import { Injectable } from '@angular/core';

export interface Photo {
  src: string;
  alt: string;
  city?: string;
  date?: string;
}

export interface GroupedPhotos {
  date: string;
  photos: Photo[];
};

@Injectable({
  providedIn: 'root'
})

export class PhotographyService {
  selectedPhoto: Photo | null = null;
  galleryTitle: string | null = null;
  datesArray: string[] = [];
  citiesArray: string[] = [];

  collection: Photo[] = [
    {
      src: 'https://live.staticflickr.com/65535/54549555512_32e439e92f_h.jpg',
      alt: 'Kickbox figthers',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555522_a85f6ba606_h.jpg',
      alt: 'Kickbox figth winner',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550668053_e6a3700aa3_b.jpg',
      alt: 'Man kickbox figther',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550668043_01a64784cf_b.jpg',
      alt: 'Man on the ropes',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555547_c302df82f4_b.jpg',
      alt: 'Kickbox figther walking in',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614854_c265e7597c_b.jpg',
      alt: 'Kickbox figther punching',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550774855_507d3d3509_h.jpg',
      alt: 'Kickbox figther stance',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550435351_2ba064f906_b.jpg',
      alt: 'Man on the phone',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550435341_946708cd65_b.jpg',
      alt: 'Man looking',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614924_34a0d2b7fc_b.jpg',
      alt: 'Man portrait',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555627_2e7e5d4c1a_b.jpg',
      alt: 'Man holding a carnation',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555612_46207c5197_b.jpg',
      alt: 'Woman portrait',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550774890_283bce90c5_b.jpg',
      alt: 'Woman holding a carnation',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555592_971e19fe56_b.jpg',
      alt: 'Man with a smoking pipe',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550435316_9afb801a65_b.jpg',
      alt: 'Woman with portuguese designed cloth',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614879_e4c6a9889e_b.jpg',
      alt: 'Man with a carnation in the mouth',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614869_0c9b5fef0f_b.jpg',
      alt: 'Man portrait',
      city: 'Porto',
      date: '25/04/2025'
    },

    {
      src: 'https://live.staticflickr.com/65535/54550668103_539f797b83_b.jpg',
      alt: 'Crane grabbing a flower',
      city: 'Viana do Castelo',
      date: '13/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550668108_2140c36d1f_b.jpg',
      alt: 'Man walking under a water arch',
      city: 'Viana do Castelo',
      date: '13/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614929_49d4444bdb_h.jpg',
      alt: 'Bird covering the sun',
      city: 'Viana do Castelo',
      date: '13/04/2025'
    },
  ];

  latest: Photo[] = [
    {
      src: 'https://live.staticflickr.com/65535/54582581713_3c44801f05_b.jpg',
      alt: 'Man sitting',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54581496397_77511a5b70_b.jpg',
      alt: 'Man walking',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54582367591_90ee1f4396_b.jpg',
      alt: 'Woman with umbrella',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54582544514_8dac1c698b_b.jpg',
      alt: 'Woman drinking a pinaple',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54582544599_1a840dd43a_b.jpg',
      alt: 'Man playing guitar',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54582581853_e919b59e14_b.jpg',
      alt: 'Woman with flowers',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54581496502_1c019d9949_b.jpg',
      alt: 'Woman in white dress',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550435216_2890d3412b_b.jpg',
      alt: 'Porto subway',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555462_79099c4a80_b.jpg',
      alt: 'Two sillouetes standing',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614809_cecaba7472_b.jpg',
      alt: 'Boat framed in Douro river',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550667883_d86b76b986_b.jpg',
      alt: 'Two sillouetes walking over Douro river',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550667908_64595d1f52_b.jpg',
      alt: 'One sillouete walking over Douro river',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614794_c068db15fd_b.jpg',
      alt: 'Porto subway',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550667898_bbc88205f3_b.jpg',
      alt: 'Douro river & city',
      city: 'Porto',
      date: '21/05/2025'
    },
  ];

  showcase: Photo[] = [
    {
      src: 'https://live.staticflickr.com/65535/54582581713_3c44801f05_b.jpg',
      alt: 'Man sitting',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54582367591_90ee1f4396_b.jpg',
      alt: 'Woman with umbrella',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555462_79099c4a80_b.jpg',
      alt: 'Two sillouetes standing',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614809_cecaba7472_b.jpg',
      alt: 'Boat framed in Douro river',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614794_c068db15fd_b.jpg',
      alt: 'Porto subway',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550667898_bbc88205f3_b.jpg',
      alt: 'Douro river & city',
      city: 'Porto',
      date: '21/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550668043_01a64784cf_b.jpg',
      alt: 'Fighter on the ropes',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614854_c265e7597c_b.jpg',
      alt: 'Kickbox figther punching',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550774855_507d3d3509_h.jpg',
      alt: 'Kickbox figther stance',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555522_a85f6ba606_h.jpg',
      alt: 'Kickbox figth winner',
      city: 'Gaia',
      date: '17/05/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54549555627_2e7e5d4c1a_b.jpg',
      alt: 'Man holding a carnation',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550774890_283bce90c5_b.jpg',
      alt: 'Woman holding a carnation',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614879_e4c6a9889e_b.jpg',
      alt: 'Man with a carnation in the mouth',
      city: 'Porto',
      date: '25/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550668103_539f797b83_b.jpg',
      alt: 'Crane grabbing a flower',
      city: 'Viana do Castelo',
      date: '13/04/2025'
    },
    {
      src: 'https://live.staticflickr.com/65535/54550614929_49d4444bdb_h.jpg',
      alt: 'Bird covering the sun',
      city: 'Viana do Castelo',
      date: '13/04/2025'
    },
  ];

  constructor() { }

  setSelectedPhoto(photo: Photo | null) {
    this.selectedPhoto = photo;
  }

  getRandomPhotos(quantity: number, sourceArray: Photo[]): Photo[] {
    let result: Photo[] = [];
    let source = [...sourceArray];


    while (result.length < quantity) {
      let randomIndex = Math.floor(Math.random() * source.length);
      let randomPhoto = source.splice(randomIndex, 1)[0];

      result.push(randomPhoto);
    }

    return result;
  }

  getUniqueValues<T extends keyof Photo>(photos: Photo[], key: T): NonNullable<Photo[T]>[] {
    return [...new Set(photos.map(photo => photo[key]).filter(Boolean))] as NonNullable<Photo[T]>[];
  }

  groupPhotosByDate(photos: Photo[]): GroupedPhotos[] {
    let grouped: { [date: string]: Photo[] } = {};

    for (let photo of photos) {
      if (photo.date) {
        if (!grouped[photo.date]) {
          grouped[photo.date] = [];
        }
        grouped[photo.date].push(photo);
      }
    }

    return Object.entries(grouped).map(([date, photos]) => ({
      date,
      photos
    }));
  }
}
