import React from "react";
import Moment from "react-moment";
import calendarIcon from "../icons/calendar.svg";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  padding-bottom: 2em;
`


class Articles extends React.Component {
  state = {
    articles: [],
    error: null
  };

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    // Parses the JSON returned by a network request
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);

    // Checks if a network request came back fine, and throws an error if not
    const checkStatus = (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return parseJSON(resp).then((resp) => {
        throw resp;
      });
    };
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const articles = await fetch("http://localhost:1337/articles", {
        method: "GET",
        headers: headers
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, articles } = this.state;

    // eslint-disable-next-line no-console
    console.log(articles);

    // Print errors if any
    if (error) {
      return (
        <ErrorMessage>
          <h2>Error</h2>
          <p>An error occured: {error.message}</p>
        </ErrorMessage>
      );
    }

    return (
      <section className="articles">
        <h2 className="articles-main-title">Co je nového v Severce?</h2>
        {this.state.articles.reverse().map((
          article // Reverse in order to have newer articles at the top
        ) => (
          <article key={article.id} className="article-card">
            <div className="article-header">
              <h2 className="article-title">{article.headline}</h2>
              <div className="article-date">
                <img
                  src={calendarIcon}
                  alt="calendar icon"
                  className="article-calendar-icon"
                />
                <time className="article-title" dateTime={article.date}>
                  <small>
                    <Moment format="DD.MM.YYYY">{article.published_at}</Moment>
                  </small>
                </time>
              </div>
            </div>
            <ReactMarkdown source={article.content} />
          </article>
        ))}
      </section>
    );
  }
}

export default Articles;
