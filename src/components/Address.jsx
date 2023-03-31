// import React from "react";
//    import PlacesAutocomplete, {
//      geocodeByAddress,
//      getLatLng,
//    } from "react-google-places-autocomplete";
//    import "react-google-places-autocomplete/dist/index.min.css";
//    import axios from "axios";
//    import _ from "lodash";

// const InputWrapper = tw.div`
//   relative
//   w-full
// `;

// const Input = tw.input`
//   w-full
//   border-2
//   border-gray-300
//   rounded-md
//   py-2
//   px-3
//   text-gray-700
//   mb-3
//   leading-tight
//   focus:outline-none
//   focus:bg-white
//   focus:border-blue-500
// `;

// const Label = tw.label`
//   text-gray-700
//   font-bold
//   mb-2
//   block
// `;

// const ErrorMessage = tw.span`
//   text-red-500
//   text-sm
// `;

// const AddressInput = ({ label, name, onChange, onBlur, error }) => {
//   const handleSelect = async (address) => {
//     try {
//       const results = await geocodeByAddress(address.label);
//       const latLng = await getLatLng(results[0]);
//       onChange({
//         target: {
//           name,
//           value: {
//             address: address.label,
//             lat: latLng.lat,
//             lng: latLng.lng,
//           },
//         },
//       });
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   return (
//     <InputWrapper>
//       <Label htmlFor={name}>{label}</Label>
//       <PlacesAutocomplete
//         onSelect={handleSelect}
//         searchOptions={{
//           types: ["address"],
//           componentRestrictions: { country: "us" },
//         }}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <Input
//               {...getInputProps({
//                 name,
//                 onBlur,
//               })}
//             />
//             {loading && <div>Loading...</div>}
//             {suggestions.map((suggestion) => {
//               const style = suggestion.active
//                 ? "bg-gray-100 cursor-pointer p-2"
//                 : "bg-white cursor-pointer p-2";
//               return (
//                 <div
//                   {...getSuggestionItemProps(suggestion, { style })}
//                   key={suggestion.placeId}
//                 >
//                   {suggestion.description}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </PlacesAutocomplete>
//       {error && <ErrorMessage>{error}</ErrorMessage>}
//     </InputWrapper>
//   );
// };

// export default AddressInput;