// // src/components/Footer.jsx
// import React from "react";
// import placeholder from "../assets/placeholder.png";
// import academy from "../assets/academy.png";
// import linkedin from "../assets/linkedin.png";

// // PAYMENT LOGOS
// import visa from "../assets/visa.png";
// import mastercard from "../assets/mastercard.webp";
// import am from "../assets/Am.png";
// import upi from "../assets/Upi.png";
// import gpay from "../assets/Gpay.png";
// import phonepe from "../assets/Phonepe1.png";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#f5f5f5] text-xs text-[#444] mt-16">
//       {/* TOP */}
//       <div className="w-full flex justify-center">
//         <div
//           className="
//             w-full max-w-[1290px] px-4 py-10
//             flex flex-col gap-10
//             lg:flex-row lg:items-start lg:justify-between
//           "
//         >
//           {/* LEFT SIDE: LOGO + PAYMENTS */}
//           <div className="w-full lg:w-[35%] max-w-sm">
//             {/* Full Academy Logo */}
//             <img
//               src={academy}
//               alt="Academy Logo"
//               className="h-12 object-contain"
//             />

//             {/* Tagline */}
//             <p className="mt-3 text-[11px] text-[#777]">
//               Marketing Mastery, One Class at a Time.
//             </p>

//             {/* Small Badge */}
//             <img
//               src={linkedin}
//               alt="Brand Badge"
//               className="h-6 mt-4 object-contain"
//             />

//             {/* Payment Methods */}
//             <div className="mt-6">
//               <p className="text-[11px] font-semibold mb-2">Payment Methods</p>

//               <div className="flex flex-wrap items-center gap-2">
//                 <img
//                   src={visa}
//                   alt="Visa"
//                   className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
//                 />
//                 <img
//                   src={mastercard}
//                   alt="MasterCard"
//                   className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
//                 />
//                 <img
//                   src={am}
//                   alt="American Express"
//                   className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
//                 />
//                 <img
//                   src={upi}
//                   alt="UPI"
//                   className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
//                 />
//                 <img
//                   src={gpay}
//                   alt="Google Pay"
//                   className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
//                 />
//                 <img
//                   src={phonepe}
//                   alt="PhonePe"
//                   className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE: 3 COLUMNS */}
//           <div className="w-full lg:w-[60%]">
//             <div
//               className="
//                 grid grid-cols-2 gap-x-10 gap-y-10
//                 sm:flex sm:justify-between
//               "
//             >
//               {/* DISCOVER */}
//               <div className="min-w-[140px] col-start-1 row-start-1">
//                 <p className="text-[11px] font-semibold mb-3">Discover</p>
//                 <ul className="space-y-1.5 text-[11px] text-[#666]">
//                   <li>About</li>
//                   <li>Courses</li>
//                   <li>Mentors</li>
//                   <li>Success Stories</li>
//                   <li>Resources</li>
//                   <li>FAQ&apos;s</li>
//                   <li>Careers</li>
//                   <li>Get in Touch</li>
//                 </ul>
//               </div>

//               {/* GROWTH */}
//               <div className="min-w-[140px] col-start-2 row-start-1">
//                 <p className="text-[11px] font-semibold mb-3">Growth</p>
//                 <ul className="space-y-1.5 text-[11px] text-[#666]">
//                   <li>Complete CV Rebrand</li>
//                   <li>LinkedIn Optimization</li>
//                   <li>Interview Preparation</li>
//                   <li>Packages</li>
//                 </ul>
//               </div>

//               {/* MORE */}
//               <div className="min-w-[160px] col-start-1 row-start-2">
//                 <p className="text-[11px] font-semibold mb-3">More</p>
//                 <ul className="space-y-1.5 text-[11px] text-[#666]">
//                   <li>Privacy Policy</li>
//                   <li>Terms &amp; Conditions</li>
//                   <li>Refund &amp; Cancellation Policy</li>
//                   <li>Philanthropy</li>
//                   <li>Partners</li>
//                   <li>Cookie Policy</li>
//                   <li>Modern Slavery Act</li>
//                   <li>Sitemap</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="w-full border-t border-black/5">
//         <div
//           className="
//             w-full max-w-[1290px] mx-auto px-4 py-4
//             flex flex-col gap-3
//             sm:flex-row sm:items-center sm:justify-between
//           "
//         >
//           <div className="space-y-1 text-[10px] text-[#777]">
//             <p>Made with ❤️ in India 🇮🇳 for the World</p>
//             <p>
//               © 2017 - 2025 | Academy by Nigel Quadros | All Rights Reserved ®
//             </p>
//           </div>

