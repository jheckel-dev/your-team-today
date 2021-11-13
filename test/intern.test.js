const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Business School";
  const e = new Intern("Ryan Howard", 1, "r.howard@dundermifflin.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Ryan Howard", 1, "r.howard@dundermifflin.com", "Business School");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Ryan Howard", 1, "r.howard@dundermifflin.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});