import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

/** TRACKS query to retrieve all tracks */
export const TRACKS = gql`
  query Query {
    tracksForHome {
      id
      title
      thumbnail
      modulesCount
      length
      author {
        photo
        name
      }
    }
  }
`;

const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
