import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("checks the synthetic merge candidate", () => {
  const fixture = JSON.parse(readFileSync(new URL("fixture.json", import.meta.url), "utf8"));
  assert.equal(fixture.marker, "ready");
  assert.ok(Number.isInteger(fixture.revision) && fixture.revision >= 0);
});