//           <div className="flex flex-col items-start sm:items-end gap-1 text-[10px]">
//             <p className="text-[#777]">Coming Soon</p>
//             <div className="flex items-center gap-2">
//               <img
//                 src={placeholder}
//                 alt="Google Play"
//                 className="h-7 w-24 object-contain bg-black/80 rounded"
//               />
//               <img
//                 src={placeholder}
//                 alt="App Store"
//                 className="h-7 w-24 object-contain bg-black/80 rounded"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// src/components/Footer.jsx
// src/components/Footer.jsx
// import React from "react";
// import placeholder from "../assets/placeholder.png";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#f5f5f5] text-xs text-[#444] mt-16">
//       {/* TOP */}
//       <div className="w-full flex justify-center">
//         <div
//           className="
//             w-full
//             max-w-[1290px]
//             px-4
//             py-10
//             flex
//             flex-col
//             gap-10
//             lg:flex-row
//             lg:items-start
//             lg:justify-between
//           "
//         >
//           {/* LEFT SIDE: LOGO + PAYMENTS */}
//           <div className="w-full lg:w-[35%] max-w-sm">
//             {/* Full Academy Logo (single image) */}
//             <img
//               src={placeholder}
//               alt="Academy Logo"
//               className="h-12 object-contain"
//             />

//             {/* Tagline */}
//             <p className="mt-3 text-[11px] text-[#777]">
//               Marketing Mastery, One Class at a Time.
//             </p>

//             {/* Small logo between tagline & payment methods */}
//             <img
//               src={placeholder}
//               alt="Brand Badge"
//               className="h-6 mt-4 object-contain"
//             />

//             {/* Payment Methods */}
//             <div className="mt-6">
//               <p className="text-[11px] font-semibold mb-2">Payment Methods</p>

//               <div className="flex flex-wrap items-center gap-2">
//                 {[1, 2, 3, 4, 5, 6].map((item) => (
//                   <img
//                     key={item}
//                     src={placeholder}
//                     alt="Payment Logo"
//                     className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE: 3 COLUMNS */}
//           <div className="w-full lg:w-[60%]">
//             <div
//               className="
//                 grid grid-cols-3 gap-6
//                 sm:flex sm:justify-between
//               "
//             >
//               {/* DISCOVER */}
//               <div className="sm:min-w-[140px]">
//                 <p className="text-[11px] font-semibold mb-3">Discover</p>
//                 <ul className="space-y-1.5 text-[11px] text-[#666]">
//                   <li>About</li>
//                   <li>Courses</li>
//                   <li>Mentors</li>
//                   <li>Success Stories</li>
//                   <li>Resources</li>
//                   <li>FAQ&apos;s</li>
//                   <li>Careers</li>
//                   <li>Get in Touch</li>
//                 </ul>
//               </div>

//               {/* GROWTH */}
//               <div className="sm:min-w-[140px]">
//                 <p className="text-[11px] font-semibold mb-3">Growth</p>
//                 <ul className="space-y-1.5 text-[11px] text-[#666]">
//                   <li>Complete CV Rebrand</li>
//                   <li>LinkedIn Optimization</li>
//                   <li>Interview Preparation</li>
//                   <li>Packages</li>
//                 </ul>
//               </div>

//               {/* MORE */}
//               <div className="sm:min-w-[160px]">
//                 <p className="text-[11px] font-semibold mb-3">More</p>
//                 <ul className="space-y-1.5 text-[11px] text-[#666]">
//                   <li>Privacy Policy</li>
//                   <li>Terms &amp; Conditions</li>
//                   <li>Refund &amp; Cancellation Policy</li>
//                   <li>Philanthropy</li>
//                   <li>Partners</li>
//                   <li>Cookie Policy</li>
//                   <li>Modern Slavery Act</li>
//                   <li>Sitemap</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="w-full border-t border-black/5">
//         <div
//           className="
//             w-full
//             max-w-[1290px]
//             mx-auto
//             px-4
//             py-4
//             flex
//             flex-col
//             gap-3
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//         >
//           <div className="space-y-1 text-[10px] text-[#777]">
//             <p>Made with ❤️ in India 🇮🇳 for the World</p>
//             <p>
//               © 2017 - 2025 | Academy by Nigel Quadros | All Rights Reserved ®
//             </p>
//           </div>

//           <div className="flex flex-col items-start sm:items-end gap-1 text-[10px]">
//             <p className="text-[#777]">Coming Soon</p>
//             <div className="flex items-center gap-2">
//               <img
//                 src={placeholder}
//                 alt="Google Play"
//                 className="h-7 w-24 object-contain bg-black/80 rounded"
//               />
//               <img
//                 src={placeholder}
//                 alt="App Store"
//                 className="h-7 w-24 object-contain bg-black/80 rounded"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
// src/components/Footer.jsx
import React from "react";
import placeholder from "../assets/placeholder.png";
import academy from "../assets/academy.png";
import linkedin from "../assets/linkedin.png";

