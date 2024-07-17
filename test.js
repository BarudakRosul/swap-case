const assert = require("assert");
require("./index");

describe("Testing toSwapCase() prototype", function() {
  it("should convert all lowercase letters to uppercase and vice versa", function() {
    const text = "Hello World";
    const result = text.toSwapCase();
    assert.strictEqual(result, "hELLO wORLD");
  });

  it("should handle strings with all uppercase letters", function() {
    const text = "UPPERCASE";
    const result = text.toSwapCase();
    assert.strictEqual(result, "uppercase");
  });

  it("should handle strings with all lowercase letters", function() {
    const text = "lowercase";
    const result = text.toSwapCase();
    assert.strictEqual(result, "LOWERCASE");
  });

  it("should handle strings with mixed case letters", function() {
    const text = "MiXeD CaSe";
    const result = text.toSwapCase();
    assert.strictEqual(result, "mIxEd cAsE");
  });

  it("should handle strings with non-alphabetic characters", function() {
    const text = "123!@#ABCabc";
    const result = text.toSwapCase();
    assert.strictEqual(result, "123!@#abcABC");
  });

  it("should handle an empty string", function() {
    const text = "";
    const result = text.toSwapCase();
    assert.strictEqual(result, "");
  });

  it("should handle strings with spaces only", function() {
    const text = "     ";
    const result = text.toSwapCase();
    assert.strictEqual(result, "     ");
  });

  it("should handle strings with mixed characters and spaces", function() {
    const text = "HeLLo 123 WoRLd!";
    const result = text.toSwapCase();
    assert.strictEqual(result, "hEllO 123 wOrlD!");
  });
});
