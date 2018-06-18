"use strict";

describe("pow", function () {

  it("возводит в n-ю степень", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("возводит в 4-ю степень", function () {
    assert.equal(pow(2, 4), 16);
  });

});