import { TinySliderSettings } from 'tiny-slider'

export const basicSliderSettings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: false,
  mouseDrag: true,
  edgePadding: 2,
  loop: true,
  items: 1,
  nav: false,
  responsive: {
    1: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
}

export const defaultSliderSettings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButtonOutput: false,
  nested: 'inner',
  controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  autoplay: true,
  controls: true,
  mouseDrag: true,
  edgePadding: 2,
  loop: true,
  items: 1,
  nav: true,
  responsive: {
    1: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
}

export const dotsPositionSliderSettings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButtonOutput: false,
  nested: 'inner',
  autoplay: true,
  controls: false,
  mouseDrag: true,
  edgePadding: 2,
  loop: true,
  items: 1,
  nav: true,
  responsive: {
    1: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
}

export const arrowsSliderSettings: TinySliderSettings = {
  arrowKeys: true,
  gutter: 30,
  autoplayButtonOutput: false,
  nested: 'inner',
  controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  autoplay: true,
  controls: true,
  mouseDrag: true,
  edgePadding: 2,
  loop: true,
  items: 1,
  nav: false,
  responsive: {
    1: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
}
