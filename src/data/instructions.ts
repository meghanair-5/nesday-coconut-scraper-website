export type InstructionStep = {
  title: string;
  detail: string;
};

/** Source: Nesday product manual, as published on the previous website. */
export const operatingSteps: InstructionStep[] = [
  {
    title: "Fit the shredder head",
    detail: "Attach the dome-shaped shredder head to the handset.",
  },
  {
    title: "Plug in",
    detail: "Connect the power cord to the wall socket.",
  },
  {
    title: "Hold both securely",
    detail: "Hold the handset in one hand and the coconut half in the other.",
  },
  {
    title: "Switch on and scrape",
    detail:
      "Switch on and scrape the coconut flesh by moving the head across it, the way you would use a spoon.",
  },
  {
    title: "Switch off and unplug",
    detail: "When you have finished, switch off and disconnect the power cord.",
  },
  {
    title: "Clean",
    detail: "Remove the shredder head and wash it with water. Wipe the handset with a moist cloth.",
  },
];

export const safetyInstructions: string[] = [
  "Read all safety instructions before operating the scraper.",
  "Keep the scraper away from children during and after use.",
  "Tie back long hair and wear close-fitting clothes while using the scraper.",
  "Use only attachments and accessories recommended by the manufacturer.",
  "Follow the duty cycle: run for up to 5 minutes, then rest for 2 minutes.",
  "For indoor use only. The product is rated IP20 and is not protected against water.",
  "This is household equipment. Do not use it as professional or heavy-duty equipment.",
  "Do not open or disassemble the scraper or the adapter. Servicing must be done by Biars Industries or their authorised specialists.",
];

export const maintenanceInstructions: string[] = [
  "The scraper does not need special maintenance.",
  "Leave repairs to internal parts of the scraper or adapter to Biars Industries or their authorised specialists.",
  "Do not use solvents on the plastic parts. Many commercial solvents can damage plastic.",
  "Use a clean cloth to remove dirt, dust and oil from the body.",
  "Wash the shredder head with water.",
];

export const environmentalInstructions: string[] = [
  "Recycle raw materials instead of disposing of them as waste.",
  "Sort the machine, accessories and packaging for environmentally friendly recycling.",
  "Do not dispose of electrical products with household waste. Recycle where facilities exist, and check with your local authority for advice.",
];

export const dutyCycle = { runMinutes: 5, restMinutes: 2 } as const;
