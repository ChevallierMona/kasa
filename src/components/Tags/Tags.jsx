import "./Tags.scss";

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span
          key={tag}
          className="tags__item"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;