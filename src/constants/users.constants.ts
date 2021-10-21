export const genders = {
  man: 'man',
  woman: 'woman',
};

export const userEducations = [
  {
    educations: 'none',
  },
  {
    educations: 'hereditary',
  },
  {
    educations: 'elementary',
  },
  {
    educations: 'primary',
  },
  {
    educations: 'higher',
  },
  {
    educations: 'scientist',
  },
];

export const userProfessions = [
  {
    profession: 'none',
  },
  {
    profession: 'farmer',
  },
  {
    profession: 'craftsman',
  },
  {
    profession: 'builder',
  },
  {
    profession: 'military',
  },
  {
    profession: 'trade',
  },
  {
    profession: 'religion',
  },
  {
    profession: 'medicine',
  },
  {
    profession: 'culture',
  },
  {
    profession: 'upper class',
  },
];

export type UserType = {
  gender: string;
  age: number;
  profession: {
    type: string;
  };
  educations: {
    educations: string;
    progress: number;
  };
};
