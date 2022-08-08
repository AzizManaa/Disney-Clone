const Modal = ({ clickedMov, setClickedMov }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedMov(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${clickedMov}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </>
  );
};

export default Modal;
