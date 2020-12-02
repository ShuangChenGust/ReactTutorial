//

import React, { useState, useEffect } from "react";

const nouns = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "teacher",
  "old lady",
  "professor",
  "hamster",
  "dog",
];
const verbs = [
  "kicked",
  "ran",
  "flew",
  "dodged",
  "sliced",
  "rolled",
  "died",
  "breathed",
  "slept",
  "killed",
];
const adjectives = [
  "beautiful",
  "lazy",
  "professional",
  "lovely",
  "dumb",
  "rough",
  "soft",
  "hot",
  "vibrating",
  "slimy",
];
const adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];
const preposition = [
  "down",
  "into",
  "up",
  "on",
  "upon",
  "below",
  "above",
  "through",
  "across",
  "towards",
];

function randGen() {
  return Math.floor(Math.random() * 10);
}

function sentence() {
  const rand1 = randGen();
  const rand2 = randGen();
  const rand3 = randGen();
  const rand4 = randGen();
  const rand5 = randGen();
  const rand6 = randGen();
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  return (
    "The " +
    adjectives[rand1] +
    " " +
    nouns[rand2] +
    " " +
    adverbs[rand3] +
    " " +
    verbs[rand4] +
    " because some " +
    nouns[rand1] +
    " " +
    adverbs[rand1] +
    " " +
    verbs[rand1] +
    " " +
    preposition[rand1] +
    " a " +
    adjectives[rand2] +
    " " +
    nouns[rand5] +
    " which, became a " +
    adjectives[rand3] +
    ", " +
    adjectives[rand4] +
    " " +
    nouns[rand6] +
    "."
  );
}

const users = [
  "Iman",
  "Victoria",
  "Shuang",
  "Xiaofan",
  "Pablo",
  "Shannon",
  "Kelly",
  "Yash",
  "Elijah",
  "Jack",
];

function PostButton(props) {
  let style = {
    width: 70,
    height: 20,
    color: "green",
  };
  return (
    <button style={style} onClick={() => props.handleClick()}>
      {props.label}
    </button>
  );
}

function PostText(props) {
  let style = {
    width: props.width,
    marginRight: "10px",
  };
  return <div style={style}>{props.text}</div>;
}

function Post(props) {
  let style = {
    display: "flex",
    border: "1px solid green",
    margin: "10px",
  };
  return (
    <div style={style}>
      <PostText text={props.sentence} width="200" /> Votes:{" "}
      <PostText text={props.upvotesNum} width="20" color="blue" />{" "}
      <span>
        {props.upvotes.map((uP, idx) => {
          return (
            <span style={{ marginRight: "10px" }} key={idx}>
              {uP}
            </span>
          );
        })}
      </span>{" "}
      <PostText text={props.author} width="20" color="blue" />{" "}
      <PostButton label="Upvote" handleClick={props.upVote} />
    </div>
  );
}

function PostList(props) {
  return (
    <ol>
      {Object.keys(props.sentences).map((sId) => {
        const sentence = props.sentences[sId];
        return (
          <Post
            key={sId}
            sentence={sentence.sentence}
            author={sentence.author}
            upvotes={sentence.upvotes}
            upvotesNum={sentence.upvotesNum}
            upVote={() => props.upVote(sId)}
          />
        );
      })}
    </ol>
  );
}

const authenticatedUser = users[randGen()];

const Sentences = (props) => {
  const [value, setValue] = useState("");
  const [sentences, setSentences] = useState({});

  useEffect(() => {
    setSentences((oldSentences) => {
      for (let sNum = 0; sNum < 10; sNum++) {
        const upvotesNum = randGen();
        const upvotes = [];
        for (let uP = 0; uP < upvotesNum.lengthl; uP++) {
          upvotes.push(users[randGen()]);
        }
        oldSentences = {
          ...oldSentences,
          [Math.floor(Math.random() * 1000000000)]: {
            sentence: sentence(),
            author: users[randGen()],
            upvotes: upvotes,
            upvotesNum: randGen(),
          },
        };
      }
      return oldSentences;
    });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addSentence = () => {
    setSentences((oldSentences) => {
      const content = {
        sentence: value,
        author: authenticatedUser,
        upvotes: [],
        upvotesNum: 0,
      };
      oldSentences = {
        ...oldSentences,
        [Math.floor(Math.random() * 1000000000)]: content,
      };
      return oldSentences;
    });
  };

  const upVote = (sId) => {
    setSentences((oldSentences) => {
      oldSentences = {
        ...oldSentences,
        [sId]: {
          ...oldSentences[sId],
          upvotes: [...oldSentences[sId].upvotes, authenticatedUser],
          upvotesNum: oldSentences[sId].upvotesNum + 1,
        },
      };
      return oldSentences;
    });
  };
  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={addSentence}>Create</button>

      <PostList sentences={sentences} upVote={upVote} />
    </div>
  );
};

export default Sentences;
