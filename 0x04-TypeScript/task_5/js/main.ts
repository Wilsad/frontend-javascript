// Define branded types for MajorCredits and MinorCredits

interface MajorCredits {
  credits: number;
  // Brand to distinguish MajorCredits
  _majorBrand: void;
}

interface MinorCredits {
  credits: number;
  // Brand to distinguish MinorCredits
  _minorBrand: void;
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _majorBrand: undefined };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _minorBrand: undefined };
}

// Example usage (optional)
const major1: MajorCredits = { credits: 3, _majorBrand: undefined };
const major2: MajorCredits = { credits: 4, _majorBrand: undefined };

const minor1: MinorCredits = { credits: 1, _minorBrand: undefined };
const minor2: MinorCredits = { credits: 2, _minorBrand: undefined };

console.log("Major Credits Sum:", sumMajorCredits(major1, major2));
console.log("Minor Credits Sum:", sumMinorCredits(minor1, minor2));
