import Flexsearch, { Index } from "flexsearch";

interface Document {
  id: number;
  title: string;
  // text: string;
  pos: {
    lon: number;
    lat: number;
  };
}

// const documents: Document[] = [
//   {
//     id: 1,
//     title: "ipsum1",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     title: "ipsum2",
//     text:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     id: 3,
//     title: "ipsum3",
//     text:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
// ];

const documents: Document[] = [
  {
    id: 99,
    title: "普通科棟",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 1,
    title: "機械科棟",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 2,
    title: "電気科棟",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 4,
    title: "建築科棟",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 7,
    title: "第二普通科棟",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 8,
    title: "専攻科棟",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 9,
    title: "管理棟",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 10,
    title: "図書館棟",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 15,
    title: "清心館",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 13,
    title: "第一体育館",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 12,
    title: "第2体育館",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
  {
    id: 11,
    title: "笠井研究室",
    pos: {
      lon: 123,
      lat: 234,
    },
  },
];

const [, , searchText] = process.argv;

(async () => {
  console.log("searchText: ", searchText);

  const index = Flexsearch.create({
    encode: false,
    // eslint-disable-next-line no-control-regex
    tokenize: (str) => str.replace(/[\x00-\x7F]/g, "").split(""),
    cache: true,
    doc: {
      id: "id",
      field: ["title", "text"],
    },
  }) as Index<Document>;

  documents.forEach((v) => index.add(v));

  const results = await index.search({
    query: searchText,
    limit: 25,
    field: ["title", "text"],
  });
  console.log(results);
})();
