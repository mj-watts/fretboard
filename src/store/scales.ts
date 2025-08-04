import { defineStore } from "pinia";

const PATTERNS = {
  major: [2, 2, 1, 2, 2, 2, 1], // W-W-H-W-W-W-H pattern
  minor: [2, 1, 2, 2, 1, 2, 2], // W-H-W-W-H-W-W pattern
  // // check this
  // harmonicMinor: [2, 1, 2, 2, 1, 3, 1],
  // melodicMinor: [2, 1, 2, 2, 2, 2, 1],
  // dorian: [2, 1, 2, 2, 2, 1, 2],
  // phrygian: [1, 2, 2, 2, 1, 2, 2],
  // lydian: [2, 2, 2, 1, 2, 2, 1],
  // mixolydian: [2, 2, 1, 2, 2, 1, 2],
  // aeolian: [2, 1, 2, 2, 1, 2, 2],
  // locrian: [1, 2, 2, 1, 2, 2, 2],
};

const SCALE_NAMES = Object.keys(PATTERNS);

export const useScalesStore = defineStore("scales", {
  state: () => ({
    notes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    scaleNames: SCALE_NAMES,
    currentScaleName: SCALE_NAMES[0],
    currentScaleNotes: [],
  }),

  actions: {
    setScale(scaleName: string) {
      this.currentScaleName = scaleName;
    },

    setCurrentScaleNotes(scaleNotes: string[]) {
      this.currentScaleNotes = scaleNotes;
    },

    calculateScale(scaleName: string, rootNote: string) {
      const scale = this.scaleNames.find((name) => name === scaleName);
      if (!scale) {
        throw new Error(`Scale ${scaleName} not found`);
      }

      let scaleNotes: string[] = [];

      if (scaleName === "major") {
        scaleNotes = this.majorScale(rootNote);
      }

      if (scaleName === "minor") {
        scaleNotes = this.minorScale(rootNote);
      }

      this.setCurrentScaleNotes(scaleNotes);
      return scaleNotes;
    },

    majorScale(rootNote: string) {
      const intervals = PATTERNS.major;
      const result = [rootNote];
      let currentIndex = this.notes.indexOf(rootNote);

      for (const interval of intervals) {
        currentIndex = (currentIndex + interval) % this.notes.length;
        const nextNote = this.notes[currentIndex];
        if (nextNote !== rootNote) {
          result.push(nextNote);
        }
      }

      return result;
    },

    minorScale(rootNote: string) {
      const intervals = PATTERNS.minor;
      const result = [rootNote];
      let currentIndex = this.notes.indexOf(rootNote);

      for (const interval of intervals) {
        currentIndex = (currentIndex + interval) % this.notes.length;
        const nextNote = this.notes[currentIndex];
        if (nextNote !== rootNote) {
          result.push(nextNote);
        }
      }

      return result;
    },
  },
});
