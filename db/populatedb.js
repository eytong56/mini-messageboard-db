import { Client } from "pg";
import "dotenv/config";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (name, text)
VALUES
  ('MooDeng', 'Rawr!'),
  ('globCat', 'Hello there'),
  ('Trout', 'I am a dog.');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
