// // First Method to write Named Export
// // Default Export
// function DefaultExport() {
//   return <div>DefaultExport</div>;
// }

// // Multiple Named Components
// // Named Export
// function NamedExport() {
//   return (
//     <div>
//       <h1>NamedExport</h1>
//     </div>
//   );
// }

// // Named Export Two
// function NamedExportTwo() {
//   return (
//     <div>
//       <h1>NamedExportTwo</h1>
//     </div>
//   );
// }

// export default DefaultExport;
// export { NamedExport, NamedExportTwo }; // Surrounded in curly brackets

// Second Method to write Named Export
// Default Export
export default function DefaultExport() {
  return <div>DefaultExport</div>;
}

// Multiple Named Components
// Named Export
export function NamedExport() {
  return (
    <>
      <h1>NamedExport</h1>

      {/* We can also use other components in an other component */}
      {/* <DefaultExport /> */}
      {/* <NamedExportTwo /> */}
    </>
  );
}

// Named Export Two
export function NamedExportTwo() {
  return (
    <div>
      <h1>NamedExportTwo</h1>
    </div>
  );
}