// PAYMENT LOGOS
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.webp";
import am from "../assets/Am.png";
import upi from "../assets/Upi.png";
import gpay from "../assets/Gpay.png";
import phonepe from "../assets/PhonePe1.png";

// STORE BUTTONS
import Playstore from "../assets/Playstore.png";
import Appstore from "../assets/Appstore.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5] text-xs text-[#444] mt-16">
      {/* TOP */}
      <div className="w-full flex justify-center">
        <div
          className="
            w-full max-w-[1290px] px-4 py-10
            flex flex-col gap-10
            lg:flex-row lg:items-start lg:justify-between
          "
        >
          {/* LEFT SIDE: LOGO + PAYMENTS */}
          <div className="w-full lg:w-[35%] max-w-sm">
            {/* Full Academy Logo */}
            <img
              src={academy}
              alt="Academy Logo"
              className="h-12 object-contain"
            />

            {/* Tagline */}
            <p className="mt-3 text-[11px] text-[#777]">
              Marketing Mastery, One Class at a Time.
            </p>

            {/* Small Badge */}
            <img
              src={linkedin}
              alt="Brand Badge"
              className="h-6 mt-4 object-contain"
            />

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-[11px] font-semibold mb-2">Payment Methods</p>

              <div className="flex flex-wrap items-center gap-2">
                <img
                  src={visa}
                  alt="Visa"
                  className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
                />
                <img
                  src={mastercard}
                  alt="MasterCard"
                  className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
                />
                <img
                  src={am}
                  alt="American Express"
                  className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
                />
                <img
                  src={upi}
                  alt="UPI"
                  className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
                />
                <img
                  src={gpay}
                  alt="Google Pay"
                  className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
                />
                <img
                  src={phonepe}
                  alt="PhonePe"
                  className="h-6 w-10 object-contain bg-white rounded-[3px] border border-black/5"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: 3 COLUMNS */}
          <div className="w-full lg:w-[60%]">
            <div
              className="
                grid grid-cols-2 gap-x-10 gap-y-10
                sm:flex sm:justify-between
              "
            >
              {/* DISCOVER */}
              <div className="min-w-[140px] col-start-1 row-start-1">
                <p className="text-[11px] font-semibold mb-3">Discover</p>
                <ul className="space-y-1.5 text-[11px] text-[#666]">
                  <li>About</li>
                  <li>Courses</li>
                  <li>Mentors</li>
                  <li>Success Stories</li>
                  <li>Resources</li>
                  <li>FAQ&apos;s</li>
                  <li>Careers</li>
                  <li>Get in Touch</li>
                </ul>
              </div>

              {/* GROWTH */}
              <div className="min-w-[140px] col-start-2 row-start-1">
                <p className="text-[11px] font-semibold mb-3">Growth</p>
                <ul className="space-y-1.5 text-[11px] text-[#666]">
                  <li>Complete CV Rebrand</li>
                  <li>LinkedIn Optimization</li>
                  <li>Interview Preparation</li>
                  <li>Packages</li>
                </ul>
              </div>

              {/* MORE */}
              <div className="min-w-[160px] col-start-1 row-start-2">
                <p className="text-[11px] font-semibold mb-3">More</p>
                <ul className="space-y-1.5 text-[11px] text-[#666]">
                  <li>Privacy Policy</li>
                  <li>Terms &amp; Conditions</li>
                  <li>Refund &amp; Cancellation Policy</li>
                  <li>Philanthropy</li>
                  <li>Partners</li>
                  <li>Cookie Policy</li>
                  <li>Modern Slavery Act</li>
                  <li>Sitemap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full border-t border-black/5">
        <div
          className="
            w-full max-w-[1290px] mx-auto px-4 py-4
            flex flex-col gap-3
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <div className="space-y-1 text-[10px] text-[#777]">
            <p>Made with ❤️ in India 🇮🇳 for the World</p>
            <p>
              © 2017 - 2025 | Academy by Nigel Quadros | All Rights Reserved ®
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-center gap-2 text-[10px]">
  <p className="text-[#777]">Coming Soon</p>

  <div className="flex items-center gap-3">
    {/* PLAYSTORE */}
    <div className="h-6 sm:h-7 w-24 sm:w-28 rounded-md overflow-hidden">
      <img
        src={Playstore}
        alt="Get it on Google Play"
        className="w-full h-full object-cover"
      />
    </div>

    {/* APPSTORE */}
    <div className="h-6 sm:h-7 w-24 sm:w-28 rounded-md overflow-hidden">
      <img
        src={Appstore}
        alt="Download on the App Store"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}

