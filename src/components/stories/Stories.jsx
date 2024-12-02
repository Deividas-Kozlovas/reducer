import { useGloblContext } from "../../context/context";

const Stories = () => {
  const {hits, isLoading, removeStory } = useGloblContext;
  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">{points}points by <span>{author} |</span>  {num_comments}{' '}</p>
           <div>
           <a href={url} className="read-link" target="blank">daugiau...</a>
           <button onClick={()=>{removeStory(objectID)}}>istrinti</button>
           </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
