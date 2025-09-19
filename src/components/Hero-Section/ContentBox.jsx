function ContentBox({ title, profession, about }) {
  return (
    <div className="content-box">
      <h1>{title}</h1>
      <p className="profession">{profession}</p>
      <p className="about">{about}</p>
    </div>
  );
}

export default ContentBox;
