import React from "react";
const GoogleMap = () => {
  return (
    <div className="mr-5">
      <h2>Địa chỉ</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.052682922194!2d106.68074531111097!3d10.807277089298893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528dc13c46875%3A0x6768ca9e7f9484b0!2zMjUwLzE1IE5ndXnhu4VuIFRoxrDhu6NuZyBIaeG7gW4sIFBoxrDhu51uZyA1LCBQaMO6IE5odeG6rW4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1708393799240!5m2!1svi!2s"
        width="1000px"
        height="95%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
