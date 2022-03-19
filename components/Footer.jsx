import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      
      <div className="space-y-4 text-xs text-gray-800">

        <h5 className="font-bold">Support</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Easter Eggs</p>
        <p>Customer Care</p>
        <p>Contact Us</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Accessibility</p>
        <p>Not a real site</p>
        <p>Decent remake of Airbnb</p>
        <p>Feel free to give pointers on improvements :)</p>
        <p>Discord Link</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Hosting</h5>
        <p>Josh Haughton</p>
        <p>Presents</p>
        <p>Airbnb</p>
        <p>Hundreds of Visitors</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
    </footer>
  );
};

export default Footer;
