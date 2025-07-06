// import type { IndicatorProps } from "../types/types";

// export function Indicator({
//   totalSteps,
//   currentStep,
//   onSelect,
// }: IndicatorProps): JSX.Element {
//   const dots = Array.from({ length: totalSteps }, (_, i) => i);

//   return (
//     <div>
//       {dots.map((i) => (
//         <button
//           key={i}
//           onClick={() => onSelect(i)}
//           aria-label={`Anar al pas ${i + 1}`}
//         >
//           {i === currentStep ? "●" : "○"}
//         </button>
//       ))}
//     </div>
//   );
// }
