export enum AlignmentEthic {
  Lawful = "Lawful",
  Neutral = "Neutral",
  Chaotic = "Chaotic",
}

export enum AlignmentMoral {
  Good = "Good",
  Neutral = "Neutral",
  Evil = "Evil",
}

export const Alignment = {
  LawfulGood: [AlignmentEthic.Lawful, AlignmentMoral.Good],
  NeutralGood: [AlignmentEthic.Neutral, AlignmentMoral.Good],
  ChaoticGood: [AlignmentEthic.Chaotic, AlignmentMoral.Good],
  LawfulNeutral: [AlignmentEthic.Lawful, AlignmentMoral.Neutral],
  Neutral: [AlignmentEthic.Neutral, AlignmentMoral.Neutral],
  ChaoticNeutral: [AlignmentEthic.Chaotic, AlignmentMoral.Neutral],
  LawfulEvil: [AlignmentEthic.Lawful, AlignmentMoral.Evil],
  NeutralEvil: [AlignmentEthic.Neutral, AlignmentMoral.Evil],
  ChaoticEvil: [AlignmentEthic.Chaotic, AlignmentMoral.Evil],
};
