export const BASE_URL = process.env.NEXT_PUBLIC_S3_HOST;

export const CDN_ASSETS = {
  logo: `${BASE_URL}/landing/svg/logo.svg`,
  background: {
    gardenDayTime: `${BASE_URL}/landing/background/bg-garden-daytime.png`,
    gardenNightWinter: `${BASE_URL}/landing/background/bg-garden-night-winter.png`,
  },
  character: {
    heroes: {
      narin: `${BASE_URL}/landing/character/narin-footer.png`,
      riha: `${BASE_URL}/landing/character/riha-footer.png`,
      soyeon: `${BASE_URL}/landing/character/soyeon-footer.png`,
      author: `${BASE_URL}/landing/character/po-profile.png`,
    },
    transparent: {
      narin: {
        banner: `${BASE_URL}/landing/character/narin-high-angle.png`,
        profile: `${BASE_URL}/landing/character/narin-profile.png`,
      },
      riha: {
        banner: `${BASE_URL}/landing/character/riha-front.png`,
        profile: `${BASE_URL}/landing/character/riha-profile.png`,
      },
      soyeon: {
        banner: `${BASE_URL}/landing/character/soyeon-front.png`,
        profile: `${BASE_URL}/landing/character/soyeon-profile.png`,
      },
    },
  },
};
