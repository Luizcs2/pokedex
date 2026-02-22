import { Cache } from "../pokecache";
import {describe,test,expect} from "vitest";


test.concurrent.each([

    {
        key:" https://pokeapi.co/api/v2/location-area",
        val: {
            name: "location-area",
            url: "https://pokeapi.co/api/v2/location-area",
        },
        interval: 1000,
    },
    {
        key:" https://pokeapi.co/api/v2/location-area/path",
        val: {
            name: "location-area-path",
            url: "https://pokeapi.co/api/v2/location-area/path",
        },
        interval: 1000,
    },
])
("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval + 100));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});



