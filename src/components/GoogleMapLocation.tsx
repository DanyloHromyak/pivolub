const GoogleMapLocation = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.984537787886!2d27.70860791088378!3d47.58634464404041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb6b170b3748f9%3A0x3ef06cfc67187b9a!2z0LzQsNC60LXQtdCy0YHQutC40Lkg0YDQvtC00L3QuNGH0L7Qug!5e0!3m2!1sen!2sua!4v1696173026205!5m2!1sen!2sua"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
       />
  );
};
export default GoogleMapLocation;
